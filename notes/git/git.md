---
title: Git
tags:
  - git
  - cheatsheet
---

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
