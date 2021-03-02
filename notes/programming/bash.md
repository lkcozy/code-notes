---
title: Bash
emoji: 📝
tags:
  - bash
link: https://linuxhandbook.com/tag/bash-beginner/
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
branch=$2 || 'master'
git co $branch
echo "start $repo($branch)"
git pull
yarn
yarn start
```

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
