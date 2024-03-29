---
title: Columnar Database
emoji: 📝
tags:
  - database
link: https://www.holistics.io/blog/the-rise-and-fall-of-the-olap-cube/
created: 2021-06-23T10:48:25.000Z
modified: 2021-06-23T10:48:25.000Z
---

![](https://image.slidesharecdn.com/columnstoretutorialvldb09-100418160013-phpapp01/95/vldb-2009-tutorial-on-columnstores-2-728.jpg?cb=1271606504)

As the illustration above shows. A typical relational database `stores its data in row form`. A single row for a transaction, for instance, would contain the fields date, customer, price, product_sku and so on.

A columnar database, however, `stores each of these fields in separate columns`.

> OLAP means online analytical processing.

## Three Main Benefits Of Storing Your Data In Columns

- Columnar databases have higher read efficiency.
- Columnar databases also compress better than row-based relational databases
- The final benefit is that compression and dense-packing in columnar databases free up space
