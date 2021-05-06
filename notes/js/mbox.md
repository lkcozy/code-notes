---
title: MobX-State management
emoji: "\U0001F4DD"
tags:
  - js
  - react
link: 'https://mobx.js.org/README.html'
created: 2021-03-31T20:55:09.000Z
modified: 2021-04-14T23:11:23.000Z
---

Simple, scalable state management.

The philosophy behind MobX is simple:

- `Straightforward`: write minimalistic, boilerplate free code.
- `Effortless optimal rendering`: all changes to and uses of your data are tracked at runtime, building a dependency tree that captures all relations between state and output.
- `Architectural freedom`: MobX is unopinionated and allows you to manage your application state outside of any UI framework. This makes your code decoupled, portable, and above all, easily testable.

![](https://mobx.js.org/assets/flow2.png)

```js
import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// Model the application state.
class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

// Build a "user interface" that uses the observable state.
const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}>
    Seconds passed: {timer.secondsPassed}
  </button>
));

ReactDOM.render(<TimerView timer={myTimer} />, document.body);

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase();
}, 1000);
```

The observer wrapper around the TimerView React component, will automatically detect that rendering depends on the timer.secondsPassed observable, even though this relationship is not explicitly defined. The reactivity system will take care of re-rendering the component when precisely that field is updated in the future.

Every event (onClick / setInterval) invokes an action (myTimer.increase / myTimer.reset) that updates observable state (myTimer.secondsPassed). `Changes in the observable state are propagated precisely to all computations and side effects (TimerView) that depend on the changes being made`.
