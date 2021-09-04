---
title: "Design patterns for high-volume, time-series data in Amazon DynamoDB"
emoji: "\U0001F4DD"
tags:
  - aws
  - dynamodb
  - database
  - time
link: >-
  https://aws.amazon.com/blogs/database/design-patterns-for-high-volume-time-series-data-in-amazon-dynamodb/
created: 2021-03-30T16:55:25.000Z
modified: 2021-03-30T16:55:25.000Z
---

Time-series data requires optimization techniques generally considered to be anti-patterns for DynamoDB. One of these techniques is using `multiple tables for each time period`. This technique maximizes write throughput and optimizes costs for both data that is not accessed frequently and analytical queries.

![](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2019/02/21/time-series-dynamodb-1.gif)

## Analytical needs vs Table Design

I also must consider my analytical needs when estimating how often I should switch to a new period. For example, I might want to analyze what’s happened in the `last year`. In this case, I could use `quarterly tables` so that I can retrieve the data more efficiently `with four parallel queries` and then aggregate the four result sets.

In other use cases, I might want to analyze only `last quarter’s` data and I could decide to use `monthly tables`. This would allow me to perform my analysis by running `three parallel queries` (one for each month in the quarter). On the other hand, if my analysis requires specific `daily insights`, I might opt for `daily tables`.

## Scenario #1

`Read today's events most frequently, yesterday's events much less frequently, and then older events very little at all `

The idea is to `allocate the required resources for the current period that will experience the highest volume of traffic` and scale down provisioning for older tables that are not used actively, therefore saving costs.

The following design pattern often handles this kind of scenario effectively:

- `Create one table per period`, provisioned with the required read and write capacity and the required indexes.

- `Before the end of each period, prebuild the table for the next period`. Just as the current period ends, direct event traffic to the new table. You can assign names to these tables that specify the periods they have recorded.

- `As soon as a table is no longer being written to, reduce its provisioned write capacity to a lower value` (for example, 1 WCU), and provision whatever read capacity is appropriate. Reduce the provisioned read capacity of earlier tables as they age. You might choose to archive or delete the tables whose contents are rarely or never needed.

![](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/images/TimeSeries.png)

> Note: [Calculating WCU and RCU for Amazon DynamoDB](https://letsfigureout.com/2020/02/01/calculating-wcu-and-rcu-for-amazon-dynamodb/)
