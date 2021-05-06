---
title: Web Workers- web content to run scripts in background threads
emoji: "\U0001F4DD"
tags:
  - js
  - nodejs
  - web
link: 'https://www.hongkiat.com/blog/web-workers-javascript-api/'
created: 2021-05-03T20:08:26.000Z
modified: 2021-05-03T20:08:26.000Z
---

Web Workers is a JavaScript API that allows you to run scripts in a separate thread from the main one.

![](https://assets.hongkiat.com/uploads/web-workers-javascript-api/web-workers.jpg)

## Use cases

Let’s say there’s a script that `fetches and processes a file`. If a file is considerably large it’ll take a long time to be processed! Which might stall other scripts that were invoked later from getting executed.

However, if the `file processing is moved to a background thread`, known as the `worker thread`, other events won’t be blocked until the former one is over.

The script `executed in a background worker thread` is known as the worker script or just the worker.

## Service Workers

- Service workers, on the other hand, are a type of web workers.
- They are useful for modifying responses from network requests.
- They basically act as `proxies`. 
- They are used for building offline apps.

![](https://allma.si/blog/wp-content/uploads/2020/11/web-vs-service-worker.png)

## [Comlink](https://github.com/GoogleChromeLabs/comlink)

![Comlink](https://user-images.githubusercontent.com/234957/54164510-cdab2d80-4454-11e9-92d0-7356aa6c5746.png)

It offloads CPU-intensive tasks to worker threads in node.js. It's important to keep the main thread as idle as possible so it can respond to user interactions quickly and provide a jank-free experience. The UI thread ought to be for UI work only. WebWorkers are a web API that allows you to run code on a separate thread. To communicate with another thread, WebWorker offers the `postMessage` API. You can send JavaScript objects as message using `myWorker.postMessage(someObject)`, triggering a `message` event inside the worker.

Comlink turns this message-based API into something more developer-friendly by providing an RPC implementation; Values from one thread can be used within the other thread (and vice versa) just like local values.

## [workerize-loader](https://github.com/developit/workerize-loader) :Automatically move a module into a Web Worker

![](https://camo.githubusercontent.com/07ea4784d1cee71aeec3decd900e2fe92860ba19c043a8126060ad04b3ffce45/68747470733a2f2f692e696d6775722e636f6d2f485a5a473877722e6a7067)

A webpack loader that moves a module and its dependencies into a Web Worker, automatically reflecting exported functions as asynchronous proxies.
