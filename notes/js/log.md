---
title: Log
emoji: 📝
tags:
  - log
  - javascript
link:
---

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
