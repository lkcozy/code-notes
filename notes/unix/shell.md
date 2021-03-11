---
title: Shell
emoji: "\U0001F4DD"
tags:
  - shell
  - cli
link: null
created: 2020-07-20T16:49:36.000Z
modified: 2020-12-11T03:32:52.000Z
---

## [Help message for shell scripts](https://samizdat.dev/help-message-for-shell-scripts/)

```sh
#!/bin/bash
###
### my-script — does one thing well
###
### Usage:
###   my-script <input> <output>
###
### Options:
###   <input>   Input file to read.
###   <output>  Output file to write. Use '-' for stdout.
###   -h        Show this message.

help() {
    sed -rn 's/^### ?//;T;p' "$0"
}

if [[ $# == 0 ]] || [[ "$1" == "-h" ]]; then
    help
    exit 1
fi

echo Hello World
```

## Kill processes on port

```sh
kill -9 $(lsof -t -i:"4004")
```
