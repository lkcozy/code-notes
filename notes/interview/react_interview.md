---
title: React interview questions
emoji: 📝
tags:
  - react
  - interview
link:
created: 2021-06-02T15:44:05.000Z
modified: 2021-06-02T15:44:05.000Z
---

- Interview questions for juniors and seniors have a different goal.
- In the `junior` case we are interested in figuring out if there is a `potential` in the candidate to become `productive`
- In the `senior` case we are looking for `experience`.
- **When interviewing strong candidates, you should leave the interview feeling like you learned something from them.**

## [Senior React interview questions](https://raw.githubusercontent.com/fChristenson/senior-react-interview-questions/master/README.md)

> Interview questions that I would ask a mid to senior level React developer

The following questions are aimed to determine a candidate's

- experience level
- previous projects' scope
- if they understand what it takes to work on large projects.

### General

- What tools suite do you use for your project and why?

  - Bad: "Parcel, NextJS and JS++"
  - Good: "Webpack, React router and TypeScript"

- Whats more important, clean code or good enough?

  - Bad: "Clean code"
  - Good: "I try to write clean code but sometimes I need to hack things together"

- How do you handle errors/issues?
  - Error boundaries
  - Try Catch
  - Sentry/LogRocket
  - Add necessary logging

### Architecture

- How do you handle component reuse?

  - Bad: "I always try to write generic components"
  - Good: "I refactor when I see duplication but some components are generic"

- How do you avoid component duplication?

  - Bad: "I write generic components and put them in Storybook"
  - Good: "It is hard to solve this so I talk to the teams and use good names"

- How do you handle multiple component variants in the same codebase?

  - Bad: "I try to refactor them in to generic components"
  - Good: "I raise awareness in the company and take action after that"

- How do you manage modules on large projects?

### State Management

- [How do you manage state on large projects](https://blog.logrocket.com/modern-guide-react-state-patterns/)?

  > As the application grows, a lot of state will need to be lifted upwards in the component tree, which will increase the level of prop drilling and cause unnecessary re-renders as the state is updated.

  - Bad: "I use Redux"
  - Good: "I use the Recoil to manage the global state and react hooks to manage components' states"

- What state do you put where and why?

  - Bad: "I always put my state on the store"
  - Good: "I only put shared data on the store and private data on the state"

- [What is prop drilling and how can you avoid it](https://kentcdodds.com/blog/prop-drilling)?

There is often the need for a deeply nested component to use data provided by another component that is much higher in the hierarchy. The simplest approach is to simply pass a prop from each component to the next in the hierarchy from the source component to the deeply nested component.

To avoid prop drilling, a common approach is to use React context.

### Performance

- When do you use server side rendering and why?

  - Bad: "I always use it because it speeds up the loading time"
  - Good: "I haven't used it because I don't work in Node"

- How to prevent re-renders in React?

  > e-rendering of a component and it’s child components occur when props or state of the component has been changed.
  > Re-rendering components that are not updated, affects the performance of an application.

- How do you spot unnecessary re-rendering?

- Name a few techniques to optimize React app performance.

  - useMemo
  - Maintaining State Colocation: This is a process of moving the state as close to where you need it as possible. It is better to shift states which are less valuable to the parent component, to a separate component.
  - Lazy Loading
  - Worker

- What's the difference between the service worker and web worker?

### Customization

- How do you handle feature toggling?

  - Bad: "What do you mean?"
  - Good: "I use a config file or similar"

- How do you handle branding/themes?

  - Bad: "I use Material ui themes"
  - Good: "I try to avoid them / I use a variant prop in the components"

- How do you handle translations?
  - Bad: "I have never worked with them / we use translation files"
  - Good: "We get them from a external tool"

### Testing

- What testing strategy do you use?

  - Bad: "I mostly do manual testing/TDD"
  - Good: "I use TDD for logic and automated UI tests for the rest"

- When do you use component based testing and why?

  - Bad: "I use Enzyme and I try to test all my components"
  - Good: "I use Enzyme but only for generic components since I use UI testing mostly"

- Do you use TDD and how?

  - Bad: "I use TDD as much as I can"
  - Good: "I find it hard to use TDD for components so I use it for logic"

- How do you handle A/B testing?

  - Bad: "What do you mean?"
  - Good: "I create a temporary component in isolation"

## References

- [React Interview Questions](https://www.interviewbit.com/react-interview-questions/)
