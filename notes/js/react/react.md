---
title: React-A JS library for building user interfaces.
emoji: "\U0001F4DD"
tags:
  - react
  - javascript
  - ui
  - eslint
  - nodejs
link: https://reactjs.org/
created: 2020-07-20T16:49:36.000Z
modified: 2022-08-12T16:05:46.000Z
---

[![Latest Version](https://badge.fury.io/js/react.svg)](https://badge.fury.io/js/react)

## Guidelines

- [Bulletproof React](https://github.com/alan2207/bulletproof-react): A simple, scalable, and powerful architecture for building production ready React applications.
- [Beginner to Intermediate React](https://www.reactguide.dev/?ck_subscriber_id=1238258824): Provide the reader with a set of tools and guidelines for creating better React components.
- [Bad Habits of Mid-Level React Developers](https://dev.to/srmagura/bad-habits-of-mid-level-react-developers-b41?ck_subscriber_id=1664454795)
- [React antipatterns to avoid](https://isamatov.com/react-antipatterns?ck_subscriber_id=1238258824)
  Avoid
  - Putting everything in Redux
  - Storing everything as a state
  - Passing props using spread operator everywhere
  - Declaring components inside of components
  - Overoptimizing performance
  - Huge component trees
- [react-philosophies](https://github.com/mithi/react-philosophies): a guidelines for writing react code
- [Opinionated React project structure](https://twitter.com/_georgemoller/status/1550139268181491713?ck_subscriber_id=1664454795)
- [Good advice on JSX conditionals](https://thoughtspile.github.io/2022/01/17/jsx-conditionals/?ck_subscriber_id=1238258824)
- [Options for optimizing caching in React](https://blog.logrocket.com/options-caching-react/)
- [Advanced React component composition](https://frontendmastery.com/posts/advanced-react-component-composition-guide/?ck_subscriber_id=1664454795): A deep dive on composition in React. Learn the key principles for designing and building reusable components that scale.
- [Building future facing frontend architectures](https://frontendmastery.com/posts/building-future-facing-frontend-architectures/): A deep dive on how component based frontend architectures implode at scale with complexity, and how to avoid it.

### Cheat Sheet

- [React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react): Cheatsheets for experienced React developers getting started with TypeScript

## [Migrate an entire project to TypeScript](https://github.com/airbnb/ts-migrate/tree/master/packages/ts-migrate#usage)

```zsh
npx -p ts-migrate -c "ts-migrate-full ."
```

## Resources

### Performance

- [react-lazyload](https://github.com/twobin/react-lazyload): Lazy load your component, image or anything matters the performance.
- [why-did-you-render](https://github.com/welldone-software/why-did-you-render#readme): notify you about potentially avoidable re-renders.
- [Optimizing Performance in React Apps](https://piyushsinha.tech/series/optimizing-react)

### General

- Lazy load images

```html
<img src="/earth.jpeg" loading="lazy" />
```

- Lazy load all your routes

```jsx
const Home = React.lazy(() => import("../component/Home"));
```

- [React Bits](https://github.com/vasanthk/react-bits): A compilation of React Patterns, techniques, tips and tricks.
- [Classnames](https://github.com/JedWatson/classnames): a simple JavaScript utility for conditionally joining classNames together.
- [immutable](https://github.com/immutable-js/immutable-js): provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.
- [normalizr](https://github.com/paularmstrong/normalizr): a small, but powerful utility for taking JSON with a schema definition and returning nested entities with their IDs, gathered in dictionaries.

### Framework

- [Create React App](https://github.com/facebook/create-react-app): a `tool` to bootstrap a new React frontend project with no build configuration
- [next.js](https://github.com/vercel/next.js): an open-source React front-end development web `framework` for production.
- [react-boilerplate](react-boilerplate): a highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.
- [Blitz](https://github.com/blitz-js/blitz): the Fullstack React Framework — built on Next.js. Blitz adds all the missing features and functionality that turns Next into a true fullstack framework. These key features include direct database access, middleware, and authentication.
- [React Starter Kit](https://github.com/kriasoft/react-starter-kit): an opinionated boilerplate for web development built on top of Node.js, Express, GraphQL and React, containing modern web development tools such as Webpack, Babel and Browsersync.
- [Relay Fullstack](https://github.com/lvarayut/relay-fullstack): a Relay scaffolding application that aims to help you get up and running a project without worrying about integrating tools.
- [React Enterprise Starter Kit](https://github.com/anandgupta193/react-enterprise-starter-kit): a Highly Scalable, performant and amazing react boilerplate for react developers to get started and improve web building capabilities.

### UI

- [LIGHT CHASER](https://github.com/xiaopujun/light-chaser): a data visualization designer for large screens
- [Bit](https://github.com/teambit/bit): A tool for component-driven application development.
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd): a beautiful and accessible drag and drop for lists with React.
- [React-Grid-Layout](https://github.com/react-grid-layout/react-grid-layout): a draggable and resizable grid layout with responsive breakpoints, for React.
- [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form): a simple React component capable of using JSON Schema to declaratively build and customize web forms.
- [react-virtualized](https://github.com/bvaughn/react-virtualized): React components for efficiently rendering large lists and tabular data
- [react-window](https://github.com/bvaughn/react-window): a complete rewrite of react-virtualized, which focus on making the package smaller1 and faster
- [react-diagram](https://github.com/projectstorm/react-diagrams): a super simple, no-nonsense diagramming library written in react that just works
- [react-flow](https://github.com/wbkd/react-flow): a highly customizable library for building interactive node-based UIs, editors, flow charts and diagrams
- [Brick Design](https://github.com/brick-design/react-visual-editor): visual drag and drop, free nesting, real-time preview of components, real-time tracking, WYSIWYG, perfect UI design restoration, source code Generated
  ![](https://user-images.githubusercontent.com/15995127/85188005-7e4de100-b2d6-11ea-9441-2bd5570b14a9.gif)
- [react-spring](https://github.com/pmndrs/react-spring): a spring-physics based animation library that should cover most of your UI related animation needs.
- [React Styleguidist](https://github.com/styleguidist/react-styleguidist): a isolated React component development environment with a living style guide.
- [React PDF viewer](https://github.com/react-pdf-viewer/react-pdf-viewer): A React component to view a PDF document. It's written in TypeScript, and powered by React hooks completely.
- [React Arborist](https://github.com/brimdata/react-arborist):A sortable, virtual, customizable tree component for React.
- [TanStack Table](https://github.com/tanstack/table)

### Hook

- [react-use](https://github.com/streamich/react-use): a collection of essential React Hooks.
- [ahooks](https://github.com/alibaba/hooks): a large set of essential react hooks, with demos and examples for each one of them.

### Tools

- [Ink](https://github.com/vadimdemedes/ink): React for CLIs. Build and test your CLI output using components.
- [Docz](https://github.com/doczjs/docz/): easily write and publish beautiful interactive documentation for your code.
- [Gitlanding](https://github.com/thieryw/gitlanding): Gitlanding helps you create a beautiful landing page for your GitHub projects.

### Database

- [RxDB](https://github.com/pubkey/rxdb): A realtime Database for JavaScript Applications
- [Watermelon DB](https://github.com/Nozbe/WatermelonDB): a reactive database framework. Build powerful React and React Native apps that scale from hundreds to tens of thousands of records and remain fast ⚡️.

### State Management

- [Recoil](https://github.com/facebookexperimental/Recoil): A new State Management Library for React
- [zustand](https://github.com/pmndrs/zustand): A small, fast and scalable bearbones state-management solution using simplified flux principles.
- [Constate](https://github.com/diegohaz/constate): write local state using React Hooks and lift it up to React Context only when needed with minimum effort.
- [Redux](https://github.com/reduxjs/redux): a predictable state container for JavaScript apps; `single store with objects`
- [MobX](https://github.com/mobxjs/mobx): a simple scalable state management. `multiple stores` (one for the UI state and one or more for the domain state ) `with observable/noticeable data` to automatically track changes through subscriptions
  ![mobx](https://mobx.js.org/assets/getting-started-assets/overview.png)
- [hookstate](https://github.com/avkonst/hookstate): a simple but compelling and swift state management for React that is based on hooks

### Test

## Tutorial

- [5 Advanced React Patterns](https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6)

- [Why I Stopped Using Redux](https://dev.to/g_abud/why-i-quit-redux-1knl)

- [On the direction of react performance optimization](https://developpaper.com/on-the-direction-of-react-performance-optimization/)

![](https://imgs.developpaper.com/imgs/vl.png)

The author shares several react performance optimization tips from three directions:

- reduce the amount of calculation
- using cache
- precise recalculation range

[Original](https://zhuanlan.zhihu.com/p/74229420)

- [Typesafe useReducer with React Context](https://dev.to/kardell/typesafe-usereducer-with-react-context-53c3?ck_subscriber_id=1238258824)

- [Understanding micro frontends](https://frontendmastery.com/posts/understanding-micro-frontends/)

A look at the micro frontend architecture trend. Understand the core problems they aim to solve.

- [Recommended React + TypeScript codebases to learn from](https://react-typescript-cheatsheet.netlify.app/docs/basic/recommended/codebases/?ck_subscriber_id=1664454795)

A collection of 30+ React and TypeScript codebases that are organized into different categories.

## ESLint Configuration

ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code

```js
module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "babel-eslint",
  rules: {
    "no-unused-vars": [1, { ignoreRestSiblings: true }],
    "prefer-const": 2,
    "no-var": 2,
    "no-await-in-loop": 0,
    "no-nested-ternary": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-plusplus": [1, { allowForLoopAfterthoughts: true }],
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "click-events-have-key-events": 0,
    "class-methods-use-this": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "max-classes-per-file": 0,
    "no-console": 1,
    "arrow-body-style": 0,
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks:
          "^use(Async|AsyncFn|AsyncRetry|Debounce|UpdateEffect|IsomorphicLayoutEffect|DeepCompareEffect|ShallowCompareEffect)$",
      },
    ],
  },
  plugins: ["html", "@emotion"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
    "import/core-modules": ["@deck.gl/extensions"],
  },
};
```

## Prettier Configuration

An opinionated code formatter.

[Options](https://prettier.io/docs/en/options.html)

```js
module.exports = {
  singleQuote: true,
  arrowParens: "avoid",
  htmlWhitespaceSensitivity: "strict",
  jsxSingleQuote: true,
  semi: false,
};
```
