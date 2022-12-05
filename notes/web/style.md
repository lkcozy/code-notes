---
title: Style
emoji: 📝
tags:
  - web
  - style
link:
created: 2022-11-30T11:52:43.000Z
modified: 2022-11-30T11:52:43.000Z
---

### Implement the black and white mode on the whole website

[grayscale](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale)

```css
<style>
    html {
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
		filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
        _filter:none;
    }
</style>
```
