---
title: Docker Commands
emoji: 🐳
tags:
  - docker
link:
created: 2020-07-12T22:38:08.000Z
modified: 2021-05-01T22:38:08.000Z
---

## Find Docker Usage

```sh
docker system df
```

## docker system prune

WARNING! This will remove: - all stopped containers - all networks not used by at least one container - all dangling images - all dangling build cache

## Download newer image

```sh
docker pull <image name>
```

## Display all running containers

```sh
docker ps -a
```

## check running containers

```sh
docker ps
```

## dive into docker container

```sh
docker exec -it dreamy_nash /bin/bash
docker exec -it 1d3912322644 /bin/bash
```

## [Cleaning Up Your Docker Environment](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes#removing-containers):

```sh
#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)

# Kill a particular container.
docker kill [container]
```

- docker kill \$(docker ps -q): Kill all containers that are currently running.
- docker rm [container]: Delete a particular container that is not currently running.
- docker rm \$(docker ps -a -q): Delete all containers that are not currently running.
- docker rmi \$(docker images -a -q): Delete all images

## To start a shell in a container:

```sh
docker exec -ti \$(CONTAINER) /bin/bash
```

exec run a command in a running container
Exec -interactive Keep STDIN open even if not attached
Exec -t: tty allocate a pseudo TTY not genuine but having the appearance of

ADD vs COPY
Although ADD and COPY are functionally similar, generally speaking, COPY is preferred. That’s because it’s more transparent than ADD. COPY only supports that basic copying of local files into the container, while ADD has some features ( like local-only tar extraction and remote URL support) that are not immediately obvious.

If you have multiple Dockerfile steps that use different files from your context, COPY them individually, rather than all at once. This ensures that each step’s build cache is only invalidated (forcing the step to be re-run) if the specifically required files change.
For example:

```sh
COPY requirements.txt /tmp/
RUN pip install --requirement /tmp/requirements.txt
COPY . /tmp/
```

Results in fewer cache invalidations for the RUN step, than if you put the COPY . /tmp/ before it.
Because image size matters, using ADD to fetch packages from remote URLs is strongly discouraged; you should use curl or wgetinstead. That way you can delete the files you no longer need after they’ve been extracted and you don’t have to add another layer in your image. For example, you should avoid doing things like:

```sh
ADD http://example.com/big.tar.xz /usr/src/things/
RUN tar -xJf /usr/src/things/big.tar.xz -C /usr/src/things
RUN make -C /usr/src/things all
And instead, do something like:
RUN mkdir -p /usr/src/things \
 && curl -SL http://example.com/big.tar.xz \
 | tar -xJC /usr/src/things \
 && make -C /usr/src/things all
```
