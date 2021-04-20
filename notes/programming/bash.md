---
title: Bash
emoji: 📝
tags:
  - bash
link: "https://linuxhandbook.com/tag/bash-beginner/"
created: 2021-03-02T05:35:19.000Z
modified: 2021-03-02T05:35:19.000Z
---

## Count the total number of lines that exist in whatever file the user enters:

```sh
#!/bin/bash
echo -n "Please enter a filename: "
read filename
nlines=$(wc -l < $filename)
echo "There are $nlines lines in $filename"
```

## Passing multiple arguments to a bash shell script

```sh
script.sh arg1 arg2
```

```sh
#!/bin/bash
cd ..
repo=$1
cd $repo
branch=${2:-'master'}
git co $branch
echo "start $repo($branch)"
git pull
yarn
yarn start
```

## Download remote config

```sh
#!/bin/bash

url=${1:-'example.com'}
endpoint=https://$url/config/config.json
echo "⬇️  Download config from $endpoint"

mkdir -p public/config/
curl -o public/config/config-temp.json $endpoint

```

## [Pass default value](https://www.debuntu.org/how-to-bash-parameter-expansion-and-default-values/)

Default value handling is done by parameter of the form: ${parameter:[-=?+]word} such as:

- `${parameter:-word}` to use a default value
- `${parameter:=word}` to assign a default value (`mutate original parameter`)
- `${parameter:?word}` to display an error `if unset or null`
- `${parameter:+word}` to use an alternate value `if parameter is set and not null`

## Special variables in Bash shell

| Special Variable | Description                                          |
| ---------------- | ---------------------------------------------------- |
| $0               | The name of the bash script.                         |
| $1, $2...$n      | The bash script arguments.                           |
| $$               | The process id of the current shell.                 |
| $#               | The total number of arguments passed to the script.  |
| $@               | The value of all the arguments passed to the script. |
| $?               | The exit status of the last executed command.        |
| $!               | The process id of the last executed command.         |
