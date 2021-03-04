---
title: PostgreSQL
emoji: "\U0001F418"
tags:
  - postgresql
  - sql
  - database
link: null
created: 2020-07-01T16:33:32.000Z
modified: 2020-07-22T00:48:08.000Z
---

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
