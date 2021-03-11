---
title: AWS DynamoDB
emoji: 📝
tags:
  - aws
  - dynamodb
link: https://www.serverlesslife.com/DynamoDB_Design_Patterns_for_Single_Table_Design.html
---

DynamoDB is designed to `hold a large amount of data`. That is why data is partitioned. When you request the data, you `do not` want to spend time and compute power to `gather data from various tables`. That is why DynamoDB `does not have joins`. The solution is to `store data in a form that is already prepared for our access patterns.`

## Highlights

- `Global secondary index (GSI)` is the central part of most design patterns in a #DynamoDB single table design.

- Principals of #DynamoDB data modeling: `draw ER`, `GET ALL ACCESS PATTERNS`, `denormalize`, `avoid scans`, `filters`, `transactions`, `prefers eventually consistent reads`, learn #singletabledesign

- The most simple denormalization is to `contain all the data in one item`.

## Basics

- `Partition (hash) key (PK)`: Defines in which portion the data is stored. Use as a distinct value as possible. You can only query by the exact value. UUID is commonly used.
- `Sort (range) key (SK)`: Defines the sorting of items in the partition. It is optional. Combined with the partition key, it defines the primary key of the item. You can query it by condition expression (=, >, <, between, begins_with, contains, in) combined with PK. You can never leave out PK when querying.
- `Local secondary index`: Allows defining another sort key for the same partition key. It can only be created when you create the table. Compared to the global secondary index, it offers consistent reads. You can have up to five LSI on a table.
- `Global secondary index (GSI)`: Allows defining a new partition and optional sort key. It should be preferred compared to the LSI, except when you need consistent reads. You can have up to 20 GSI on a table, so you would try to reuse them within the same table. GSI is the central part of most design patterns in a single table design. Both LSI and GSI are implemented as copying all the data to a new table-like structure. You have projections that enable you to copy only the data that you need.
- `Attributes` can be `scalar (single value)` or `complex (list, maps, sets of unique values)`.

## [The difference between scan and query in dynamodb? When use scan / query?](https://stackoverflow.com/questions/43452219/what-is-the-difference-between-scan-and-query-in-dynamodb-when-use-scan-query)

A `scan` operation always `scan the entire table` before it filters out the desired values, which means it `takes more time and space` to process data operations such as read, write and delete.

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

- [How to use DynamoDB global secondary indexes to improve query performance and reduce costs](https://aws.amazon.com/blogs/database/how-to-use-dynamodb-global-secondary-indexes-to-improve-query-performance-and-reduce-costs/)

![](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2018/12/19/DynamoDBSecondaryIndexes1.png)

Global secondary indexes enhance the querying capability of DynamoDB. This post shows how you can use global secondary indexes and patterns such as data filtering and data ordering to achieve read isolation and reduce query costs. The recent limit increase of the maximum number of global secondary indexes per DynamoDB table from 5 to 20 can help you apply these usage patterns without worrying about hitting limits.

- [How to Make a Serverless GraphQL API using Lambda and DynamoDB](https://www.serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb)
