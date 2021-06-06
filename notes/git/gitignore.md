---
title: .gitignore Best Practices
emoji: 📝
tags:
  - note
link:
created: 2021-06-04T09:43:31.000Z
modified: 2021-06-04T09:43:31.000Z
---

## [One `.gitignore` in a given projects root](https://stackoverflow.com/questions/10274424/best-practice-for-using-multiple-gitignore-files)

There can be multiple .gitignore files in any sub directories but the Best Practice is to have one .gitignore in a given projects root and have that file reference sub-directories as necessary, e.g. images/yearly/recent Otherwise it is be tricky to know "which" .gitignore file to look at to find something that's being ignored.
