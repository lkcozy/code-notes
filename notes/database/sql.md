---
title: SQL cheatsheet
emoji: 💡
tags:
  - sql
  - database
  - cheatsheet
link: https://codebond.co/tutorial/other/sql-cheatsheet
---

## Create Database

```sql
CREATE DATABASE nameofdatabase;

example:

CREATE DATABASE school;
```

## Create Table

```sql
CREATE TABLE tablename(attribute datatype);

example:

CREATE TABLE student(rollno INT AUTO_INCREMENT,
 first_name VARCHAR(100),
 last_name VARCHAR(100),
 class INT,DOB VARCHAR(50), PRIMARY KEY(rollno);
```

## Insert Row/Record

```sql
INSERT INTO tablename(attribute) values('value');

example:
/* inserting single value */

query:
INSERT INTO student(first_name,last_name,class,DOB)
  values('John','Doe',9,'21 oct 1999');

result:
+--------+------------+-----------+-------+-------------+
| rollno | first_name | last_name | class | DOB         |
+--------+------------+-----------+-------+-------------+
|      1 | John       | Doe       |     9 | 21 oct 1999 |
+--------+------------+-----------+-------+-------------+

/* inserting multiple values */

query:
INSERT INTO student(first_name,last_name,class,DOB)
  values('Jim','Shaw',10,'7 dec 2000'),
  ('Brad','Traversy',10,'28 apr 2010'),
  ('Chris','Walker',5,'4 jan 2014');

result:
+--------+------------+-----------+-------+-------------+
| rollno | first_name | last_name | class | DOB         |
+--------+------------+-----------+-------+-------------+
|      1 | John       | Doe       |     9 | 21 oct 1999 |
|      2 | Jim        | Shaw      |    10 | 7 dec 2000  |
|      3 | Brad       | Traversy  |    10 | 28 apr 2010 |
|      4 | Chris      | Walker    |     5 | 4 jan 2014  |
+--------+------------+-----------+-------+-------------+
```
