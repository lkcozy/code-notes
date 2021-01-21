---
title: AWS Service
emoji: 📝
tags:
  - aws
link:
---

## DynamoDB

### [The difference between scan and query in dynamodb? When use scan / query?](https://stackoverflow.com/questions/43452219/what-is-the-difference-between-scan-and-query-in-dynamodb-when-use-scan-query)

A `scan` operation always scan the entire table before it filters out the desired values, which means it takes more time and space to process data operations such as read, write and delete.

### tools

#### [DynamoDB Toolbox](https://github.com/jeremydaly/dynamodb-toolbox)

The DynamoDB Toolbox is a set of tools that makes it easy to work with Amazon DynamoDB and the DocumentClient. It's designed with Single Tables in mind, but works just as well with multiple tables. It lets you define your Entities (with typings and aliases) and map them to your DynamoDB tables. You can then generate the API parameters to put, get, delete, update, query, scan, batchGet, and batchWrite data by passing in JavaScript objects. The DynamoDB Toolbox will map aliases, validate and coerce types, and even write complex UpdateExpressions for you

#### [dynamodb-paginator](https://www.npmjs.com/package/dynamodb-paginator)

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

#### [Sort-Key](https://www.npmjs.com/package/sort-key)

Generating DynamoDB sort keys from multiple string parts as [recommended by AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html). It uses # as separator and knows how to escape it when given on one of the key parts.

```js
[country]#[region]#[state]#[county]#[city]#[neighborhood]

import SortKey from 'sort-key';
const SK = SortKey.generate('1532208', '2020-09-11T15:30:06.822Z');
// 1532208#2020-09-11T15:30:06.822Z
const [order, time] = SortKey.parse(SK);
// "1532208" "2020-09-11T15:30:06.822Z"
```

#### [dynamodb-update-expression](https://github.com/4ossiblellc/dynamodb-update-expression)

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
