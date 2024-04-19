---
title: Connect to a private npm registry in the docker
emoji: "\U0001F433"
tags:
  - yarn
  - npm
  - docker
link: null
created: 2020-07-12T22:38:08.000Z
modified: 2021-03-04T20:22:23.000Z
---

```yml
# Use the cypress base image so that e2e tests can be
# run from this image.
FROM cypress/base

ARG NPM_AUTH_TOKEN

# Set up connection to private npm
WORKDIR /usr/src/docker
RUN if [ -z "$NPM_AUTH_TOKEN" ]; then echo "NPM_AUTH_TOKEN build arg is required."; exit 1; else : ; fi
RUN echo 'registry=https://private-npm.com' > "$HOME/.npmrc"
RUN echo '//private-npm.com/:_authToken=${NPM_AUTH_TOKEN}' >> "$HOME/.npmrc"
RUN echo 'always-auth=true' >> "$HOME/.npmrc"

# Copy application code and build the app for deploy
COPY . .
RUN yarn
RUN yarn build:ci
```

## To build the docker image:

```sh
docker build -t sensorup/docker --build-arg NPM_AUTH_TOKEN='<NPM_AUTH_TOKEN>' .
```

> You can also find the NPM_AUTH_TOKEN from .npmrc after you successfully log in to the private-npm. Don't forget to type the end dot .

## To run a dev server from the container:

```sh
docker run --rm -t -p 8080:8080 \
       lkcozy/docker \
       yarn dev
```

## To run tests of the image in a container:

```sh
#
# Mount local folders to inspect the screenshots/videos
# that are taken as part of the Cypress Tests
#
# ~/tmp/videos      <<< videos of test failures
# ~/tmp/screenshots <<< screenshots of test failures
#
docker run --rm -t \
           -v ~/tmp/videos:/usr/src/docker/tests/e2e/videos  \
           -v ~/tmp/screenshots:/usr/src/docker/tests/e2e/screenshots \
           lkcozy/docker \
           yarn test
```

## To copy the dist out of the container and into your local file system:

```sh
docker run --name temp-docker sensorup/docker /bin/true && \
docker cp temp-docker:/usr/src/docker/dist /local-path-to-dist && \
docker rm temp-docker
```
