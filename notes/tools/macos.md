---
title: MacOS
emoji: ⚙
tags:
  - macos
  - tools
created: 2020-06-29T05:54:14.000Z
modified: 2021-03-30T16:55:25.000Z
---

## Tutorial

### [MacOS file management scheme](https://eurychen.me/post/solutions-of-macos-file-management/)

## Reduce PDF File Size and Control Quality with ColorSync

1. From “Applications > Utilities,” open the ColorSync Utility

2. Go to the Filters tab and find the Reduce File Size option in the filters list

3. Expand the filter by clicking the arrows on the left, so that you can see the details. The default option to “Constrain Size” is set to a max of 512 pixels, which explains why you are getting poor quality PDFs when reducing the file size in Preview. This setting is not just good enough for retaining any detail.

![](https://blog.macsales.com/wp-content/uploads/2020/07/ColorSyncUtility_Preferences.png)

4. Click on the down arrow on the right of this filter and choose Duplicate Filter. This will create a filter named Reduce File Size Copy at the bottom of the list.

5. On the duplicated filter, select the arrow on the left to open it up and change its name and settings. To change the name, double click it. To create some different filter options, create a few with different Resolution and Quality settings.

For example, I have the following custom filters set up:

Reduce File Size (100 dpi, low quality)
Reduce File Size (100 dpi, high quality)
Reduce File Size (150 dpi, high quality)

6. As soon as you create your custom filters, they will appear in the Quartz Filter dropdown of Preview’s “File > Export…” menu as well.

![](https://blog.macsales.com/wp-content/uploads/2020/07/Preview_updatedFiltersList.jpg)

## Tools

### [SwitchHosts](https://github.com/oldj/SwitchHosts)

![](https://raw.githubusercontent.com/oldj/SwitchHosts/master/screenshots/sh_light.png)

SwitchHosts is an App for managing hosts file, it is based on Electron , React, UmiJS , Chakra UI, CodeMirror, etc.

### [Falcon- SQL editor](https://github.com/plotly/falcon)

![](https://github.com/plotly/falcon-sql-client/raw/master/static/images/falcon_hero.gifs)

Falcon is a free, open-source SQL editor with inline data visualization. It currently supports connecting to RedShift, MySQL, PostgreSQL, IBM DB2, Impala, MS SQL, Oracle, SQLite and more (for connecting to Oracle, please, see here the instructions to install the required free Oracle Instant Client).

### [Stats-system monitor](https://github.com/exelban/stats)

![](https://github.com/exelban/stats/releases)

macOS system monitor in your menu bar

### [AltTab](https://github.com/lwouis/alt-tab-macos)

![](https://github.com/lwouis/alt-tab-macos/raw/master/docs/public/demo/frontpage.jpg)

AltTab brings the power of Windows alt-tab to macOS

### [jitouch](https://www.jitouch.com/)

jitouch is a Mac application that expands the set of multi-touch gestures for the new MacBook, the Magic Mouse, and the Magic Trackpad.

### [Multitouch](https://multitouch.app/)

### [hat.sh-client side file encryption](https://github.com/sh-dv/hat.sh)

![](https://camo.githubusercontent.com/e1e78e542cc049cb79f55627b2eb602bad1d952e/68747470733a2f2f692e696d6775722e636f6d2f62745a526533632e676966)

Encrypt and decrypt files in your browser. Fast, Secure client-side File Encryption and Decryption using the web crypto api

![](https://multitouch.app/images/screenshot.png)

Easily add more gestures to macOS

### [Pock-display macOS Dock in Touch Bar](https://pock.dev/)

![](https://pock.dev/assets/img/preview/pock_widgets.png)

.

### [Turbo Boost Switcher for Mac OS X](http://tbswitcher.rugarciap.com/)

![](https://www.rugarciap.com/wp-content/uploads/2019/07/captura_web_main.png)

Turbo Boost Switcher is a little application for Mac computers that allows to enable and/or disable the Turbo Boost feature.

### [Pap.er-wallpaper](https://paper.meiyuan.in/)

![](https://www.maxiapple.com/wp-content/uploads/2019/06/pap-er-paper-macos-mac-gratuit-2.jpg)

Elegant Wallpaper App for macOS. Deliver fresh and stunning wallpapers everyday

### [Diagrams.net](https://www.diagrams.net/)

![](https://www.diagrams.net/assets/svg/home-dia1.svg)

Diagrams.net is a free, high-quality browser-based end-user diagramming application. Diagrams.net lets you store your diagram files where you need them - on Google Drive, OneDrive, Github, GitLab, Dropbox, or on your local device. It also provides a desktop version across major platforms.

### [Kris-ai powered noise cancelling app](https://krisp.ai/)

![](https://krisp.ai/wp-content/themes/KrispLight/imgs/tech-img-2.svg)

An AI-powered noise cancelling app that mutes background noise during calls

## Star/Unstar selected folder

```applescript
property unset : 0
property red : 2
tell application "Finder"
repeat with f in selection as alias list
set tThis to label index of f
if tThis is 0 then
if kind of f is "folder" then
set label index of folder f to red
else
set label index of file f to red
end if
else
set label index of file f to unset
end if
end repeat
end tell
```

## [Awesome macOS open source applications](https://github.com/serhii-londar/open-source-mac-os-apps/blob/master/README.md)
