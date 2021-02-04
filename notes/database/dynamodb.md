---
title: DynamoDB
emoji: 📝
tags:
  - database
  - dynamodb
  - python
  - aws
link: https://www.dynamodbguide.com/what-is-dynamo-db
---

DynamoDB is a hosted NoSQL database offered by Amazon Web Services (AWS). It offers:

reliable performance even as it scales;
a managed experience, so you won't be SSH-ing into servers to upgrade the crypto libraries;
a small, simple API allowing for simple key-value access as well as more advanced query patterns.

DynamoDB is a particularly good fit for the following use cases:

- **Applications with large amounts of data and strict latency requirements**. As your amount of data scales, JOINs and advanced SQL operations can slow down your queries. With DynamoDB, your queries have predictable latency up to any size, including over 100 TBs!

- **Serverless applications using AWS Lambda. AWS Lambda provides auto-scaling, stateless, ephemeral compute in response to event triggers**. DynamoDB is accessible via an HTTP API and performs authentication & authorization via IAM roles, making it a perfect fit for building Serverless applications.

- **Data sets with simple, known access patterns**. If you're generating recommendations and serving them to users, DynamoDB's simple key-value access patterns make it a fast, reliable choice.

## [Scan vs Query](https://dynobase.dev/dynamodb-nodejs/)

- scan: scan fetches all elements and only after does filtering. It is not efficient.
- query: Query only works `against index fields`. You can't run a query against a non index field. If you could run query against any field then there would be no reason for scan to exist. If you want to run a query instead of an inefficient scan, `you have to use a field you have defined in either the primary key, or a secondary index`.

### [Could I limit the return query/scan items size from dynamodb?](https://stackoverflow.com/questions/63680861/dynamodb-limit-on-query)

No. Unfortunately there is no Query options or any other operation that can guarantee `x` items in a single request.

To understand why this is the case (it's not just laziness on Amazon's side), consider the following extreme case: you have a huge database with one billion items, but do a very specific query which has just 5 matching items, and now making the request you wished for: "give me back 5 items". Such a request would need to read the entire database of a billion items, before it can return anything, and the client will surely give up by then. So this is not how DyanmoDB's Limit works. It limits the amount of work that DyanamoDB needs to do before responding. So if Limit = 100, DynamoDB will read internally 100 items, which takes a bounded amount of time. But you are right that you have no idea whether it will respond with 100 items (if all of them matched the filter) or 0 items (if none of them matched the filter).

So to do what you want to do efficiently, you'll need to think of a different way to model your data - i.e., how to organize the partition and sort keys. There are different ways to do it, each has its own benefits and downsides, you'll need to consider your options for yourself.

### [Query with Sorting](https://dynobase.dev/dynamodb-nodejs/#query-items)

DynamoDB offers only one way of sorting the results on the database side - using the sort key. If your table does not have one, your sorting capabilities are limited to sorting items in application code after fetching the results. However, if you need to sort DynamoDB results on sort key descending or ascending, you can use following syntax:

```js
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const dynamoDB = new AWS.DynamoDB.DocumentClient();

dynamoDB
  .query({
    TableName: 'my-table',
    IndexName: 'Index', // Main one
    KeyConditionExpression: 'id = :hashKey and date > :rangeKey'
    ExpressionAttributeValues: {
      ':hashKey': '123',
      ':rangeKey': 20150101
    },
    ScanIndexForward: true // true or false to sort by "date" Sort/Range key ascending or descending
  })
  .promise()
  .then(data => console.log(data.Items))
  .catch(console.error);
```

### Query (and Scan) DynamoDB Pagination

Both Query and Scan operations returns results `up to 1MB of items`. If you need to fetch more records, you need to invoke a second call to fetch the next page of results. If LastEvaluatedKey is present in response object, this table has more items like requested and another call with ExclusiveStartKey should be sent to fetch more of them:

```js
const getAll = async () => {
  let result, accumulated, ExclusiveStartKey;

  do {
    result = await DynamoDB.query({
      TableName: argv.table,
      ExclusiveStartKey,
      Limit: 100,
      KeyConditionExpression: 'id = :hashKey and date > :rangeKey'
      ExpressionAttributeValues: {
        ':hashKey': '123',
        ':rangeKey': 20150101
      },
    }).promise();

    ExclusiveStartKey = result.LastEvaluatedKey;
    accumulated = [...accumulated, ...result.Items];
  } while (result.Items.length || result.LastEvaluatedKey);

  return accumulated;
};

getAll()
  .then(console.log)
  .catch(console.error);
```

## [Hierarchical Data](https://www.dynamodbguide.com/hierarchical-data)

A good primary key does at least two things:

- It enables you to uniquely identify each item for writes & updates, and
- It evenly distributes your data across the partition key
  Ideally your primary key will also satisfy at least one of your read access patterns as well.

- use the Store Number as a simple primary key
- A global secondary index
  - a HASH key of Country, indicating the country where the store is located, and
  - a RANGE key named StateCityPostcode that is a string combining the State, City, and Postcode with each element separated by the pound sign (`<STATE>#<CITY>#<POSTCODE>`). For example, a store in Omaha, NE would be stored as `NE#OMAHA#68144`.

### Create a dynamodb table

