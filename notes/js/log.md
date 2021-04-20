---
title: Log
emoji: 📝
tags:
  - log
  - javascript
link: null
created: 2020-07-05T04:30:54.000Z
modified: 2021-01-05T22:58:30.000Z
---

## Console

### console.time() and console.timeEnd()

Both these methods are used in conjunction with each other to know `the amount of time` spent by a block or a function.

```js
console.time("timer");
console.timeEnd("timer");
```

![](https://miro.medium.com/max/346/1*S63BR8aOlGfYfAhgaR9TJw.png)

```js
console.table({ a: 1, b: 2, c: 3 });
```

### console.count()

This method is used to count the number that the function hit by this counting method.

```js
for (let i = 0; i < 3; i++) {
  console.count(i);
}
```

![](https://miro.medium.com/max/346/1*hfucVhBEtQBFjgzTv3QoFg.png)

### console.table()

This method generates a table inside a console, for better readability. A table will be automatically generated for an array or an object.

![](https://miro.medium.com/max/470/1*emG1EeptLSHsLbR2ulPfKg.png)

### console.group() and console.groupEnd()

These methods group() and groupEnd() allows us to group contents in a separate block, which will be indented.

```js
console.group("group1");
console.warn("warning");
console.error("error");
console.log("I belong to a group");
console.groupEnd("group1");
console.log("I dont belong to any group");
```

![](https://miro.medium.com/max/349/1*Q_Ok_EnFSioEiNES7vpq3A.png)

## [Loglevel](https://github.com/pimterry/loglevel)

Minimal lightweight logging for JavaScript, adding reliable log level methods to wrap any available console.log methods

```js
import * as loglevel from "loglevel";

if (!__PROD__) {
  loglevel.setLevel("debug");
} else {
  loglevel.setLevel("error");
}

export default loglevel;
```
