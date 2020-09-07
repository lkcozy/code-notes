---
title: Git
tags:
  - git
  - cheatsheet
---

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
