---
title: Mac Numbers
emoji: 📝
tags:
  - macos
  - tips
link:
created: 2021-05-18T12:43:15.000Z
modified: 2021-05-18T12:43:15.000Z
---

## [Highlighting max value](https://discussions.apple.com/thread/7201137)

![](https://discussions.apple.com/content/attachment/611914040)

## [COUNT values between two dates](https://www.spreadsheetweb.com/how-to-count-values-between-two-dates/)

```
=COUNTIFS($C$3:$C$10,">="&DATE($K$9,1,1),$C$3:$C$10,"<="&DATE($K$9,12,31))
```


COUNTIFS(Table 1::$I$2:$I47,">="&DATE($A3,1,1),Table 1::$I$2:$I47,"<"&DATE($A3+1,1,1))