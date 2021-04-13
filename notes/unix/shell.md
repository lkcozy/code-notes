---
title: Shell
emoji: "\U0001F4DD"
tags:
  - shell
  - cli
link:
created: 2020-07-20T16:49:36.000Z
modified: 2021-04-12T03:32:52.000Z
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

## Delete a bunch of Github Repositories

```sh
#!/bin/sh

# Delete a bunch of GitHub repos
nukem="repo1 repo2"
user=""
password_or_oauth_token=""

for repo in $nukem; do
    echo "Deleting https://github.com/repos/$user/$repo"
    curl -v -u "$user:$password_or_oauth_token" -X DELETE \
       "https://api.github.com/repos/$user/$repo"
done
```

## Start Node Project With Multiple Stages

```sh
#!/bin/bash
CONFIG_PATH_DOMAIN=""
TEMP_CONFIG_PATH="public/config/config-temp.json"

case "$1" in
sbx) CONFIG_PATH_DOMAIN="sbx" ;;
*) CONFIG_PATH_DOMAIN="test" ;;
esac

CONFIG_PATH="https://${CONFIG_PATH_DOMAIN}/config/config.json"

echo "Download  ${S1} Config ${CONFIG_PATH} successfully"

mkdir -p public/config/ && curl -o ${TEMP_CONFIG_PATH} ${CONFIG_PATH}
react-scripts start
```
