---
title: Monorepo-a version-controlled code repository
emoji: 📝
tags:
  - best-practices
  - development
link: https://semaphoreci.com/blog/what-is-monorepo
created: 2021-05-07T14:43:22.000Z
modified: 2021-05-07T14:43:22.000Z
---

A monorepo is a version-controlled code repository that holds many projects. While these projects may be related, they are often logically independent and run by different teams.

- A monorepo can host any number of microservices as long as you carefully set up your Continuous Integration and Delivery (CI/CD) pipeline for deployment.

## Monorepos vs Multirepos

![](https://wpblog.semaphoreci.com/wp-content/uploads/2021/03/multi-to-mono.jpg)

The opposite of the monorepo is multirepo, where each project is held on an entirely separate, version-controlled repository. Multirepos come naturally — it’s what most of us do when starting a new project.

Going from multi to monorepo is a matter of moving all your projects into a single repository.

**Multirepos are not a synonym for microservices; one does not need the other.**

## The general challenges of multiple repositories

- Same features

## Benefits of shared code monorepo

The benefits of using monorepo for your private dependencies:

Visibility: everyone can see everyone else’s code. This property leads to better collaboration and cross-team contributions — a developer in a different team can fix a bug in your code you didn’t even know existed.
Simpler dependency management: sharing dependencies is trivial. There’s little need for a package manager as all modules are hosted in the same repository.
Single source of truth: one version of every dependency means there are not versioning conflicts and no dependency hell.
Consistency: enforcing code quality standards and a unified style is easier when you have all your codebase in one place.
Shared timeline: breaking changes in APIs or shared libraries are exposed immediately, forcing different teams to communicate ahead and join forces. Everyone is invested in keeping up with changes.
Atomic commits: atomic commits make large-scale refactoring easier. A developer can update several packages or projects in a single commit.
Implicit CI: continuous integration is guaranteed as all the code is already unified in one place.
Unified CI/CD: you can use the same CI/CD deployment process for every project in the repo.
Unified build process: we can use a shared build process for every application in the repo.

**If used on multiple projects, shared code is stored in monorepo rather than on multiple project repositories.**

This can ensure that every app is using the same set of features and that they are not behaving differently depending on where they are used.

## [How to better manage business logic in your Flutter apps](https://itnext.io/how-to-better-manage-business-logic-in-flutter-apps-bbbc8efe5dab)

I am using monorepo for my company’s in-house plugins/package. `Not everything we do can be open-sourced and most of our apps will use common logic`, so — why not?

## [lerna](https://lerna.js.org/): a tool that optimizes the workflow around managing multi-package repositories with git and npm

## Reference

- [Guide to Monorepos for Front-end Code](https://www.toptal.com/front-end/guide-to-monorepos)