```python
import boto3

client = boto3.client('dynamodb', endpoint_url='http://localhost:8000')

try:
    resp = client.create_table(
        AttributeDefinitions=[
            {
                "AttributeName": "Country",
                "AttributeType": "S"
            },
            {
                "AttributeName": "StateCityPostcode",
                "AttributeType": "S"
            },
            {
                "AttributeName": "StoreNumber",
                "AttributeType": "S"
            }
        ],
        TableName="StarbucksLocations",
        KeySchema=[
            {
                "AttributeName": "StoreNumber",
                "KeyType": "HASH"
            }
        ],
        GlobalSecondaryIndexes=[
            {
                "IndexName": "StoreLocationIndex",
                "KeySchema": [
                    {
                        "AttributeName": "Country",
                        "KeyType": "HASH"
                    },
                    {
                        "AttributeName": "StateCityPostcode",
                        "KeyType": "RANGE"
                    }
                ],
                "Projection": {
                    "ProjectionType": "ALL"
                },
                "ProvisionedThroughput": {
                    "ReadCapacityUnits": 1,
                    "WriteCapacityUnits": 1
                }
            },
        ],
        ProvisionedThroughput={
            "ReadCapacityUnits": 1,
            "WriteCapacityUnits": 1
        }
    )
    print("Table created successfully!")
except Exception as e:
    print("Error creating table:")
    print(e)
```

### Load data

```python
import codecs
import csv

import boto3

client = boto3.client('dynamodb', endpoint_url='http://localhost:8000')

def write_item(row):
    range_key = "{state}#{city}#{postcode}".format(
        state=row['State/Province'].upper(),
        city=row['City'].upper(),
        postcode=row['Postcode'].upper()
    )
    client.put_item(
        TableName="StarbucksLocations",
        Item={
            "Country": {"S": row.get('Country') or 'NULL' },
            "State": {"S": row.get('State/Province') or 'NULL' },
            "City": {"S": row.get('City') or 'NULL' },
            "Postcode": {"S": row.get('Postcode') or 'NULL' },
            "StateCityPostcode": {"S": range_key },
            "StoreNumber": {"S": row.get('Store Number') or 'NULL' },
            "StoreName": {"S": row.get('Store Name') or 'NULL' },
            "StreetAddress": {"S": row.get('Street Address') or 'NULL' },
            "Latitude": {"S": row.get('Latitude') or 'NULL' },
            "Longitude": {"S": row.get('Longitude') or 'NULL' },
            "PhoneNumber": {"S": row.get('Phone Number') or 'NULL' },
        },
    )


if __name__ == "__main__":
    count = 0
    with codecs.open('directory.csv', 'r', encoding='utf8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            write_item(row)
            count += 1
            if count % 1000 == 0:
                print("{} locations written...".format(count))
```

### Retrieve Data

```python
import pprint

import boto3
import click

client = boto3.client('dynamodb', endpoint_url='http://localhost:8000')
DEFAULT_COUNTRY="US"
DEFAULT_STATE="NE"
DEFAULT_CITY="OMAHA"
DEFAULT_POSTCODE="68144"

@click.command()
@click.option('--country', default=DEFAULT_COUNTRY, help="Country for stores to query. Default is 'US'.", type=str)
@click.option('--state', help="State abbreviation for stores to query. E.g.: 'NE'", type=str)
@click.option('--city', help="City for stores to query. E.g.: 'Omaha'", type=str)
@click.option('--postcode', help="Post code for stores to query. E.g.: '68144'", type=str)
@click.option('--default-state', help="Use defaults to query at state level.", is_flag=True)
@click.option('--default-city', help="Use defaults to query at city level.", is_flag=True)
@click.option('--default-postcode', help="Use defaults to query at post code level.", is_flag=True)
@click.option('--count', help="Only show counts of items.", is_flag=True)
def query_store_locations(country, state, city, postcode, default_state, default_city, default_postcode, count):
    info_message = "Querying locations in country {}".format(country)
    statecitypostcode = ''
    if default_state:
        state = DEFAULT_STATE
    if default_city:
        state = DEFAULT_STATE
        city = DEFAULT_CITY
    if default_postcode:
        state = DEFAULT_STATE
        city = DEFAULT_CITY
        postcode = DEFAULT_POSTCODE
    if state:
        statecitypostcode += state.upper()
        info_message += ", state {}".format(state)
    if city and state:
        statecitypostcode += "#" + city.upper()
        info_message += ", city {}".format(city)
    if postcode and city and state:
        statecitypostcode += "#" + postcode
        info_message += ", postcode {}".format(postcode)
    info_message += "."
    print(info_message)
    key_condition_expression = "Country = :country"
    expression_values = {
        ":country": {"S": country},
    }
    if statecitypostcode:
        key_condition_expression += " AND begins_with(StateCityPostcode, :statecitypostcode)"
        expression_values[':statecitypostcode'] = {"S": statecitypostcode}
        print("The key expression includes a begins_with() function with input of '{}'\n".format(statecitypostcode))
    else:
        print("No statecitypostcode specified. Retrieving all results in Country.\n")
    try:
        resp = client.query(
            TableName="StarbucksLocations",
            IndexName='StoreLocationIndex',
            KeyConditionExpression=key_condition_expression,
            ExpressionAttributeValues=expression_values
        )
        if count:
            print("Retrieved {} locations.".format(resp['Count']))
        else:
            pprint.pprint(resp)
    except Exception as e:
        print("Error running query:")
        print(e)


if __name__ == "__main__":
    query_store_locations()
```

## References

### [How to use DynamoDB global secondary indexes to improve query performance and reduce costs](https://aws.amazon.com/blogs/database/how-to-use-dynamodb-global-secondary-indexes-to-improve-query-performance-and-reduce-costs/)

![](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2018/12/19/DynamoDBSecondaryIndexes1.png)

Global secondary indexes enhance the querying capability of DynamoDB. This post shows how you can use global secondary indexes along with patterns such as data filtering and data ordering to achieve read isolation and reduce query costs. The recent limit increase of the maximum number of global secondary indexes per DynamoDB table from 5 to 20 can help you apply these usage patterns without worrying about hitting limits.
