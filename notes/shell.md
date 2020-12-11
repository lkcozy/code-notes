---
title: Shell
emoji: 📝
tags:
  - shell
  - cli
link:
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
