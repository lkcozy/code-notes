---
title: Pipenv-Python Dev Workflow for Humans
emoji: "\U0001F40D"
tags:
  - python
  - pipenv
link: null
created: 2021-03-30T16:55:25.000Z
modified: 2021-04-14T23:11:23.000Z
---

Pipenv is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world.

You no longer need to use pip and virtualenv separately. They work together.

It automatically creates and manages a virtualenv for your projects, as well as adds/removes packages from your Pipfile as you install/uninstall packages. It also generates the ever-important Pipfile.lock, which is used to produce deterministic builds.

Install [Pipenv](https://pipenv-fork.readthedocs.io/en/latest/install.html)

```sh
brew install pipenv
```

## Getting Started

- Install dependencies and virtualenv

```sh
pipenv install
```

- Use the virtualenv

```sh
pipenv shell
```
