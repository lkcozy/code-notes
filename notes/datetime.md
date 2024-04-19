---
title: Datetime
emoji: 📝
tags:
  - js
  - time
  - luxon
  - moment
link:
created: 2021-07-09T11:09:37.000Z
modified: 2021-07-09T11:09:37.000Z
---

[Playground](https://runkit.com/lkcozy/60e7e8b892f6f0001ad58400)

- [Luxon](https://moment.github.io/luxon/#/): A powerful, immutable, and friendly wrapper for Javascript dates and times.
- [Moment](https://github.com/moment/moment/): Parse, validate, manipulate, and display dates in javascript.
- [Luxon For Moment users](https://moment.github.io/luxon/#/moment)

## UTC Now

```js
const nativeUtcNow = new Date().toISOString();
const luxonUtcNow = DateTime.utc().toISO();
const momentUtcNow = moment().toISOString();
```

## Timezone

- Convert local time to utc given a timezone

```json
const zone = "America/Chicago"
const datetime = "2019-07-09T18:45"
// luxon
DateTime.fromISO(datetime, { zone })
  .toUTC()
  .toISO()
// moment
moment.tz(datetime, zone).utc().toISOString();
```
