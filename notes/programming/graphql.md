---
title: Graphql
emoji: 📝
tags:
  - graphql
link:
---

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

## Resources 


- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)

- [graphql-helper](https://github.com/bustle/graphql-helper)

A simple helper library for constructing GraphQL queries.

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
