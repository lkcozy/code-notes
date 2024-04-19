---
title: Most Helpful Linux Command
emoji: "\U0001F4A1"
tags:
  - linux
  - cli
link: https://codebond.co/tutorial/other/most-helpful-linux-command
created: 2020-07-11T05:16:40.000Z
modified: 2021-08-31T20:08:26.000Z
---

[every Linux networking tool I know](https://wizardzines.com/networking-tools-poster.pdf)

![](https://i.pinimg.com/originals/01/90/f9/0190f909c09dc3f60db7b6a6e64f69f0.jpg)

## lsof

The lsof command can list all open files in a Linux system.

```sh
#  find the process using a specific port with the -i :port_number option:
lsof -i :3000


# kill the process using a specific prot
lsof -t -i :3000 | xargs kill -9
```

> `xargs`: take the output from one command and send it to another command as parameters.

## ls

This called List . It is use to list files, sub-directory of the directory. It is one of the most use command in linux.

## cd

This called Change Directory . It is use to move from one directory to another.

## cd ..

This is also called Change Directory but two dots indicate go one directory back. suppose you are in /home/app directory and want to go /home directory since the home directory is one step back.

## pwd

This called Present Working Directory . It is useful when you want to know what is your current working directory or want to get a complete path of your directory.

## mkdir

This called Make Directory . this command is use to create a new directory.

## touch

touch command is use to create a new file. example touch index.html or touch script.js or server.py

## rm -rf

This called Remove Recursive force . To understand this command you must need to know rm and rmdir

## rm

rm is called Remove . the rm command is use to remove file present in the directory. suppose you have index.html in /home directory and want to remove that file then got to the /home directory and run rm index.html

## rmdir

rmdir is called Remove Directory. rmdir command is use to remove empty directory.

rm -rf is use to remove directory as well as files present in a directory. -r is used for recursive means if you have more than one file than recursively remove all of them and f is for force.

## cat

The cat commands allow you to view the content of a file in terminal.

## history

If you using tons of command you ended up forgetting. history command show recently-executed commands. The cool part is you can access those commands without typing actual command you just need to type id of that command. example !id

## [sed](https://gist.github.com/ssstonebraker/6140154)

A a stream editor that works on piped input or files of text. It doesn’t have an interactive text editor interface, however. Rather, you provide instructions for it to follow as it works through the text.

```sh
echo howtogonk | sed 's/gonk/geek/
# The string “gonk” is replaced by “geek,”
```

There are four parts to this substitute command:

s Substitute command
/../../ Delimiter
one Regular Expression Pattern Search Pattern
ONE Replacement string

## [grep](https://phoenixnap.com/kb/grep-command-linux-unix-examples)

Grep is an acronym that stands for Global Regular Expression Print.

```sh
# Filter out directories
grep -v ^d
# find files start with issue
grep issue
```
