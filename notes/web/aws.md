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
