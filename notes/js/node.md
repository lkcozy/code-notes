---
title: Node.js
emoji: "\U0001F4DD"
tags:
  - node
  - javascript
link: 'https://github.com/goldbergyoni/nodebestpractices'
created: 2020-07-22T00:48:08.000Z
modified: 2021-04-20T16:05:46.000Z
---

## [Best Practices](https://github.com/goldbergyoni/nodebestpractices)

![](https://github.com/goldbergyoni/nodebestpractices/raw/master/assets/images/banner-2.jpg)

### 1. Project Structure Practices

1.1 Structure your solution by components

TL;DR: The worst large applications pitfall is maintaining a huge code base with hundreds of dependencies - such a monolith slows down developers as they try to incorporate new features. Instead, partition your code into components, each gets its own folder or a dedicated codebase, and ensure that each unit is kept small and simple. Visit 'Read More' below to see examples of correct project structure

Otherwise: When developers who code new features struggle to realize the impact of their change and fear to break other dependent components - deployments become slower and riskier. It's also considered harder to scale-out when all the business units are not separated

🔗[ Read More: structure by components](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)

## Tools

- [Signale](https://github.com/klaussinani/signale)

![](https://github.com/klaussinani/signale/blob/master/media/default-loggers.png)

Highly configurable logging utility

```js
const signale = require("signale");

signale.success("Operation successful");
signale.debug("Hello", "from", "L59");
signale.pending("Write release notes for %s", "1.2.0");
signale.fatal(new Error("Unable to acquire lock"));
signale.watch("Recursively watching build directory...");
signale.complete({
  prefix: "[task]",
  message: "Fix issue #59",
  suffix: "(@klauscfhq)",
});
```

- [JSCity](https://github.com/aserg-ufmg/JSCity)

![](https://raw.githubusercontent.com/aserg-ufmg/JSCity/gh-pages/cities/florajs.png)

JSCity is an implementation of the Code City metaphor for visualizing source code. We adapted and implemented this metaphor for JavaScript, using the three.js 3D library. JSCity represents a JavaScript program as a city; folders are districts and files are sub-districts; the buildings are functions; inner functions are represented as buildings on the top of their nested function/building. The Number Of Lines of Source (LOC) represents the height of the buildings/functions; the Number Of Variables (NOV) in a function correlates to the building's base size. Blue buildings denote named functions; green buildings are anonymous functions.

### Chart

- [GoJS](https://github.com/NorthwoodsSoftware/GoJS)

GoJS is a JavaScript and TypeScript library for creating and manipulating diagrams, charts, and graphs.

[flow chart](https://gojs.net/latest/samples/flowchart.html) | [sequence diagram](https://gojs.net/latest/samples/sequenceDiagram.html)
