---
title: JavaScript Operators
emoji: "\U0001F4DD"
tags:
  - javascript
  - operators
link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators'
created: 2021-01-05T22:58:30.000Z
modified: 2021-04-20T16:05:46.000Z
---

```js
function addPlansWhenUndefined(plans, location, budget) {
  var newPlans =
    plans.tuesday?.location == undefined
      ? {
          plans,
          tuesday: { location: location ?? "Park", budget: budget ?? 200 },
        }
      : console.log("Plans have already been added!");
  newPlans ??= plans;
  return newPlans;
}
```

## ??

nullish coalescing operator

This operator will return the first argument if it `is not null/undefined`, otherwise, it will return the second argument. Let’s see an example.

```js
null ?? 5; // => 5
0 ?? 5; // => 0
```

## ??=

??= is otherwise known as the logical nullish assignment operator. This assignment operator will only assign a new value if `the current value is null or undefined`. The example above highlights how this operator is essentially syntactic sugar for nullish assignment.

```js
function gameSettingsWithNullish(options) {
  options.gameSpeed ??= 1;
  options.gameDiff ??= "easy";
  return options;
}

function gameSettingsWithDefaultParams(gameSpeed = 1, gameDiff = "easy") {
  return { gameSpeed, gameDiff };
}

gameSettingsWithNullish({ gameSpeed: null, gameDiff: null }); // => { gameSpeed: 1, gameDiff: 'easy' }
gameSettingsWithDefaultParams(null, null); // => { gameSpeed: null, gameDiff: null }
```

## ?.

The optional chaining operator ?. allows developers to read the values of properties nested deeply within `a chain of objects without having to explicitly validate each reference` along the way. When a reference is nullish, the expression `stops evaluating and returns a value of undefined`.

```js
var travelPlans = {
  destination: "DC",
  monday: {
    location: "National Mall",
    budget: 200,
  },
};

const tuesdayPlans = travelPlans.tuesday?.location;
console.log(tuesdayPlans); // => undefined
```

## ?

The ternary operator ? takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. Let’s see it in action.

```js
var budget = 0;
var transportion = budget > 0 ? "Train" : "Walking";
console.log(transportion); // => 'Walking'
```

We can even use it to replicate the behavior of nullish assignment.

```js
function nullishAssignment(x, y) {
  return x == null || x == undefined ? y : x;
}

var x = nullishAssignment(null, 8); // => 8
var y = nullishAssignment(4, 8); // => 4
```
