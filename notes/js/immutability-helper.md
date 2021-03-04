---
title: 'Using immutability-helper with Array, Object, Map'
tags:
  - javascript
link: 'https://github.com/kolodny/immutability-helper'
created: 2020-06-23T22:03:19.000Z
modified: 2020-07-06T17:04:14.000Z
---

## Array of simple values

```js
import update from "immutability-helper";

const oldArray = [1, 2, 3];

// add an item
const newArray = update(oldArray, { $push: [6, 7] });
// => [1, 2, 3, 6, 7]

// modify an item
const itemIndex = 1; // modify `2` value at index `1`
const newValue = 8;
const newArray = update(oldArray, { [itemIndex]: { $set: newValue } });
// => [1, 8, 3]

// remove an item
const itemIndex = 2; // delete `3` value at index `2`
const newArray = update(oldArray, { $splice: [[itemIndex, 1]] });
// => [1, 2]
```

## Array of simple objects

```js
import update from 'immutability-helper';

const oldArray = [
{name: 'Stacey', age: 55},
{name: 'John', age: 77},
{name: 'Kim', age: 62},
];

// add an item
const newArray = update(oldArray, {$push: [
    {name: 'Trevor', age: 45},
]});

// replace an item
const itemIndex = 1; // replace *John* at index `1`
const newValue = {name: 'Kevin', age: 25};
const newArray = update(oldArray, { [itemIndex]: {$set: newValue} });

// modify an item
const itemIndex = 1; // modify _John_ at index `1`
const newArray = update(oldArray, {
    [itemIndex]: { $merge, {
        age: 85
        }
    }
});

// remove an item
const itemIndex = 0; // delete _Stacey_ at index `0`
const newArray = update(oldArray, {$splice: [[itemIndex, 1]] } });

```

You can use the builtin findIndex() to find an item's index based on its properties.

## Array is in another object

```js
import update from 'immutability-helper'

const oldData = {
  city: {
    people: [
      { name: 'Stacey', age: 55 },
      { name: 'John', age: 77 },
      { name: 'Kim', age: 62 },
    ],
  },
}

// add an item
const newArray = update(oldArray, {
  city: {
    people: { $push: [{ name: 'Trevor', age: 45 }] },
  },
})

// replace an item
const itemIndex = 1 // replace _John_ at index `1`
const newValue = { name: 'Kevin', age: 25 }
const newArray = update(oldArray, {
  city: {
    people: {
      [itemIndex]: { $set: newValue },
    },
  },
})

// modify an item
const itemIndex = 1; // modify _John_ at index `1`
const newArray = update(oldArray, {
  city: {
    people: {
      [itemIndex]: {$merge, { age: 85 } }
    }
  }
});

// remove an item
const itemIndex = 0 // delete _Stacey_ at index `0`
const newArray = update(oldArray, {
  city: {
    people: { $splice: [[itemIndex, 1]] },
  },
})
```

## Object of objects (hashes, unordered)

```js
import update from "immutability-helper";

const oldData = {
  "hash-stacey": { name: "Stacey", age: 55 },
  "hash-john": { name: "John", age: 77 },
  "hash-kim": { name: "Kim", age: 62 },
};

// add an item
const newData = update(oldData, {
  ["hash-trevor"]: { $set: { name: "Trevor", age: 45 } },
});

// replace an item at a specific hash
const itemHash = "hash-john";
const newValue = { name: "Kevin", age: 25 };
const newData = update(oldData, { [itemHash]: { $set: newValue } });

// modify an item
const itemHash = "hash-john";
const newData = update(oldData, {
  [itemHash]: {
    $merge: {
      age: 85, // change John's age to 85
    },
  },
});

// remove an item
const itemHash = "hash-stacey";
const newData = update(oldData, { $unset: [itemHash] });
// Map of objects (hashes, ordered)
```

```js
import update from "immutability-helper";

const oldData = new Map([
  ["hash-stacey", { name: "Stacey", age: 55 }],
  ["hash-john", { name: "John", age: 77 }],
  ["hash-kim", { name: "Kim", age: 62 }],
]);

// add an item
const newData = update(oldData, {
  $add: [["hash-trevor", { name: "Trevor", age: 45 }]],
});

// replace an item at a specific hash
const itemHash = "hash-john";
const newValue = { name: "Kevin", age: 25 };
const newData = update(oldData, { [itemHash]: { $set: newValue } });

// modify an item
const itemHash = "hash-john";
const newValue = update(oldData.get(itemHash), {
  $merge: {
    age: 85, // change John's age to 85
  },
});
/* typescript needs to do `oldData as any` cast here */
const newData = update(oldData, { [itemHash]: { $set: newValue } });

// remove an item
const itemHash = "hash-stacey";
const newData = update(oldData, { $remove: [itemHash] });
```
