---
title: MacOS
emoji: ⚙
tags:
  - macos
  - tool
---

## Tutorial

### [MacOS file management scheme](https://eurychen.me/post/solutions-of-macos-file-management/)

## Tools

### [AltTab](https://github.com/lwouis/alt-tab-macos)

![](https://github.com/lwouis/alt-tab-macos/raw/master/docs/public/demo/frontpage.jpg)

AltTab brings the power of Windows alt-tab to macOS

### [jitouch](https://www.jitouch.com/)

jitouch is a Mac application that expands the set of multi-touch gestures for the new MacBook, the Magic Mouse, and the Magic Trackpad.

### [Multitouch](https://multitouch.app/)

![](https://multitouch.app/images/screenshot.png)

Easily add more gestures to macOS

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
