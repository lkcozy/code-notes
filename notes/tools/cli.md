---
title: Five interesting command-line tools
emoji: "\U0001F6E0"
tags:
  - cli
  - macos
link: https://eurychen.me/post/5-funny-commands/
created: 2020-07-11T05:16:40.000Z
modified: 2021-05-05T22:03:31.000Z
---

## Title

## Tools

- [js-fire](https://github.com/hobochild/js-fire): a library for automatically generating command line interfaces (CLIs) from most js objects.

> A javascript implementation of [google/python-fire](https://github.com/google/python-fire)

```ts
const fire = require("js-fire");
const calculator = {
  __description__: "I am a math machine",
  double: (number) => {
    // I double things
    return 2 * number;
  },
  add: (n1 = Math.PI, n2) => {
    return n1 + n2;
  },
  misc: {
    year: () => "1999",
    brand: () => "casio",
    hello: (name) => `hello ${name}`,
  },
};
fire(calculator);
```

- [Table](https://github.com/gajus/table)

![](https://github.com/gajus/table/raw/master/.README/demo.png)

A neat effect and perhaps a useful way to show info from CLI tools you might be building. You can configure how the table is rendered, padded, and aligned.
