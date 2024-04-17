---
title: Greasy Fork Scripts
emoji: 📝
tags:
  - js
link:
created: 2024-03-14T11:01:38.000Z
modified: 2024-03-14T11:01:38.000Z
---

### Automatically Expand Content

```js
(function () {
  "use strict";
  function simulateClick(element) {
    var evt = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    element.dispatchEvent(evt);
  }

  function clickAllShowAll() {
    const elements = document.querySelectorAll("p.showAll");
    elements.forEach((el) => {
      if (el.innerText.trim() === "Expand") {
        simulateClick(el);
      }
    });
  }

  window.addEventListener("load", function () {
    setTimeout(clickAllShowAll, 2000);
  });

  window.addEventListener("scroll", function () {
    setTimeout(clickAllShowAll, 2000);
  });
})();
```
