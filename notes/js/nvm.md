---
title: Node Version Manager (NVM)
emoji: "\U0001F4DD"
tags:
  - node
link: "https://github.com/nvm-sh/nvm"
created: 2021-04-13T16:55:18.000Z
modified: 2021-04-13T16:55:18.000Z
---

nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

## [Installation](https://github.com/nvm-sh/nvm#install--update-script)

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# or
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

### Add snippet below to the correct profile file (~/.zshrc, ~/.bash_profile, ~/.profile, or ~/.bashrc).

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### Activate the NVM manually

```sh
source ~/.zshrc
```

## Usage

To download, compile, and install the latest release of node, do this:

[![npm version](https://badge.fury.io/js/node.svg)](https://badge.fury.io/js/node)

```sh
nvm install node # "node" is an alias for the latest version
```

Switch the version of Node.js used by default when starting a new shell.

```sh
nvm alias default {VERSION}
```

Get the latest supported npm version on the current node version:

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

```sh
nvm install-latest-npm
```

To install a specific version of node:

```sh
nvm install 6.14.4 # or 10.10.0, 8.9.1, etc
```

The first version installed becomes the default. New shells will start with the default version of node (e.g., `nvm alias default`).

You can list available versions using `ls-remote`:

```sh
nvm ls-remote
```

And then in any new shell just use the installed version:

```sh
nvm use node
```

Or you can just run it:

```sh
nvm run node --version
```
