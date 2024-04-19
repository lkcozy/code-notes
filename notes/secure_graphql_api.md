---
title: GraphQL Security Checklist
emoji: 📝
tags:
  - graphql
  - security
link: https://www.apollographql.com/blog/graphql/security/9-ways-to-secure-your-graphql-api-security-checklist/
created: 2021-06-23T17:53:54.000Z
modified: 2021-06-23T17:53:54.000Z
---

Nine techniques for securing your GraphQL API in production.

- **Auth**
  - `1. Authentication`: determining whether a given user is logged in and subsequently remembering who they are
    - Solution: using JSON Web Tokens (or JWTs) to manage user auth
  - `2. Authorization`: determining what a given user has permission to do or see
    - Solution: apply access control rules
- **Reduce attack surface area**
  - `3. Mitigate malicious queries`
    - Solutions
      - Using a library like [graphql-depth-limit](https://github.com/stems/graphql-depth-limit) to specify the max depth
      - Paginate list fields where appropriate
      - Improve validation and sanitization
        - Additional rules to the [OSWAP GraphQL-specific recommendations](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html#general-practices)
        - Reject invalid input without giving away too many details
      - Using [query-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis) as a way to analyze queries for complexity and block them if they’re too expensive.
      - Use timeouts
      - Rate limit APIs
      - Safelist operations
  - `4. Limit API discoverability`: making it harder for malicious parties to discover API capabilities
    - Solutions
      - Turn off introspection in production
      - [Masking and logging errors](https://www.apollographql.com/docs/apollo-server/data/errors/#masking-and-logging-errors), which enables you to omit sensitive or irrelevant data.
      - Avoid schema autogeneration, following the principle of a demand-oriented schema (see [PrincipledGraphQL](https://principledgraphql.com/agility#4-abstract-demand-oriented-schema))
      - Query subgraphs only
  - `5. Batch requests`
    - Solutions
      - Limit query breadth
      - Use data loaders to prevent DoS-ing yourself
      - [Using Memcached/Redis as a cache storage backend](https://www.apollographql.com/docs/apollo-server/data/data-sources/#using-memcachedredis-as-a-cache-storage-backend)
- **Observability, monitoring, alerting & access**
  - Monitor how your API is being used and by whom
  - `6. Observability`
    - Solution: Set this up with Apollo Studio’s Client Awareness feature
  - `7. Monitoring`
    - Solution: Using Apollo Studio
  - `8. Performance alerts`
    - Solution: Using Apollo Studio
  - `9. Managing graph access`
    - Solution: manage access to different aspects of your graph internally
