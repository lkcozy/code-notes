---
title: pragma - a directive indicates how the contents should be compiled
emoji: "\U0001F4DD"
tags:
  - js
  - react
  - web
link: >-
  https://dev.to/gugadev/use-custom-elements-in-react-using-a-custom-jsx-pragma-3kc
created: 2021-05-05T22:03:31.000Z
modified: 2021-05-05T22:03:31.000Z
---

A pragma (short for "pragmatic information") is a compiler directive. It tells the compiler how it should handle the contents of a file.

An example of this in JavaScript is 'use strict' mode. 'use strict' is a directive that enables JavaScript's Strict Mode, which is a way to opt in to a more restricted variant of JavaScript. It denotes that the code should be processed in a specific way.

## JSX Pragma

`Pragma is just the function that transform JSX syntax to JavaScript.` The default pragma in React is React.createElement.

```jsx
<button type="submit">Hello</button>
```

is transformed to

```jsx
React.createElement("button", { type: "submit" }, "Hello");
```

That's why we need to import `React` event if we don't use it explicitly!

## Why use a custom JSX pragma?

Using a custom JSX pragma is useful when you want to customize the transform process of JSX => JavaScript.

## How to use JSX pragma?

Add the custom pragma comment to the top of your file.

```jsx
/** @jsxImportSource theme-ui */
```

## Reference

- [Understanding Theme UI: 1 - Jsx Pragma](https://paulie.dev/posts/2021/01/theme-ui-alpha-1/)
