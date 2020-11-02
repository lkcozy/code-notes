---
title: Docker
emoji: 🐳
tags:
  - docker
  - github
  - postgresql
  - database
link: https://docs.docker.com/get-started/overview/
---

## Overview

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host.

## Docker architecture

Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface.

![](https://docs.docker.com/engine/images/architecture.svg)

## [Docker Compose](https://docs.docker.com/compose/#common-use-cases)

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. To learn more about all the features of Compose, see the [list of features](https://docs.docker.com/compose/#features).

Compose works in all environments: production, staging, development, testing, as well as CI workflows. You can learn more about each case in [Common Use Cases](https://docs.docker.com/compose/#common-use-cases).

Using Compose is basically a three-step process:

Define your app’s environment with a `Dockerfile` so it can be reproduced anywhere.

Define the services that make up your app in `docker-compose.yml` so they can be run together in an isolated environment.

Run `docker-compose up` and Compose starts and runs your entire app.

A `docker-compose.yml` looks like this:

```YAML
version: "3"
services:
  app:
    build: .
    depends_on:
      - postgresql
    environment:
      DATABASE_URL: postgres://user:pass@postgres:5432/db
      NODE_ENV: development
      PORT: 3000
    ports:
      - "3000:3000"
    command: npm run dev
    volumes:
      - .:/app/
      - /app/node_modules

  postgres:
   image: postgis/postgis:11-2.5-alpine
    environment:
      - POSTGRES_DB=sensorthings
      - POSTGRES_USER=sensorthings
      - POSTGRES_PASSWORD=ChangeMe
    volumes:
      - postgis_volume:/var/lib/postgresql/data
volumes:
    postgis_volume:
```

[More information about the compose file.](https://docs.docker.com/compose/compose-file/)

## Generate a dockerfile by the [jk](https://github.com/jkcfg/jk)

```js
import * as param from "@jkcfg/std/param";

// input is the the 'service' input parameter.
const input = param.Object("service");

// Our docker images are based on alpine
const baseImage = "alpine:3.8";

// Dockerfile is a function generating a Dockerfile from a service object.
const Dockerfile = (service) => `FROM ${baseImage}
EXPOSE ${service.port}
COPY ${service.name} /
ENTRYPOINT /${service.name}
`;

// Instruct generate to produce a Dockerfile with the value returned by the
// Dockerfile function.
export default [{ path: "Dockerfile", value: Dockerfile(input) }];
```

## Tools

- [dive](https://github.com/wagoodman/dive)

![](https://github.com/wagoodman/dive/raw/master/.data/demo.gif)

A tool for exploring a docker image, layer contents, and discovering ways to shrink the size of your Docker/OCI image.

## References

- [Docker for beginners](https://docker-curriculum.com/#introduction)

- [Intro Guide to Dockerfile Best Practices](https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/)

This blog series will cover five areas for Dockerfile best practices to help you write better Dockerfiles: incremental build time, image size, maintainability, security and repeatability.

- [A deep dive into the official Docker image for Python](https://pythonspeed.com/articles/official-python-docker-image/)

A step-by-step introduction to how the official Python Docker image is made, and a detailed interpretation of the Dockefile file.

- [An enterprise-style Node.js REST API setup with Docker Compose, Express and Postgres](https://codewithhugo.com/node-postgres-express-docker-compose/)

- [Github Actions - Creating PostgreSQL service containers](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-postgresql-service-containers#testing-the-postgresql-service-container)

- [Dockerfile Security Best Practices](https://cloudberry.engineering/article/dockerfile-security-best-practices/)

Container security is a broad problem space and there are many low hanging fruits one can harvest to mitigate risks. A good starting point is to follow some rules when writing Dockerfiles.
