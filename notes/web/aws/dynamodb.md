---
title: AWS DynamoDB
emoji: "\U0001F4DD"
tags:
  - aws
  - database
  - dynamodb
link: >-
  https://www.serverlesslife.com/DynamoDB_Design_Patterns_for_Single_Table_Design.html
created: 2021-03-05T07:28:49.000Z
modified: 2021-03-30T16:55:25.000Z
---

- [Highlights](#highlights)
- [Suitable Use Cases](#suitable-use-cases)
- [Basics](#basics)
- [Official Guide:cheat sheet](#official-guidecheat-sheet)
- [Handle time series Data](#handle-time-series-data)
  - [Scenario #1](#scenario-1)
- [The difference between scan and query in dynamodb? When use scan / query?](#the-difference-between-scan-and-query-in-dynamodb-when-use-scan--query)
- [Scan vs Query](#scan-vs-query)
- [Could I limit the return query/scan items size from dynamodb?](#could-i-limit-the-return-queryscan-items-size-from-dynamodb)
- [Query with Sorting](#query-with-sorting)
- [Query (and Scan) DynamoDB Pagination](#query-and-scan-dynamodb-pagination)
- [Hierarchical Data](#hierarchical-data)
- [Principals of Data Modeling](#principals-of-data-modeling)
- [Tools](#tools)
  - [DynamoDB Toolbox](#dynamodb-toolbox)
  - [dynamodb-paginator](#dynamodb-paginator)
  - [Sort-Key](#sort-key)
  - [dynamodb-update-expression](#dynamodb-update-expression)
  - [Spark+DynamoDB](#sparkdynamodb)
  - [Serverless Console](#serverless-console)
- [References](#references)

DynamoDB is designed to `hold a large amount of data`. That is why data is partitioned. When you request the data, you `do not` want to spend time and compute power to `gather data from various tables`. That is why DynamoDB `does not have joins`. The solution is to `store data in a form that is already prepared for our access patterns.`

## Highlights

- Keep the number of tables you use to a minimum. For most applications, `a single table` is all you need

- However, for `time series data`, you can often best handle it by using `one table per application per period`.

- `Global secondary index (GSI)` is the central part of most design patterns in a #DynamoDB single table design.

- Principals of #DynamoDB data modeling: `draw ER`, `GET ALL ACCESS PATTERNS`, `denormalize`, `avoid scans`, `filters`, `transactions`, `prefers eventually consistent reads`, learn #singletabledesign

- The most simple denormalization is to `contain all the data in one item`.

## Suitable Use Cases

DynamoDB is a particularly good fit for the following use cases:

- **Applications with large amounts of data and strict latency requirements**. As your amount of data scales, JOINs and advanced SQL operations can slow down your queries. With DynamoDB, your queries have predictable latency up to any size, including over 100 TBs!

- **Serverless applications using AWS Lambda. AWS Lambda provides auto-scaling, stateless, ephemeral compute in response to event triggers**. DynamoDB is accessible via an HTTP API and performs authentication & authorization via IAM roles, making it a perfect fit for building Serverless applications.

- **Data sets with simple, known access patterns**. If you're generating recommendations and serving them to users, DynamoDB's simple key-value access patterns make it a fast, reliable choice.

## Basics

- `Partition (hash) key (PK)`: Defines in which portion the data is stored. Use as a distinct value as possible. You can only query by the exact value. UUID is commonly used.
- `Sort (range) key (SK)`: Defines the sorting of items in the partition. It is optional. Combined with the partition key, it defines the primary key of the item. You can query it by condition expression (=, >, <, between, begins_with, contains, in) combined with PK. You can never leave out PK when querying.
- `Local secondary index`: Allows defining another sort key for the same partition key. It can only be created when you create the table. Compared to the global secondary index, it offers consistent reads. You can have up to five LSI on a table.
- `Global secondary index (GSI)`: Allows defining a new partition and optional sort key. It should be preferred compared to the LSI, except when you need consistent reads. You can have up to `20 GSI` on a table, so you would try to reuse them within the same table. GSI is the central part of most design patterns in a single table design. Both LSI and GSI are implemented as copying all the data to a new table-like structure. You have projections that enable you to copy only the data that you need.
- `Attributes` can be `scalar (single value)` or `complex (list, maps, sets of unique values)`.
- `Page size limit for query and scan`: There is a limit of `1 MB` per page, per query or scan.
- `KeyType`: `HASH` for `Partition key` and `RANGE` for `Sort key`

## [Official Guide:cheat sheet](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/CheatSheet.html)

## Handle time series Data

[More Details](./dynamodb_time_series)

### Scenario #1

`Read today's events most frequently, yesterday's events much less frequently, and then older events very little at all`

The idea is to `allocate the required resources for the current period that will experience the highest volume of traffic` and scale down provisioning for older tables that are not used actively, therefore saving costs.

The following design pattern often handles this kind of scenario effectively:

- `Create one table per period`, provisioned with the required read and write capacity and the required indexes.

- `Before the end of each period, prebuild the table for the next period`. Just as the current period ends, direct event traffic to the new table. You can assign names to these tables that specify the periods they have recorded.

- `As soon as a table is no longer being written to, reduce its provisioned write capacity to a lower value` (for example, 1 WCU), and provision whatever read capacity is appropriate. Reduce the provisioned read capacity of earlier tables as they age. You might choose to archive or delete the tables whose contents are rarely or never needed.

![](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/images/TimeSeries.png)

> Note: [Calculating WCU and RCU for Amazon DynamoDB](https://letsfigureout.com/2020/02/01/calculating-wcu-and-rcu-for-amazon-dynamodb/)

## [The difference between scan and query in dynamodb? When use scan / query?](https://stackoverflow.com/questions/43452219/what-is-the-difference-between-scan-and-query-in-dynamodb-when-use-scan-query)

A `scan` operation always `scan the entire table` before it filters out the desired values, which means it `takes more time and space` to process data operations such as read, write and delete.

## [Scan vs Query](https://dynobase.dev/dynamodb-nodejs/)

- scan: fetches all elements and only after does filtering. It is not efficient.
- query: only works `against index fields`. You can't run a query against a non index field. If you could run query against any field then there would be no reason for scan to exist. If you want to run a query instead of an inefficient scan, `you have to use a field you have defined in either the primary key, or a secondary index`.

## [Could I limit the return query/scan items size from dynamodb?](https://stackoverflow.com/questions/63680861/dynamodb-limit-on-query)

No. Unfortunately there is no Query options or any other operation that can guarantee `x` items in a single request.

To understand why this is the case (it's not just laziness on Amazon's side), consider the following extreme case: you have a huge database with one billion items, but do a very specific query which has just 5 matching items, and now making the request you wished for: "give me back 5 items". Such a request would need to read the entire database of a billion items, before it can return anything, and the client will surely give up by then. So this is not how DyanmoDB's Limit works. It limits the amount of work that DyanamoDB needs to do before responding. So if Limit = 100, DynamoDB will read internally 100 items, which takes a bounded amount of time. But you are right that you have no idea whether it will respond with 100 items (if all of them matched the filter) or 0 items (if none of them matched the filter).

So to do what you want to do efficiently, you'll need to think of a different way to model your data - i.e., how to organize the partition and sort keys. There are different ways to do it, each has its own benefits and downsides, you'll need to consider your options for yourself.

## [Query with Sorting](https://dynobase.dev/dynamodb-nodejs/#query-items)

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

## Query (and Scan) DynamoDB Pagination

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

## Principals of Data Modeling

- Draw the ER diagram as you usually do.
- `Get all access patterns before starting data modeling.`
- Denormalization
- Avoid hot partition.
- Do not use scan on large datasets.
- Do not use a filter on large datasets.
- Prefers eventually consistent reads.
- The data model is hard to change.
- Prepare for data model change.
- Avoid transactions.

| RDBMS data modeling                          | DynamoDB                                             |
| -------------------------------------------- | ---------------------------------------------------- |
| Access patterns can be defined later         | Access patterns must be defined before data modeling |
| Normalization                                | Denormalization                                      |
| Powerful ad hoc queries (SQL)                | Limiting query capabilities                          |
| Powerful transactions                        | Limiting transactions                                |
| Reasonably flexible to change the data model | Hard to change the data model                        |

- If you need to put ID in a sort key, consider using KSUID (K-Sortable Unique Identifier) instead of the commonly used UUID.

![](https://images.ctfassets.net/i8bfc4nr05rq/2qinBjIq0PNtAb2SF7tdRX/96fd0055966c7362d7f66ce3777e6528/asset_A4WDXnNV.png)

## Tools

### [DynamoDB Toolbox](https://github.com/jeremydaly/dynamodb-toolbox)

The DynamoDB Toolbox is a set of tools that makes it easy to work with Amazon DynamoDB and the DocumentClient. It's designed with Single Tables in mind, but works just as well with multiple tables. It lets you define your Entities (with typings and aliases) and map them to your DynamoDB tables. You can then generate the API parameters to put, get, delete, update, query, scan, batchGet, and batchWrite data by passing in JavaScript objects. The DynamoDB Toolbox will map aliases, validate and coerce types, and even write complex UpdateExpressions for you

### [dynamodb-paginator](https://www.npmjs.com/package/dynamodb-paginator)

Implementation of pagination for DynamoDB from the [following article](https://hackernoon.com/guys-were-doing-pagination-wrong-f6c18a91b232)

```js
import { getPaginatedResult, decodeCursor } from "dynamodb-paginator";
const limit = 25;
const params = decodeCursor(cursor) || {
  TableName: "Users",
  Limit: limit,
  KeyConditionExpression: "id = :id",
  ExpressionAttributeValues: {
    ":id": "1",
  },
};
const result = await dynoDB.query(params).promise();
return getPaginatedResult < IUser > (params, limit, result);
```

### [Sort-Key](https://www.npmjs.com/package/sort-key)

Generating DynamoDB sort keys from multiple string parts as [recommended by AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html). It uses # as separator and knows how to escape it when given on one of the key parts.

```js
[country]#[region]#[state]#[county]#[city]#[neighborhood]

import SortKey from 'sort-key';
const SK = SortKey.generate('1532208', '2020-09-11T15:30:06.822Z');
// 1532208#2020-09-11T15:30:06.822Z
const [order, time] = SortKey.parse(SK);
// "1532208" "2020-09-11T15:30:06.822Z"
```

### [dynamodb-update-expression](https://github.com/4ossiblellc/dynamodb-update-expression)

A small library providing the solution to generate DynamoDB update expression by comparing the original data with update/remove JSON object.

```js
var dynamodbUpdateExpression = require("dynamodb-update-expression");

var updateExpression = dynamodbUpdateExpression.getUpdateExpression(
  original,
  update
);
var removeExpression = dynamodbUpdateExpression.getRemoveExpression(
  original,
  remove
);
```

Sample output

```json
{
  "UpdateExpression": "SET #lastName = :lastName, #phones = :phones, #family = :family, #profilebusinesswebsite = :profilebusinesswebsite, #profilebusinessphone = :profilebusinessphone, #profileoffice = :profileoffice REMOVE #profilecompany",
  "ExpressionAttributeNames": {
    "#lastName": "lastName",
    "#phones": "phones",
    "#family": "family",
    "#profilebusinesswebsite": "profile.business.website",
    "#profilebusinessphone": "profile.business.phone",
    "#profileoffice": "profile.office",
    "#profilecompany": "profile.company"
  },
  "ExpressionAttributeValues": {
    ":lastName": "L. Doe",
    ":phones": ["1111-2222-333", "5555-4444-555", "2222-4444-555"],
    ":family": [
      {
        "id": 2,
        "role": "mother"
      }
    ],
    ":profilebusinesswebsite": "www.acmeinc.com",
    ":profilebusinessphone": "111222333",
    ":profileoffice": "1234 Market Street"
  }
}
```

### [Spark+DynamoDB](https://github.com/audienceproject/spark-dynamodb)

Plug-and-play implementation of an Apache Spark custom data source for AWS DynamoDB.

### [Serverless Console](https://marketplace.visualstudio.com/items?itemName=devAdvice.serverlessconsole)

![](https://github.com/domagojk/serverless-console/raw/master/gifs/dynamodb.gif)

Serverless Console is an alternative UI for AWS Cloudwatch. Its focus is on "serverless functions" but it can also be used for any kind of log group.

## References

- [What I’ve Learned From Using AWS DynamoDB in Production for More Than 3 Years](https://medium.com/@b.stoilov/what-ive-learned-from-using-aws-dynamodb-in-production-for-more-than-3-years-49a077886b5c)
- [How to Make a Serverless GraphQL API using Lambda and DynamoDB](https://www.serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb)
- [How to use DynamoDB global secondary indexes to improve query performance and reduce costs](https://aws.amazon.com/blogs/database/how-to-use-dynamodb-global-secondary-indexes-to-improve-query-performance-and-reduce-costs/)

![](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2018/12/19/DynamoDBSecondaryIndexes1.png)

Global secondary indexes enhance the querying capability of DynamoDB. This post shows how you can use global secondary indexes and patterns such as data filtering and data ordering to achieve read isolation and reduce query costs. The recent limit increase of the maximum number of global secondary indexes per DynamoDB table from 5 to 20 can help you apply these usage patterns without worrying about hitting limits.
