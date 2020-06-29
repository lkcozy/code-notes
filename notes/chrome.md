---
title: Chrome
emoji: 📝
tags:
  - chrome
  - tool
link: https://alfilatov.com/posts/run-chrome-without-cors/
---

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
