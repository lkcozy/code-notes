---
title: Lodash
emoji: 📝
tags:
  - js
link: https://lodash.com/docs/4.17.15
created: 2021-05-12T23:22:29.000Z
modified: 2021-05-12T23:22:29.000Z
---

## [\_.template](https://docs-lodash.com/v4/template/)

```js
var compiled = _.template("<p>{data.time} {data.issueId} {data.title}</p>", {
  // Use custom template delimiters.
  interpolate: /{([\s\S]+?)}/g,
  // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
  variable: "data", // optional
});
let result = compiled({ time: "2021", issueId: "123", title: "test title" });
```

## Deep merge objects

```js
const deepMerge = _.partialRight(_.merge, function defaults(objVal, srcVal) {
  return objVal === undefined ? srcVal : _.merge(objVal, srcVal, defaults);
});
```
