---
title: Chrome
emoji: 📝
tags:
  - chrome
  - tool
link: https://alfilatov.com/posts/run-chrome-without-cors/
---

## Extensions

- [The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg)

A lightweight extension to reduce chrome's memory footprint. Perfect if you have a lot of tabs open at the same time. Tabs that have not been viewed after a configurable length of time will be automagically suspended in the background, freeing up the memory and CPU being consumed by that tab.

- [Summary Box!](https://github.com/deanoemcke/thegreatsuspender)

Summarize news articles, blog posts, and videos and AI will extract the key sentences

- [DownThemAll](https://chrome.google.com/webstore/detail/downthemall/nljkibfhlpcnanjgbnlnbjecgicbjkge)

DownThemAll will help you select, queue, sort and run your downloads faster. It comes with advanced ways to select what links to download, and will remember your previous decisions so that you can queue more downloads with just OneClick!

- [ClearURLs](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk/related)

- [SingleFileZ](https://chrome.google.com/webstore/detail/singlefilez/offkdfbbigofcgdokjemgjpdockaafjg)

Save web pages as self-extracting HTML/ZIP hybrid files

- [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg)

Wappalyzer is a utility that uncovers the technologies used on websites. It detects content management systems, ecommerce platforms, web frameworks, server software, analytics tools and many more.

- [Session Buddy](https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko/related)

Manage Browser Tabs and Bookmarks with Ease
Session Buddy is a session manager that allows you to:

● Save open tabs as collections that can be easily restored later. Great for freeing up memory and avoiding clutter.

● Recover your open tabs after a crash.

● See and manage all open tabs in one place.

● Search open tabs and collections to quickly find what you're looking for.

- [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)

Adds a toolbar button with various web developer tools.

## Run Chrome browser without CORS

### OSX

```sh
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

### Linux

```sh
google-chrome --disable-web-security
```

## Profile

Find profile path

```
chrome://version
```