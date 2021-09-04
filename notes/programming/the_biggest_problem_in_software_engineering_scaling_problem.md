---
title: The Biggest Problem In Software Engineering-Scaling Problem
emoji: 📝
tags:
  - engineering
link: https://www.ruanyifeng.com/blog/2021/05/scaling-problem.html
created: 2021-05-19T22:43:28.000Z
modified: 2021-05-19T22:43:28.000Z
---

Author: Ruan Yifeng

There is a course named "software engineering" for undergraduates, which studies how to organize and manage software projects.

To be honest, this course is not suitable for undergraduates, `because students may not understand what the problem is that the course is trying to solve`.You have to work on a big project, on a big team, to get a sense of why software engineering is important and hard to do right.

## Challenges

There is a problem in software development, which is called "`Scaling`", that is, how to serve more users. If you have 10,000 concurrent users, it's a completely different concept than if you have 10 concurrent users, even though the functionality is identical, the implementation behind it is completely different. `When the number of concurrent users goes up by an order of magnitude, the software has to be refactored and a lot of problems arise.`

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050804.jpg)

Software Engineering is the study of `how to scale software and teams to fit the needs of large projects.`

### Why is the development of large projects inefficient?

- Code complexity

As the amount of code grows, it becomes more and more difficult for a single developer to understand the entire code base.

When you join a team midway through a large, tightly coupled system, and you don't understand every detail of how the system works, you're less likely to make changes to the previous code because you don't know the full impact

You don't feel like you own the code if you don't really understand the system. You'll be hesitant to refactor. Therefore, outdated code starts to accumulate, and technical debt starts to build up. Over time, development becomes more and more unpleasant and unsatisfactory, resulting in a brain drain.It will be more difficult for a new person to refactor the code that is left behind.

- Team complexity

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050822.jpg)

As the number of team members increases, the cost of communication begins to increase exponentially.

The growth rate of communication costs is the `square of the growth rate` of people. The larger the team, the more difficult it is to collaborate.

It becomes more and more difficult for large teams to stay flat and have to be broken up into smaller groups.Peer-to-peer communication will be replaced by top-down communication.Team members will feel that they are transformed from equal stakeholders to ordinary workers, their work motivation will be affected, and their sense of responsibility and ownership will be diminished.

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050823.jpg)

## Solutions

The root cause of the low development efficiency of large projects is the growth in software size, which inevitably makes code and teams bulky. To solve this problem, we should start from the code and team.

- `Code decoupling`: the code-level solution is to decouple the software into components or modules, preventing the parts from being tightly coupled together.Each component and module can be developed independently and invoked by other parts through exposed interfaces.

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050824.jpg)

In this way, the burden of developers is greatly reduced. They only need to be responsible for their own code, and they don't need to care about the implementation of other parts. Each part can be refactored separately without worrying about affecting the other parts.

- `Team decoupling`: Separate people
  - Each sub-team can operate independently and does not rely on outsiders.
  - The internal workings of the sub-team need not be known from the outside.
  - Coordination between subteams should follow open protocols and rules, preferably automated, and avoid private negotiation.
  - The number of sub-teams should not be too large, and each sub-team should not exceed 5 people.
    - `The correct approach is to group the software according to its business functions. Each group is responsible for a large software function of the whole process`, and the design, coding, testing, deployment and support personnel are all in the same group.This allows for decoupling and independent delivery and refactoring.Each group decides what tools to use internally, and how to implement a function, without sharing internal details or relying on the work of other groups.
  - The subteam should be a small, fully functional software development organization.
  - Large teams should ensure the autonomy of sub-teams and allocate resources in accordance with the functions and business value provided by sub-teams.
  - `The role of software architect is very important.`
    - The focus of the software architect should not be on the tools and technologies used by the team, but rather `on the protocols and communications between the various services` and the overall system health, ensuring that the code and the team are properly decoupled.
  - Code decoupling and team decoupling.
    - Ideally, code decoupling is aligned with team decoupling in a one-to-one relationship, with a subteam responsible for a separate module.In practice, it is possible for a subteam to be responsible for several modules, but it is not possible for multiple subteams to participate in a module.
  - Communication (between modules, between sub-teams) should be as standardized as possible. Try to keep the process simple and well documented, preferably with a standardized API, so that communication can be established without any human communication.

![](https://cdn.beekka.com/blogimg/asset/202105/bg2021050825.jpg)
