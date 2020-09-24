---
title: Ubuntu
emoji: 📝
tags:
  - ubuntu
link:
---

## Install Node

### Install NVM

Installe the latest Node Version Manager(NVM) from [GITHUB Page](https://github.com/nvm-sh/nvm). At the time of writing this tutorial, v0.35.3 is the latest one. You can go to GITHUB Page and find the latest one to install.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

### Restart Terminal

Start another bash prompt

```sh
exec bash
```

## To update NodeJS to the latest LTS version

```sh
nvm install --lts
```
