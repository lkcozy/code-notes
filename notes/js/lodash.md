---
title: Lodash
emoji: 📝
tags:
  - js
link:
created: 2021-05-12T23:22:29.000Z
modified: 2021-05-12T23:22:29.000Z
---

## Deep merge objects

```js
const deepMerge = _.partialRight(_.merge, function defaults(objVal, srcVal) {
  return objVal === undefined ? srcVal : _.merge(objVal, srcVal, defaults);
});
```
