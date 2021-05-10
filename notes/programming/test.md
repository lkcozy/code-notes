---
title: Testing
emoji: 📝
tags:
  - test
link: https://itnext.io/its-a-trap-avoid-focusing-on-vanity-metrics-in-software-testing-7a627c7848
created: 2021-05-07T14:34:06.000Z
modified: 2021-05-07T14:34:06.000Z
---

- Don't focus on test's vanity metrics.
- **Look instead for `actionable metrics` (e.g., customer issues, recently changed code)—ones that indicate where you should focus your testing, where you can add value and quality to the product.**
- Consider the quality triangle of time, cost and quality. Pick two.
- If you want high quality, and zero bugs is REALLY high quality, **it’s either going to take forever or cost a fortune**.
- The amount of effort invested, versus having a set of smoke tests of critical features was very **arguably a misuse of time**
- `If you can measure it, you can manage/improve it`.

## Examples of Actionable Metrics in Testing

**Recently changed code** — if all the changes in this release are in module x, there’s potentially little benefit to testing module y that hasn’t been touched since 2015 and has no inter-dependencies. `Perhaps target your testing, or new quality initiatives — at module x.`

**Customer issues** — if feature Y is causing the helpdesk 90% of the issues — focus on feature Y. `Find out where the issues are, the commonalities, and attempt to break down the biggest problems and what may be causing them`.
Accelerating the shipping of quality product by reducing these issues will reduce the customer complaints, and increase customer happiness. Customer happiness IS quality!

### References

- [Avoid Focusing on Vanity Metrics in Software Testing](https://itnext.io/its-a-trap-avoid-focusing-on-vanity-metrics-in-software-testing-7a627c7848)
