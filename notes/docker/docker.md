---
title: Docker
emoji: 🐳
tags:
  - docker
  - github
  - postgres
  - databases
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
      - postgres
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

## References

- [An enterprise-style Node.js REST API setup with Docker Compose, Express and Postgres](https://codewithhugo.com/node-postgres-express-docker-compose/)

- [Github Actions - Creating PostgreSQL service containers](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-postgresql-service-containers#testing-the-postgresql-service-container)
