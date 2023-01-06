---
title: Docker-An open-source containerization platform
emoji: "\U0001F433"
tags:
  - docker
  - github
  - postgresql
  - database
link: https://docs.docker.com/get-started/overview/
created: 2020-07-02T20:13:36.000Z
modified: 2021-04-14T23:11:23.000Z
---

- [Overview](#overview)
- [Docker architecture](#docker-architecture)
- [Docker Compose](#docker-compose)
- [Generate a dockerfile by the jk](#generate-a-dockerfile-by-the-jk)
- [Tools](#tools)
- [References](#references)
- [Examples](#examples)
- [.dockerignore](#dockerignore)

## Overview

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host.

## Docker architecture

Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface.

![](https://docs.docker.com/engine/images/architecture.svg)

## [Docker Compose](https://docs.docker.com/compose/#common-use-cases)

`Compose is a tool for defining and running multi-container Docker applications in a single host`. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. To learn more about all the features of Compose, see the [list of features](https://docs.docker.com/compose/#features).

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

- [DockerSlim](https://github.com/docker-slim/docker-slim)

docker-slim will optimize and secure your containers by understanding your application and what it needs using various analysis techniques. It will throw away what you don't need, reducing the attack surface of your container. What if you need some of those extra things to debug your container? You can use dedicated debugging side-car containers for that (more details below).

## References

- [Docker for beginners](https://docker-curriculum.com/#introduction)

Learn to build and deploy your distributed applications easily to the cloud with Docker

- [How to clean your Docker data](https://dockerwebdev.com/tutorials/clean-up-docker/): Docker makes no configuration changes to your system … but it can use a significant volume of disk space. Fortunately, Docker allows you to reclaim disk space from unused images, containers, and volumes.

- [Dock Life: Using Docker for All The Things!](https://nystudio107.com/blog/dock-life-using-docker-for-all-the-things): Embrac­ing Dock­er for All The Things gives you a more flex­i­ble, robust, and trans­portable way to use tools on your com­put­er with­out messy setup

- [Intro Guide to Dockerfile Best Practices](https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/)

This blog series will cover five areas for Dockerfile best practices to help you write better Dockerfiles: incremental build time, image size, maintainability, security and repeatability.

- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

This article provides production-grade guidelines for building optimized and secure Node.js Docker images.

- [The Docker handbook](https://www.freecodecamp.org/news/the-docker-handbook/)

This full-length Docker book is rich with code examples. It will teach you all about containerization, custom Docker images and online registries, and how to work with multiple containers using Docker Compose.

- [Docker guide](https://www.robertcooper.me/docker-guide)

![](https://www.robertcooper.me/static/0bb9633ce24b684c12c8651863819a6c/64296/docker-objects.webp)

The purpose of this guide is to explain the most important concepts related to Docker to be able to effectively work with Docker for application development purposes.

- [A deep dive into the official Docker image for Python](https://pythonspeed.com/articles/official-python-docker-image/)

A step-by-step introduction to how the official Python Docker image is made, and a detailed interpretation of the Dockefile file.

- [An enterprise-style Node.js REST API setup with Docker Compose, Express and Postgres](https://codewithhugo.com/node-postgres-express-docker-compose/)

- [Github Actions - Creating PostgreSQL service containers](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-postgresql-service-containers#testing-the-postgresql-service-container)

- [Dockerfile Security Best Practices](https://cloudberry.engineering/article/dockerfile-security-best-practices/)

Container security is a broad problem space and there are many low hanging fruits one can harvest to mitigate risks. A good starting point is to follow some rules when writing Dockerfiles.

-[Dockerizing a React App](https://mherman.org/blog/dockerizing-a-react-app/)

## Examples

- [Full-stack monorepo - Part I: Go services](https://medium.com/burak-tasci/full-stack-monorepo-part-i-go-services-967bb3527bb8)

```Dockerfile
# Start from golang base image
FROM golang:1.13-alpine as builder

# Set the current working directory inside the container
WORKDIR /build

# Copy go.mod, go.sum files and download deps
COPY go.mod go.sum ./
RUN go mod download

# Copy sources to the working directory
COPY . .

# Build the Go app
ARG project
RUN GOOS=linux CGO_ENABLED=0 GOARCH=amd64 go build -a -v -o server $project

# Start a new stage from busybox
FROM busybox:latest

WORKDIR /dist

# Copy the build artifacts from the previous stage
COPY --from=builder /build/server .

# Run the executable
CMD ["./server"]
```

## .dockerignore

Use .dockerignore in every project, where you are building Docker images. It will make your Docker images small, fast and secure. It will help with the Docker cache during local development as well.

```gitignore
# Items that don't need to be in a Docker image.
# Anything not used by the build system should go here.
# overhead
Dockerfile
docker-compose.yml
.dockerignore
docs
.vscode
.gitignore
.git
.github
.cache
LICENSE
*.md
.storybook
.codeship*
codeship*.yml
codeship.aes
.env.development
.env.local

# artifacts
build
dist
node_modules

```
