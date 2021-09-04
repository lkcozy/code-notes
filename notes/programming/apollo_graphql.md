---
title: "Apollo GraphQL-A complete system to build, manage, and access a data graph"
emoji: "\U0001F4DD"
tags:
  - graphql
  - api
  - apollo
  - microservices
link: https://www.apollographql.com/docs/federation/federation-spec/
created: 2021-04-20T16:05:46.000Z
modified: 2021-05-05T22:03:31.000Z
---

## Federated GraphQL Microservices

![](https://wp.apollographql.com/wp-content/uploads/2021/07/image-1024x419.png)

`Federation is an architecture for composing two or more graphs (called subgraphs) into a single data graph (called a supergraph).` A supergraph’s schema is made up of all the composed subgraph schemas, plus some metadata.

One of the key principles of GraphQL involves having a single data graph of the implementing services that will allow the client to have a unified interface to access more data and services through a single query.

A `gateway` is responsible for receiving incoming queries and splitting them up across whichever services are required to resolve them. The gateway then takes each service’s response and combines them into a single response that’s returned to the querying client.

## [Implementing Federated GraphQL Microservices using Apollo Federation](https://www.velotio.com/engineering-blog/implementing-federated-graphql-microservices-using-apollo-federation)

## [Subscriptions](https://www.apollographql.com/docs/apollo-server/data/subscriptions/)

> Subscriptions are not currently supported in Apollo Federation.

Subscriptions are long-lasting GraphQL read operations that can update their result whenever a particular server-side event occurs. Most commonly, updated results are pushed from the server to subscribing clients. For example, a chat application's server might use a subscription to push newly received messages to all clients in a particular chat room.

## [Using Subscriptions with a Federated Data Graph](https://github.com/apollographql/federation-subscription-tools)

This demonstration library shows how a decoupled subscription service can run alongside a federated data graph to provide real-time updates to a client.

## [Apollo AWS Lambda with GraphQL subscriptions](https://github.com/michalkvasnicak/aws-lambda-graphql)

With this library you can do:

same things as with apollo-server-lambda by utiizing AWS API Gateway v1
GraphQL subscriptions over WebSocket by utilizing AWS API Gateway v2 and subscriptions-transport-ws

## References

- [Awesome Apollo GraphQL](https://github.com/ooade/awesome-apollo-graphql)
- [Apollo Federation Demo](https://github.com/apollographql/federation-demo)
- [How Netflix Scales its API with GraphQL Federation (Part 1)](https://netflixtechblog.com/how-netflix-scales-its-api-with-graphql-federation-part-1-ae3557c187e2)
- [Apollo Workbench](https://github.com/apollographql/apollo-workbench-vscode): Apollo Workbench is a design tool that facilitates planning changes to your supergraph. It enables you to understand the overall composition and execution of any given query at design time.
- [Apollo Rover](https://github.com/apollographql/rover): A CLI for interacting with graphs and the Apollo Studio registry
