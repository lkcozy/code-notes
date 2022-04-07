---
title: Graphql-A data query and manipulation language for APIs
emoji: "\U0001F4DD"
tags:
  - graphql
  - sql
  - database
  - api
link: https://graphql.org/
created: 2020-08-10T22:40:43.000Z
modified: 2021-08-23T20:08:26.000Z
---

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.

> 💡 GraphQL is an alternative to REST for developing APIs, not a replacement.

## Pros

- Define the exact scope of data required in every instance
- Select multiple fields from different resources in a single query

## [Cons](https://blog.logrocket.com/why-you-shouldnt-use-graphql/)

- REST can do much of what GraphQL does
- GraphQL makes some tasks more complex (overkill)
- GraphQL queries could cause performance issues
  - Nested fields lead to circular queries
- It’s easier to use a web cache with REST than with GraphQL
- The way GraphQL schemas work could be a problem
- REST is better for error handling and tooling


## Tips

- When adopting GraphQL, it’s best to use a client-driven approach to designing your API
  - remember that a schema is a contract between the client and server.
  - The schema defines what data the clients can request or change, and the server returns that data to the client.
- The best architecture to design your application immediately start with your needs.
- The best way to measure the quality of a schema is to `measure it’s utility to those client applications`.
- It’s crucial to remind schema authors their goal is to provide service, not just provide access to their service.
- While GraphQL can be used for service-to-service APIs, it’s uniquely suited and most powerful when used by client applications.
- Traditional good API schema design(DRY-don't repeat yourself,orthogonal and perfectly abstract) will make the client side code complicated, brittle, difficult to write and execute quickly, and duplicated by each and every client.

## [10 Best Practices for Schema Stewardship](https://www.apollographql.com/blog/community/graphql-champions/10-best-practices-for-schema-stewardship/)

![](https://wp.apollographql.com/wp-content/uploads/2021/08/10-best-preview-1024x574.jpg)

- Adopt a stewardship mindset
- Begin by understanding all the teams, their motivations, and their struggles

![](https://wp.apollographql.com/wp-content/uploads/2021/08/team-table-1024x575.png)

- Assume good intent
- Lean into the Friction
- Adopt a client-centric mindset

[Part 2](https://www.apollographql.com/blog/community/graphql-champions/10-best-practices-for-schema-stewardship-part-2-of-2/)

- Keep iterating your organizing model
  - Siloed
  - Graph Guild
  - Central Graph Team
  - Hybrid
- Scale your review processes with async reviews and schema tools
- Pay special attention to a team’s first schema review
- Adopt a product mindset
- Keep moving forward

## [Starter Kit](https://github.com/atherosai/graphql-gateway-apollo-express)

Creating high performance and secure GraphQL APIs with Node.js, Apollo server, GraphQL and TypeScript

## [GraphQL Best Practices Resources and Design Patterns](https://www.moesif.com/blog/api-guide/graphql-best-practices-resources-and-design-patterns/)

## [Code-first vs. schema-first development in GraphQL](https://blog.logrocket.com/code-first-vs-schema-first-development-graphql/)

- `code-first`: the schema was generated automatically from the code

- `schema-first`: it indicates that we first `define the schema` for the GraphQL service and then we `implement the code by matching the definitions` in the schema.
  - A list of `challenges` that schema-first requires some tool to solve
    - Inconsistencies between schema definitions and resolvers
    - Modularization of GraphQL schemas
    - Redundancy in schema definitions (code reuse)
    - Composing Grphql schemas

## Basics

### Fragments

A fragment represents the data requirements of some component or aspect of an application

```graphql
fragment FullPost on Post {
  id
  slug
  title
  body
  contributors {
    ...Contributor
  }
  author {
    name
    ...Author
  }
}
```

### Queries

A query represents some operation that fetches data.

```graphql
query GetPost($id: ID!) {
  post(id: $id) {
    __typename
    id
    ...FullPost
  }
}
```

### Mutations

A mutation represents some operations which changes data.

### [The difference between `parseValue` and `parseLiteral`](https://stackoverflow.com/questions/41510880/whats-the-difference-between-parsevalue-and-parseliteral-in-graphqlscalartype?answertab=active#tab-top)

The `serialize` method would be called when the value of the type is going to be sent to the client as a response. Since the values on the output is in the form of JSON, the return value of `serialize` could be anything. Could be string, number, array, object ...

The other two methods (`parseValue` and `parseLiteral`) are to read input.

In GraphQL there are two ways of reading input from client, one is inline in the query, like:

```graphql
query {
  allUsers(first: 10) {
    id
  }
}
```

where 10 is the inline value for first argument. Since the input language for GraphQL is not exactly JSON, the value (here 10) is being parsed and converted to AST (Abstract Syntax Tree). In this case, `parseLiteral` comes to play. It inputs the AST and returns the parsed value of the type. Types could be as complex as JSON and `parseLiteral` could traverse the AST and return JSON.

The other way of reading input from clients is through variables:

```graphql
query ($howMany: YourCustomType) {
  users(first: $howMany) {
    id
  }
}
```

variables:

```graphql
{
  "howMany": {
    "thisMany": 10
  }
}
```

Since the variables are pure JSON, you don't need AST here, you already have JSON. That's where `parseValue` comes to play. It gets the input as JSON and returns whatever the query resolver should use.

```graphql
function parseValue(value) {
let first = value.thisMany;
return first;
}
```

So, you could have different presentation when you read from variables than when you read values inline, but conceptually, they should be the same in terms of presentation. However since the "type" of input is different (inline is GraphQL and variable is JSON), the parsing algorithm could be different. That's why if you define it as input type, you need to provide two separate methods to read them.

## Schema Design

- [GraphQL interfaces and unions - how to design GraphQL schema](https://atheros.ai/blog/graphql-interfaces-and-unions-how-to-design-graphql-schema)

This article go through the use cases for abstract types and how to implement them in the GraphQL schema. Using abstract types can greatly improve your GraphQL schema design and simplify your queries and mutations.

> The interface is a structure that enforces certain properties on the object or class that implements the corresponding interface

**Why it matters**: Interfaces and unions are the only available abstract types in the GraphQL specification. You can leverage them to reduce complexity of your schema, reduce the number of queries and mutations, and describe your data in a much more precise way.

### [GraphQL schema design in Moon Modeler](https://www.datensen.com/graphql-design/graphql-schema-design.html)

![](https://www.datensen.com/media/graphql/graphql-diagram-linked-type.png)

### [Extending Types And Interfaces](https://stackoverflow.com/a/54948335)

The `extend` keyword is effectively used to modify an existing type within a schema. This is most commonly used in two scenarios:

The extend keyword can only modify existing types; it is not a vehicle for inheritance. `In fact, GraphQL does not support type inheritance.` Interfaces provide a level of abstraction over existing types, but types that implement an interface do not inherit any fields from that interface.

- 1. `Concatenating multiple strings that represent a single schema.` You can have your schema broken up across multiple files, divided by domain. You can then do something like

```graphql
#base.graphql
type Query {
  viewer: User
}

# user.graphql
extend type Query {
  users: [User!]!
}

# post.graphql
extend type Query {
  post: [Post!]!
}
```

This results in a schema that's effectively the same as:

```graphql
type Query {
  viewer: User
  users: [User!]!
  post: [Post!]!
}
```

- 2. `Extending from a base schema.`

```graphql
extend type SomeType @customDirective
```

## [Subscription](https://www.apollographql.com/docs/react/data/subscriptions/)

Get real-time updates from your GraphQL server
In addition to queries and mutations, GraphQL supports a third operation type: subscriptions.

Like queries, subscriptions enable you to fetch data. Unlike queries, subscriptions maintain an active connection to your GraphQL server (most commonly via WebSocket). This enables your server to push updates to the subscription's result over time.

Subscriptions are useful for notifying your client in real time about changes to back-end data, such as the creation of a new object or updates to an important field.

### When to use subscriptions

In the majority of cases, your client should not use subscriptions to stay up to date with your backend. Instead, you should poll intermittently with queries, or re-execute queries on demand when a user performs a relevant action.

You should use subscriptions for the following:

Small, incremental changes to large objects. Repeatedly polling for a large object is expensive, especially when most of the object's fields rarely change. Instead, you can fetch the object's initial state with a query, and your server can proactively push updates to individual fields as they occur.

Low-latency, real-time updates. For example, a chat application's client wants to receive new messages as soon as they're available.

## Resources

### Tutorials

- [9 Ways To Secure your GraphQL API — GraphQL Security Checklist](https://www.apollographql.com/blog/graphql/security/9-ways-to-secure-your-graphql-api-security-checklist/)

-[Performance Monitoring in GraphQL](https://blog.sentry.io/2021/08/31/guest-post-performance-monitoring-in-graphql): use the Sentry transaction for each graphql request.

- [Using Subscriptions with Your Federated Data Graph](https://www.apollographql.com/blog/backend/federation/using-subscriptions-with-your-federated-data-graph/)

- [Migrating Existing REST APIs to GraphQL](https://blog.bitsrc.io/migrating-existing-rest-apis-to-graphql-2c5de3db647d)

![](https://miro.medium.com/max/641/1*5SAc8xEDZJoCLspC4A4k8A.jpeg)

This blog post will help you understand what parts of a REST API need to be modified when you want to migrate an existing REST API to GraphQL API. We will also see which components can be combined together to make up a GraphQL API.

The APIs in this Node.js app is following the very common design of service, controller and repository layers.

- Controller layer: responsible for acting as a bridge between client-side and the service layer.
- Service layer: responsible for holding various business logic.
- Repository layer: responsible for interacting with data source or database and passing the data to the service layer.

Let’s see how this is going to help in maintaining the app in future, suppose if we want to change the database from Mysql to Postgres, then only the code in the repository layer needs to be changed, the controller and service layer will remain untouched. <Highlight>This abstraction helps in defining the boundaries and efficiently distributes the responsibilities</Highlight>.
This design will also help us in migrating from REST to GraphQL. We need to only make changes in the controller layer and rest everything remains the same.

- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)

-[Input object type as an argument for GraphQL mutations and queries](https://atheros.ai/blog/input-object-type-as-an-argument-for-graphql-mutations-and-queries)

- [How to Make a Serverless GraphQL API using Lambda and DynamoDB](https://www.serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb)

- [GraphQL scalars and their input and result coercion](https://atheros.ai/blog/graphql-scalars-and-their-input-and-result-coercion)

* result coercion:  upholding the contract of a type which we receive from the server (basically upholding the primitive values or object type)
* input coercion:  upholding the contract of a type for input

- [How to design GraphQL custom scalars](https://atheros.ai/blog/how-to-design-graphql-custom-scalars)

* serialize: result coercion
* parseValue: input coercion for variables
* parseLiteral: input coercion for inline arguments

```js
import { GraphQLScalarType } from "graphql";
import { isISO8601 } from "validator";
// This is only very simple DateTime scalar to show how to create your custom scalars. You can use some of the libraries for production use cases.
const parseISO8601 = (value: any) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new Error("DateTime cannot represent an invalid ISO-8601 Date string");
};
const serializeISO8601 = (value: any) => {
  if (isISO8601(value)) {
    return value;
  }
  throw new Error("DateTime cannot represent an invalid ISO-8601 Date string");
};
const parseLiteralISO8601 = (ast: any) => {
  if (isISO8601(ast.value)) {
    return ast.value;
  }
  throw new Error("DateTime cannot represent an invalid ISO-8601 Date string");
};
const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "An ISO-8601 encoded UTC date string.",
  serialize: serializeISO8601,
  parseValue: parseISO8601,
  parseLiteral: parseLiteralISO8601,
});
export default DateTime;
```

### Libraries

- [GraphQL Tools ![GitHub](https://img.shields.io/github/stars/ardatan/graphql-tools)![npm](https://img.shields.io/npm/dt/graphql-tools.svg)](https://github.com/ardatan/graphql-tools): Build, mock, and stitch a GraphQL schema using the schema language

- [TypeGraphQL![TypeGraphQL](https://img.shields.io/github/stars/MichalLytek/type-graphql)![npm](https://img.shields.io/npm/dt/type-graphql.svg)](https://github.com/MichalLytek/type-graphql): Create GraphQL schema and resolvers with TypeScript, using classes and decorators!

- [Nexus![GitHub](https://img.shields.io/github/stars/graphql-nexus/nexus)![npm](https://img.shields.io/npm/dt/graphql-nexus.svg)](https://github.com/graphql-nexus/nexus): Declarative, code-first and strongly typed GraphQL schema construction for TypeScript & JavaScript.

- [graphql-compose![graphql-compose](https://img.shields.io/github/stars/graphql-compose/graphql-compose)![npm](https://img.shields.io/npm/dt/graphql-compose.svg)](https://github.com/graphql-compose/graphql-compose): provides a type registry with a bunch of methods for programmatic schema construction. It allows not only to extend types but also remove fields, interfaces, args.

> If you’ve been following an SDL-first approach to building your GraphQL server and want to see what your code looks like when written with GraphQL Nexus, you can use the [SDL converter](https://nexus.js.org/converter).

- [graphql-normalizr![graphql-compose](https://img.shields.io/github/stars/monojack/graphql-normalizr)![npm](https://img.shields.io/npm/dt/graphql-normalizr.svg)](https://github.com/monojack/graphql-normalizr): aNormalize GraphQL responses for persisting in the client cache/state

- [graphql-cost-analysis](https://github.com/pa-bru/graphql-cost-analysis): A GraphQL request cost analyzer.

- [json-to-graphql-query![graphql-compose](https://img.shields.io/github/stars/dupski/json-to-graphql-query)![npm](https://img.shields.io/npm/dt/json-to-graphql-query.svg)](https://github.com/dupski/json-to-graphql-query)

<details>
   <summary>Simple module that converts JavaScript objects to GraphQL query syntax</summary>

```js
import { jsonToGraphQLQuery } from "json-to-graphql-query";

const query = {
  query: {
    Posts: {
      id: true,
      title: true,
      post_date: true,
    },
  },
};
const graphql_query = jsonToGraphQLQuery(query, { pretty: true });
```

</details>

- [GraphQL.js](https://github.com/graphql/graphql-js)

<details>
   <summary>A reference implementation of GraphQL for JavaScript</summary>

```js
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
    },
  }),
});
```

</details>

- [graphql-helper](https://github.com/bustle/graphql-helper)

<details>
   <summary>A simple helper library for constructing GraphQL queries.</summary>

```js
import { fragment, query } from 'graphql-helper'
import fetch from 'isomorphic-fetch'

const Contributor = fragment('Contributor', 'User') `{
  name
  slug
}`

const PostPage = fragment('PostPage', 'Post') `{
  title
  body
  contributors {
    ${Contributor}
  }
}`

const PostQuery = query('PostQuery', { postId: 'ID!' }) `{
  post(id: $postId) {
    id
    ${PostPage}
  }
}`


// Write your own app-specific dispatcher.
// In this case, we just have a simple function, but this could live in
// a react library, an elm effects module, an ember service...

function runQuery(op, vars): Promise<Result> {
  return fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: op,
        variables: vars,
      }),
    })
    .then(r => r.json())
    .then({ data, errors }) => errors ? Promise.reject(errors) : Promise.resolve(data))
   })
}


// Usage
runQuery(PostQuery, { postId: 123 })
  .then(data => {
    // data = {
    //   post: {
    //     id: 123,
    //     title: "foo",
    //     body: "bar",
    //     contributors: [
    //       { name: 'Daria Morgendorffer', slug: '/daria' },
    //       { name: 'Jane Lane', slug: '/jane' }
    //     ]
    //   }
    // }
  })
```

</details>
