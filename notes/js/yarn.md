---
title: YARN
emoji: 📝
tags:
  - note
link:
created: 2021-09-14T11:01:38.000Z
modified: 2021-09-14T11:01:38.000Z
---

## package.json

- Caret (^): matches the most recent `major` version (the first number). `^1.2.3` will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.
- Tilde (~): matches the most recent `minor
- `version (the middle number).`~1.2.3`will match all`1.2.x`versions but will miss`1.3.0`.

**So for version zero software, the caret behaves like the tilde.**

Both ~0.1.2 and ^0.1.2 will match the most recent 0.1 software, but ignore 0.2.x since it could be incompatible.
