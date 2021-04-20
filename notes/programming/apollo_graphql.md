---
title: Apollo GraphQL-A complete system to build, manage, and access a data graph
emoji: 📝
tags:
  - graphql
  - api
  - apollo
  - microservices
link: https://www.apollographql.com/docs/federation/federation-spec/
created: 2021-04-19T17:33:35.000Z
modified: 2021-04-19T17:33:35.000Z
---

## Federated GraphQL Microservices

![](https://global-uploads.webflow.com/5d2dd7e1b4a76d8b803ac1aa/5fcdce31a0b65b529653139c_xiE7OS3vv_SpWMy6YI7oONp-8763LH71OrtgLxaszZsOr5z5grXaUe9B14mTC5wiAEkLIplAsM-rqP_Y-OwbaaB17_LuMkaNriJl4teAb8mU2NbAGwoltLjungCvW44C5AWvhC-c.png)

`Federation is an architecture for composing two or more graphs (called subgraphs) into a single data graph (called a supergraph).` A supergraph’s schema is made up of all the composed subgraph schemas, plus some metadata.

One of the key principles of GraphQL involves having a single data graph of the implementing services that will allow the client to have a unified interface to access more data and services through a single query.

## [Implementing Federated GraphQL Microservices using Apollo Federation](https://www.velotio.com/engineering-blog/implementing-federated-graphql-microservices-using-apollo-federation)

## References

- [Awesome Apollo GraphQL](https://github.com/ooade/awesome-apollo-graphql)
- [Apollo Federation Demo](https://github.com/apollographql/federation-demo)
- [How Netflix Scales its API with GraphQL Federation (Part 1)](https://netflixtechblog.com/how-netflix-scales-its-api-with-graphql-federation-part-1-ae3557c187e2)
- [Apollo Workbench](https://github.com/apollographql/apollo-workbench-vscode): Apollo Workbench is a design tool that facilitates planning changes to your supergraph. It enables you to understand the overall composition and execution of any given query at design time.
- [Apollo Rover](https://github.com/apollographql/rover): A CLI for interacting with graphs and the Apollo Studio registry
