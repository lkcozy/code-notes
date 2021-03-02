---
title: Sync Your Fork with the Original Git Repository
emoji: 📝
tags:
  - git
  - github
link: https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/
---

```sh
# Add a new remote upstream repository
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

# Sync your fork
git fetch upstream
git checkout master
git merge upstream/master
```
