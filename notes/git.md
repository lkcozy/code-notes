---
title: Git-Version control system
emoji: "\U0001F4A1"
tags:
  - git
  - cheatsheet
created: 2020-06-24T07:06:39.000Z
modified: 2023-05-19T20:08:26.000Z
---

- [Flight rules for Git](#flight-rules-for-git)
- [Tips](#tips)
- [Tools](#tools)
- [Misc](#misc)
- [Check Git config](#check-git-config)
- [Change Git Remote URL](#change-git-remote-url)
- [Undoing Mistakes](#undoing-mistakes)
- [Rebase](#rebase)
- [Recover from git reset --hard](#recover-from-git-reset---hard)
- [Count all tracked files in a git respository](#count-all-tracked-files-in-a-git-respository)
- [Discard user email "xxxx" related commits after the specific commit](#discard-user-email-xxxx-related-commits-after-the-specific-commit)
- [Checkout files/folders from a specific branch](#checkout-filesfolders-from-a-specific-branch)
- [Branches](#branches)
  - [Deleting branches](#deleting-branches)
  - [Deleting remote branches](#deleting-remote-branches)
  - [Delete all branches but keeping others like “develop” and “master”](#delete-all-branches-but-keeping-others-like-develop-and-master)
  - [Delete remote branches](#delete-remote-branches)
- [Stashes](#stashes)
  - [Save changes to a stash](#save-changes-to-a-stash)
  - [List all stashes.](#list-all-stashes)
  - [Annotate stashes with a description](#annotate-stashes-with-a-description)
  - [Re-apply the most recently created stash and delete it from stash list](#re-apply-the-most-recently-created-stash-and-delete-it-from-stash-list)
  - [Apply the specified stash by passing its identifier](#apply-the-specified-stash-by-passing-its-identifier)
  - [Partial stash](#partial-stash)
  - [Creating a branch from your stash](#creating-a-branch-from-your-stash)
- [Worktree](#worktree)
- [Tags](#tags)
- [Alias](#alias)
- [Sources](#sources)

## [Flight rules for Git](https://github.com/k88hudson/git-flight-rules)

Flight rules for git that list, step-by-step, what to do if X occurs, and why. Essentially, they are extremely detailed, scenario-specific standard operating procedures.

## Tips

- `.gitkeep`: a dummy file to enable git to track a completely empty directory

## Tools

- [git-split-diffs](https://github.com/banga/git-split-diffs)

![](https://github.com/banga/git-split-diffs/raw/main/screenshots/dark.png?raw=true)

GitHub style split diffs with syntax highlighting in your terminal.

- [gum](https://github.com/gauseen/gum): manage multiple git user config

```zsh
yarn global add @gauseen/gum
gum list
gum set user1 --name 'user 1' --email user1@email.com
gum use user1
#or
gum use user1 --global
```

## Misc

```zsh
# Discards all unstaged changes
git reset --hard HEAD
# Throw away local modifications
git checkout -f
```

## Check Git config

```zsh
git config --list
git config user.name
git config user.email
```

## Change Git Remote URL

```zsh
git remote set-url origin git@github.com-lkcozy:lkcozy/code-notes.git
```

## Undoing Mistakes

```zsh
# Discard Uncommitted Changes In A File
git restore index.html
# Fix The Very Last Commit
git commit --amend -m "A message without typos"
# forgotten to add a certain change
git add forgotten-change.txt
git commit --amend --no-edit
# Recover Lost Commits Using The Reflog
git reflog
git branch happy-ending e5b19e4
# Restore A Single File From A Previous State
git log -- <filename>
git checkout <deletion commit hash>~1 -- <filename>
```

## [Rebase](https://git-rebase.io/)

```zsh
# amending your last commit
git commit -a --amend
```

```zsh
# fixing up older commits, -i for interactive
git rebase -i HEAD~3
```

[When should I use git pull --rebase?](https://stackoverflow.com/questions/2472254/when-should-i-use-git-pull-rebase)

_Point 1_
Use `git pull --rebase` only if you know you forgot to push your commits before someone else does the same.

If you did not commit anything, but your working space is not clean, just git stash before to git pull. This way you won't silently rewrite your history (which could silently drop some of your work).

_Point 2_
I think you should use `git pull --rebase` when collaborating with others on the same branch, which will avoid the extra merge commits.

[Don't git pull, use git pull --rebase instead](https://blog.manos-liakos.dev/rebase-vs-pull/)

![](https://blog.manos-liakos.dev/static/39833f875652a1793abffbbc15973e33/74200/git-rebase.webp)

```zsh
git pull = git fetch + git merge FETCH_HEAD
git pull --rebase =  git fetch + git rebase FETCH_HEAD
```

`Git pull --rebase` effectively reapplying our local changes on top of the remote changes, resulting in a tidy, linear commit history.

> Tip #1: Use git config --global pull.rebase true to avoid typing the --rebase flag each time you pull 🧐

> Tip #2: Don't forget that you can do all sorts of editing to your commits, before pushing them by using interactive rebase.

## Recover from git reset --hard

```zsh
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

```zsh
git ls-files notes| wc -l
```

- `git ls-files`: prints out a list of all the tracked files in the repository, one per line.
- `|`: operator funnels the output from the preceding command into the command following the pipe.
- `wc -l`: calls the [word count (wc)](http://en.wikipedia.org/wiki/Wc_%28Unix%29) program. Passing the `-l` flag asks it to return the total number of lines.

## Discard user email "xxxx" related commits after the specific commit

Create a backup of the repository:

```zsh
git clone --mirror . <backup-folder>
```

```zsh
git filter-branch --commit-filter 'if [ "$GIT_AUTHOR_EMAIL" = "REPLACE_EMAIL" ]; then skip_commit "$@"; else git commit-tree "$@"; fi' [REPLACE_COMMIT_ID]..HEAD
```

## Checkout files/folders from a specific branch

```zsh
rm -rf src .package.json
git checkout main .src package.json
```

## Branches

List all local branches

```zsh
git branch
```

List all merged branches

```zsh
git branch --merged
```

Same as above but exclude master and develop branches

```zsh
git branch --merged | egrep -v "(^\*|master|develop)"
```

### Deleting branches

```zsh
git branch -d branch_name
```

### Deleting remote branches

```zsh
git push <remote_name> -d branch_name
```

### Delete all branches but keeping others like “develop” and “master”

```zsh
git branch | grep -v "develop" | grep -v "master" | xargs git branch -D
```

> - **grep**: global regular expression - print lines matching a pattern
> - **v**: invert-match, select non-matching lines
> - **xargs**: read lines of text from the standard input or from the output of another command command and `turn them into commands and execute them`, which is used for building execution pipelines using the standard data streams

### Delete remote branches

```zsh
git push origin --delete branch1 branch2
```

## [Stashes](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)

### Save changes to a stash

```zsh
git push origin --delete branch1 branch2
```

### List all stashes.

```zsh
git stash list
```

### Annotate stashes with a description

```zsh
git stash -u save 'message'
```

### Re-apply the most recently created stash and delete it from stash list

```zsh
git stash pop
```

### Apply the specified stash by passing its identifier

```zsh
git stash apply stash@{2}
```

### Partial stash

```zsh
git stash -p
```

### Creating a branch from your stash

```zsh
git stash branch add-stylesheet stash@{1}
```

## [Worktree](https://fev.al/posts/git-worktree/)

Git worktree is a powerful feature that allows you to work on multiple branches simultaneously without switching between them.

```zsh
git worktree add ../feature-branch feature-branch
```

- Create a new directory named "feature-branch" in the parent directory of your current repository
- Check out the "feature-branch" in that new directory

Using git worktree allows you to:

- Work on multiple branches simultaneously without stashing or committing incomplete work
- Easily switch context between different tasks or features
- Perform operations like building or testing on one branch while actively developing on another

## Tags

```zsh
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

## Alias

<details>
   <summary>A list of git aliases to include in your `~/.gitconfig` file:</summary>

```zsh

[alias]
s=status
br = branch --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents:subject) %(color:green)(%(committerdate:relative)) [%(authorname)]' --sort=-committerdate
undo=reset HEAD~1 --mixed
cm = commit --all -m
cma = commit -a
co = checkout
cob = checkout -b
discard = reset --hard HEAD
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

## Sources

- [git-tips](https://github.com/git-tips/tips)
- [gitsheet.wtf](https://gitsheet.wtf/)
- [gitexplorer.com](https://gitexplorer.com/)
- [Setting Up Git Identities](https://www.micah.soy/posts/setting-up-git-identities/)
- [A Guide To Undoing Mistakes With Git](https://www.smashingmagazine.com/2021/05/undoing-mistakes-git-part1/)
