---
title: How to conduct a distributed system design interview
emoji: 📝
tags:
  - interview
  - program
  - architecture
  - design
link: https://robertovitillo.com/how-to-conduct-a-system-design-interview/
created: 2021-05-17T19:48:59.000Z
modified: 2021-06-08T19:48:59.000Z
---

A post describes how to interview senior candidates for distributed systems roles. The goal is to get a sense of the candidate's experience and problem-solving skills.

## Objectives

- Assess the `seniority (experience)` of a candidate in an interview.
- Get a feeling of a senior’s candidate’s problem-solving skills.

## Steps

A system design interview entails asking a candidate to design a system that solves a specific problem.

- **Pick a system you are familiar with**
  - `Don’t forget that it’s not just you evaluating them - they are also evaluating you.`
  - You have spent a considerable amount of time internalizing its solution space, scalability limitations, tradeoffs, and failure modes.
  - Otherwise, it's a big red flag for a senior engineer
- **Start with a small scale design**
  - `When presenting the system they should design, start with a small scale and make sure the candidate is on the same page - there will be time later to dig into scalability.`
  - At this stage, there is no need to deep dive into a specific component of the design or technology - go broad and give the candidate space to hash out a complete architecture.
  - Don’t hash out all the requirements in detail, as you `want the candidate to ask questions` to see whether they can get a clear picture of what they have been asked to design before jumping into the solution.
  - Talk to the candidate, and try to understand why they are making the decisions they are and how they are approaching the problem
  - If you feel there are too many moving parts, ask whether there is a way to remove specific components while not affecting the overall solution.
  - Ask the candidate to justify the tradeoffs they are making - for example, why did they pick a NoSQL store rather than SQL one?
  - By the end of the first 30 minutes, they should have a simple design sketched out on the whiteboard.
- **Crank up the scale**
  - No matter how the initial design looks like, it’s bound to hit a brick wall as you increase the load it’s under.
  - Ask them what they think will break as the scale increases and how they would address it.
  - `It’s a great sign if the candidate can point out brick walls on their own.`
  - Once they have identified the breaking points, work with the candidate to eliminate them.
  - Start with the one that has the highest likelihood of being hit first
  - `Point out failure modes they missed and ask them what would happen if this component, or that link, was to go down.`
  - Pick a slice of the design and drill down into it. For example, if the candidate’s design requires replicating data, talk about consistency guarantees, and how to enforce them in detail.

## Evaluation

- **When interviewing strong candidates, you should leave the interview feeling like you learned something from them.**

- It’s a great sign if the candidate can point out brick walls on their own.

- You can tell a lot about a candidate’s experience by **how quickly** they can **spot failure modes**, like single points of failure, and come up with elegant ways to solve them.

- By the end of the interview, you should have a good idea of the candidate’s `strengths` and `weaknesses` and how they approach problems that don’t have a single best answer.

- A senior candidate should be able to quickly go through the first part of the interview and have no issues scaling up the system and addressing failure modes in the second part.
