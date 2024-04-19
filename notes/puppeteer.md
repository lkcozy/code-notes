---
title: Puppeteer-The API to control the browsers programmatically
emoji: "\U0001F4DD"
tags:
  - note
  - js
  - test
  - web
  - scraping
  - automation
link: https://oxylabs.io/blog/puppeteer-tutorial
created: 2021-05-03T20:08:26.000Z
modified: 2021-05-03T20:08:26.000Z
---

[Puppeteer Playground](https://try-puppeteer.appspot.com/)

- Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.
- Puppeteer can be used for automating all the manual or GUI interactions. When it comes to debugging, this tool becomes any developer's choice.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--ufa7HzAu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2z0ttxfjzh69ulet70mj.png)

## Why choose Puppeteer?

- Puppeteer requires zero setup. Comes with chromium version making it very easy to start with.
- It has event-driven architecture which removes potential flakiness. So, there’s no need to add unnecessary wait and sleep times.
- Puppeteer runs headless by default which makes it super fast.
- But can be configured to run full (non-headless) Chrome or Chromium.
- The browser contexts, making it possible to efficiently parallelize test execution.
- Puppeteer works seamlessly with single-page applications.
- Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).
- Speed: Puppeteer has almost zero performance overhead over an automated page.
- Security: Puppeteer operates off-process with respect to Chromium, making it safe to automate potentially malicious pages.
- Stability: Puppeteer should not be flaky and should not leak memory.
- Simplicity: Puppeteer provides a high-level API that’s easy to use, understand, and debug.

## What is a headless browser?

`A headless browser is a browser without a graphical user interface.` Instead of controlling the browser’s actions via its graphical user interface (GUI), headless browsers are controlled using the command line.

## Why is that useful?

A headless browser is a great tool for `automated testing and server environments where you don't need a visible UI shell`. For example, you may want to run some tests against a real web page, create a PDF of it, or just inspect how the browser renders an URL.

## Handle Navigation

![](https://res.cloudinary.com/practicaldev/image/fetch/s--AFDuNCt1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hjnk109eorm54lj0i9ou.png)

## Interact with elements

![](https://res.cloudinary.com/practicaldev/image/fetch/s--3C6QvwrZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/civ59z290v9mfipa8xob.png)

## References

- [Productivity Hacks Using Puppeteer](https://dev.to/sudarshansb143/productivity-hacks-using-puppeteer-81d)
