---
title: Pipenv-Python Dev Workflow for Humans
emoji: "\U0001F40D"
tags:
  - python
  - pipenv
link:
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

- Install/uninstall dependencies and virtualenv

```zsh
pipenv install/uninstall
pipenv shell
```

- `shell` will spawn a shell with the virtualenv activated.
- `run` will run a given command from the virtualenv, with any
  arguments forwarded (e.g. `$ pipenv run python`).
- `check` asserts that PEP 508 requirements are being met by the
  current environment.
- `graph` will print a pretty graph of all your installed
  dependencies.

## Usage Examples

```zsh
Create a new project using Python 3.7, specifically:
pipenv --python 3.7

Remove project virtualenv (inferred from current directory):
pipenv --rm

Locate the project:
pipenv --where
```
