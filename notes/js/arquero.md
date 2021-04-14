---
title: Arquero-JS library for query processing and transformation of array-backed data tables
emoji: "\U0001F4DD"
tags:
  - note
  - javascript
  - big data
link: "https://uwdata.github.io/arquero/"
created: 2020-11-20T01:47:15.000Z
modified: 2020-11-20T01:47:15.000Z
---

Arquero is a JavaScript library for query processing and transformation of array-backed data tables. Following the [relational algebra](https://en.wikipedia.org/wiki/Relational_algebra) and inspired by the design of dplyr, Arquero provides a fluent API for manipulating column-oriented data frames. Arquero supports a range of data transformation tasks, including filter, sample, aggregation, window, join, and reshaping operations.

- Fast: process data tables with million+ rows.
- Flexible: query over arrays, typed arrays, array-like objects, or Apache Arrow columns.
- Full-Featured: perform a variety of wrangling and analysis tasks.
- Extensible: add new column types or functions, including aggregate & window operations.
- Lightweight: small size, minimal dependencies.
  To get up and running, start with the [Introducing](https://observablehq.com/@uwdata/introducing-arquero) Arquero tutorial, part of the [Arquero notebook collection](https://observablehq.com/collection/@uwdata/arquero).

The core abstractions in Arquero are `data tables`, which model each column as an array of values, and `verbs` that transform data and return new tables. `Verbs` are `table methods`, allowing method chaining for multi-step transformations. Though each table is unique, many verbs reuse the underlying columns to limit duplication.

## Example([Runkit](https://runkit.com/lkcozy/5ef6f90d1faf8b001ae50404))

```js
import { all, desc, op, table } from "arquero";

// Average hours of sunshine per month, from https://usclimatedata.com/.
const dt = table({
  Seattle: [69, 108, 178, 207, 253, 268, 312, 281, 221, 142, 72, 52],
  Chicago: [135, 136, 187, 215, 281, 311, 318, 283, 226, 193, 113, 106],
  "San Francisco": [165, 182, 251, 281, 314, 330, 300, 272, 267, 243, 189, 156],
});

// Sorted differences between Seattle and Chicago.
// Table expressions use arrow function syntax.
dt.derive({
  month: (d) => op.row_number(),
  diff: (d) => d.Seattle - d.Chicago,
})
  .select("month", "diff")
  .orderby(desc("diff"))
  .print();

// Is Seattle more correlated with San Francisco or Chicago?
// Operations accept column name strings outside a function context.
dt.rollup({
  corr_sf: op.corr("Seattle", "San Francisco"),
  corr_chi: op.corr("Seattle", "Chicago"),
}).print();

// Aggregate statistics per city, as output objects.
// Reshape (fold) the data to a two column layout: city, sun.
dt.fold(all(), { as: ["city", "sun"] })
  .groupby("city")
  .rollup({
    min: (d) => op.min(d.sun), // functional form of op.min('sun')
    max: (d) => op.max(d.sun),
    avg: (d) => op.average(d.sun),
    med: (d) => op.median(d.sun),
    // functional forms permit flexible table expressions
    skew: ({ sun: s }) => (op.mean(s) - op.median(s)) / op.stdev(s) || 0,
  })
  .objects();
```
