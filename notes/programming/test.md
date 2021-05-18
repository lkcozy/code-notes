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

## [Best Practices](https://blog.logrocket.com/javascript-testing-best-practices/)

### Test anatomy and test descriptions

The AAA pattern stands for Arrange, Act, and Assert. You want to break up the logic inside tests into three parts to make them easier to understand.

Here’s an example that demonstrates this:

```js
it('should resolve with "true" when block is forged by correct delegate', async () => {
  // Arrange
  const block = {
    height: 302,
    timestamp: 23450,
    generatorPublicKey:
      "6fb2e0882cd9d895e1e441b9f9be7f98e877aa0a16ae230ee5caceb7a1b896ae",
  };
  // Act
  const result = await dpos.verifyBlockForger(block);
  // Assert
  expect(result).toBeTrue();
});
```

### Write detailed test descriptions using the 3-layer system

Structure tests using a three-layer system:

- Layer 1: Unit that you want to test, or test requirement
- Layer 2: Specific action or scenario you want to test
- Layer 3: Describe the expected result

```js
describe("OrderServcie", () => {
  describe("Add a new item", () => {
    it("When item is already in shopping basket, expect item count to increase", async () => {
      // ...
    });
    it("When item does not exist in shopping basket, expect item count to equal one", async () => {
      // ...
    });
  });
});
```

### Avoid testing private methods

### Avoid catching errors in tests

The correct example

```js
it("When no product price, it throws error", async () => {
  await expect(addNewProduct({ name: "rollerblades" }))
    .toThrow(AppError)
    .with.property("msg", "No product name");
});
```

### Don’t mock everything

### Use realistic data

Not every developer likes creating test data. But test data should be as realistic as possible to cover as many application paths as possible to detect defects. Thus, many data generation strategies exist to transform and mask production data to use it in your tests. Another strategy is to develop functions that generate randomized input.

> Tip: Use a library like faker.js to help you generate realistic testing data.

### Avoid too many assertions per test case

Don’t be afraid to split up scenarios or write down more specific test descriptions. A test case that contains more than five assertions is a potential red flag; it indicates that you are trying to verify too many things at once.

### Avoid too many helper libraries

### Don’t overuse test preparation hooks

Be mindful about using test preparation hooks. Only use hooks when you want to introduce behavior for all of your test cases. Most commonly, hooks are used to spin up or tear down processes to run test scenarios.

## Examples of Actionable Metrics in Testing

**Recently changed code** — if all the changes in this release are in module x, there’s potentially little benefit to testing module y that hasn’t been touched since 2015 and has no inter-dependencies. `Perhaps target your testing, or new quality initiatives — at module x.`

**Customer issues** — if feature Y is causing the helpdesk 90% of the issues — focus on feature Y. `Find out where the issues are, the commonalities, and attempt to break down the biggest problems and what may be causing them`.
Accelerating the shipping of quality product by reducing these issues will reduce the customer complaints, and increase customer happiness. Customer happiness IS quality!

### References

- [Avoid Focusing on Vanity Metrics in Software Testing](https://itnext.io/its-a-trap-avoid-focusing-on-vanity-metrics-in-software-testing-7a627c7848)

```

```

```

```
