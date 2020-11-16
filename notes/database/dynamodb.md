---
title: DynamoDB
emoji: 📝
tags:
  - database
  - dynamodb
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
