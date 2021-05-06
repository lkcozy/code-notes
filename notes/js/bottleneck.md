---
title: Bottleneck - NodeJS Task Scheduler and Rate Limiter
emoji: "\U0001F4DD"
tags:
  - javascript
  - node
link: 'https://github.com/SGrondin/bottleneck'
created: 2020-07-02T20:13:36.000Z
modified: 2021-04-20T16:05:46.000Z
---

Bottleneck is a lightweight and zero-dependency Task Scheduler and Rate Limiter for Node.js and the browser.

Bottleneck is an easy solution as it adds very little complexity to your code. It is battle-hardened, reliable and production-ready and used on a large scale in private companies and open source software.

It supports Clustering: it can rate limit jobs across multiple Node.js instances. It uses Redis and strictly atomic operations to stay reliable in the presence of unreliable clients and networks. It also supports Redis Cluster and Redis Sentinel.

```js
import Bottleneck from "bottleneck";
// execute 3 requests per second:
const limiter = new Bottleneck({
  minTime: 333,
});
```
