---
title: RxJS
emoji: "\U0001F4DD"
tags:
  - javascript
  - rxjs
link: https://www.learnrxjs.io/
created: 2021-01-05T22:58:30.000Z
modified: 2021-04-20T16:05:46.000Z
---

RxJS is a mature, battle hardened library for `dealing with events and data flow`.

```js
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
range(1, 200)
  .pipe(
    filter((x) => x % 2 === 1),
    map((x) => x + x)
  )
  .subscribe((x) => console.log(x));
```

## Reactive Programming

Reactive programming is a `declarative paradigm` in which data streams (or observables) are manipulated asynchronously using a `pipe` comprising one or more operators.

## [Observables(aka, streams)](https://dev.to/thisdotmedia/creating-observables-im-rxjs-jf9)

Observables are the foundation of RxJS.

Observables are like functions with zero arguments that push multiple values to their Observers, either synchronously or asynchronously.

```js
const obs$ = Observable.create((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => observer.next(4), 1000);
});

console.log("before subscribe");
const observer = obs$.subscribe((v) => console.log("received: ", v));
console.log("after subscribe");

// Output
// before subscribe
// received:  1
// received:  2
// received:  3
// after subscribe
// received:  4
```

The convention of naming an Observable variable with a `$` suffix (aka Finnish Notation)

> 💡 With [Hungarian Notation](https://en.wikipedia.org/wiki/Hungarian_notation), one adds a prefix to their variable names that denotes the type the variable contains.

```js
const sTest = "test";
const nShortPI = 3.14;
const obsClicks = Observable.fromEvent(domButton, "clicks");
```

## Operators

- [pluck](https://www.learnrxjs.io/learn-rxjs/operators/transformation/pluck)

```js
const source = from([
  { name: "Joe", age: 30 },
  { name: "Sarah", age: 35 },
]);
const example$ = source.pipe(pluck("name"));
const subscribe = example$.subscribe((val) => console.log(val));
//output: "Joe", "Sarah"
```

- [bufferCount](https://www.learnrxjs.io/learn-rxjs/operators/transformation/buffercount)

Collect emitted values until provided number is fulfilled, emit as array.

```js
//Create an observable that emits a value every second
const source = interval(1000);
//After three values are emitted, pass on as an array of buffered values
const bufferThree = source.pipe(bufferCount(3));
const subscribe = bufferThree.subscribe(
  (val) => console.log("Buffered Values:", val)
  //ex. output [0,1,2]...[3,4,5]
);
```

## Resources

- [Learn RxJS](https://www.learnrxjs.io/)
- [Optimizing Batch Processing Jobs with RxJS](https://medium.com/@ravishivt/batch-processing-with-rxjs-6408b0761f39)
