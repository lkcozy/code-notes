---
title: PostgreSQL
emoji: "\U0001F418"
tags:
  - postgresql
  - sql
  - database
link: null
created: 2020-07-01T16:33:32.000Z
modified: 2021-11-15T20:22:23.000Z
---

## Geometry vs. Geography

Use geography when dealing with regional/global scale data and geometry when dealing with local scale data.

- Geometry, where it assumes all of your data lives on a Cartesian plane (like a map projection); More functions,High performance, recommended for compact spatial use cases with in country, province etc, not spanning across continent calculations

- Geography, where it assumes that your data is made up of points on the earth’s surface, as specified by latitudes and longitudes. More precision, Les number of functions, less performing than geometry ,recommended for calculation spanning multiple geographies. We should also specify spatial reference id like 4326.

## Reinstall PostgreSQL

```sh
brew reinstall postgresql
```

createuser sta with encrypted password '12345678';

alter user sta with encrypted password '12345678';

grant all privileges on database sensorthingsexample to sta

## Resources

- [PostgREST](https://github.com/PostgREST/postgrest)

![](https://github.com/PostgREST/postgrest/blob/master/static/bigger-logo.png)

PostgREST serves a fully RESTful API from any existing PostgreSQL database. It provides a cleaner, more standards-compliant, faster API than you are likely to write from scratch.
