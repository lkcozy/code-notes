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

Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

## What is a headless browser?

`A headless browser is a browser without a graphical user interface.` Instead of controlling the browser’s actions via its graphical user interface (GUI), headless browsers are controlled using the command line.

## Why is that useful?

A headless browser is a great tool for `automated testing and server environments where you don't need a visible UI shell`. For example, you may want to run some tests against a real web page, create a PDF of it, or just inspect how the browser renders an URL.
