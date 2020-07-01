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

### Delete all branches but keeping others like “develop” and “master”

```sh
git branch | grep -v "develop" | grep -v "master" | xargs git branch -D
```

### Delete remote branches

```sh
git push origin --delete branch1 branch2
```

## Stashes

### Save changes to a stash

```sh
git push origin --delete branch1 branch2
```

### List all stashes.

```sh
git stash list
```

### Apply a stash and delete it from stash list

```sh
git stash pop
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

---

[gitsheet.wtf](https://gitsheet.wtf/)

[gitexplorer.com](https://gitexplorer.com/)

[Setting Up Git Identities](https://www.micah.soy/posts/setting-up-git-identities/)
