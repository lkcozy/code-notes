---
title: Git-Version control system
emoji: 💡
tags:
  - git
  - cheatsheet
created: 2020-06-24T07:06:39.000Z
modified: 2021-04-19T23:30:00.000Z
---

## Alias

<details>
   <summary>A list of git aliases to include in your `~/.gitconfig` file:</summary>

```sh

[alias]
s=status
br = branch --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents:subject) %(color:green)(%(committerdate:relative)) [%(authorname)]' --sort=-committerdate
undo=reset HEAD~1 --mixed
cm = commit --all -m
cma = commit -a
co = checkout
cob = checkout -b
del= branch -D
st = stash -u
pop = stash pop
stat = log --shortstat
d = diff --color-words
who = shortlog -s --
lg = log --graph --all --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative
lpo = log --pretty=oneline --abbrev-commit --graph --decorate --all
scrub = !git reset --hard && git clean -fd
rv = remote -v
sts = status
blg = log --graph --decorate --all --abbrev-commit --pretty=oneline
slog = log --graph --simplify-by-decoration --all --abbrev-commit --pretty=oneline
busythisweek = shortlog --since=one.week.ago -n #https://git.wiki.kernel.org/index.php?title=Aliases
aliases = !git config --get-regexp 'alias.\*' | colrm 1 6 | sed 's/[ ]/ = /'
whitespaceviolations = "!git diff --check $(git empty-tree-sha1)"
app = commit -a --amend --no-edit
cia = commit -a --amend
up = remote update --prune
publish = !git checkout -b $1 && git push -u origin
prb=pull --rebase
sm=!git st && git co master && git prb

```

</details>

## Change Git Remote URL

```sh
git remote set-url origin git@github.com-lkcozy:lkcozy/code-notes.git
```

## [Rebase](https://git-rebase.io/)

```sh
# amending your last commit
git commit -a --amend
```

```sh
# fixing up older commits, -i for interactive
git rebase -i HEAD~3
```

## Recover from git reset --hard

```sh
git reflog show

4b6cf8e (HEAD -> master, origin/master, origin/HEAD) HEAD@{0}: reset: moving to origin/master
295f07d HEAD@{1}: pull: Merge made by the 'recursive' strategy.
7c49ec7 HEAD@{2}: commit: restore dependencies to the User model
fa57f59 HEAD@{3}: commit: restore dependencies to the Profile model
3431936 HEAD@{4}: commit (amend): restore admin
033f5c0 HEAD@{5}: commit: restore admin
ecd2c1d HEAD@{6}: commit: re-enable settings app

# the commit the HEAD to be pointed to is 7c49ec7 (restore dependencies to the User model)

git reset HEAD@{2}
```

## Count all tracked files in a git respository

```sh
git ls-files notes| wc -l
```

- `git ls-files`: prints out a list of all the tracked files in the repository, one per line.
- `|`: operator funnels the output from the preceding command into the command following the pipe.
- `wc -l`: calls the [word count (wc)](http://en.wikipedia.org/wiki/Wc_%28Unix%29) program. Passing the `-l` flag asks it to return the total number of lines.

## Branches

List all local branches

```sh
git branch
```

List all merged branches

```sh
git branch --merged
```

Same as above but exclude master and develop branches

```sh
git branch --merged | egrep -v "(^\*|master|develop)"
```

### Deleting branches

```sh
git branch -d branch_name
```

### Deleting remote branches

```sh
git push <remote_name> -d branch_name
```

### Delete all branches but keeping others like “develop” and “master”

```sh
git branch | grep -v "develop" | grep -v "master" | xargs git branch -D
```

> - **grep**: global regular expression - print lines matching a pattern
> - **v**: invert-match, select non-matching lines
> - **xargs**: read lines of text from the standard input or from the output of another command command and `turn them into commands and execute them`, which is used for building execution pipelines using the standard data streams

### Delete remote branches

```sh
git push origin --delete branch1 branch2
```

## [Stashes](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)

### Save changes to a stash

```sh
git push origin --delete branch1 branch2
```

### List all stashes.

```sh
git stash list
```

### Annotate stashes with a description

```sh
git stash -u save 'message'
```

### Re-apply the most recently created stash and delete it from stash list

```sh
git stash pop
```

### Apply the specified stash by passing its identifier

```sh
git stash apply stash@{2}
```

### Partial stash

```sh
git stash -p
```

### Creating a branch from your stash

```sh
git stash branch add-stylesheet stash@{1}
```

## Tags

```sh
# list all git tags
git tag -l
git tag --list

# create a git tag
git tag v1.9.2

# remove a git tag
git tag -d v1.9.2
git tag --delete v1.9.2

# push all tags to remote
git push --follow-tags origin master
```

## Sources

- [git-tips](https://github.com/git-tips/tips)

- [gitsheet.wtf](https://gitsheet.wtf/)

- [gitexplorer.com](https://gitexplorer.com/)

- [Setting Up Git Identities](https://www.micah.soy/posts/setting-up-git-identities/)
