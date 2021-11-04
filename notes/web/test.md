---
title: Testing Strategies in a Microservice Architecture
emoji: "\U0001F4DD"
tags:
  - web
  - test
  - microservice
  - architecture
link: https://martinfowler.com/articles/microservice-testing/
created: 2021-03-26T20:36:09.000Z
modified: 2021-03-26T20:36:09.000Z
---

## Microservice Architecture Style

`It is an approach to developing a single application as a suite of small services`, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies.

![](https://martinfowler.com/articles/microservice-testing/meta-image.png)

- A microservice architecture builds software as suites - of collaborating services.
- Microservices can usually be split into similar kinds - of modules
- Microservices connect with each other over networks - and make use of “external” datastores
- Multiple services work together as a system to provide - business valuable features
- Unit testing alone doesn't provide guarantees about - the behaviour of the system
- Integrations with data stores and external components - benefit from the fast feedback of integration tests
- Without more coarse grained tests of the microservice we have no confidence the business requirements are satisfied
- In-process component tests allow comprehensive testing whilst minimising moving parts
- Internal resources are useful for more than just testing
- Out of process component tests exercise the fully deployed artifact pushing stubbing complexity into the test harness
- A combination of testing strategies leads to high test coverage
- The sum of all consumer contract tests defines the overall service contract
- The test boundary for end-to-end tests is much larger than for other types of test
- Writing and maintaining end-to-end tests can be very difficult
- Microservice architectures provide more options for where and how to test.
- The test pyramid helps us to maintain a balance between the different types of test

## [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- [How to test a select element with React Testing Library](https://returnofthemac.tech/how-to-test-a-select-element-with-react-testing-library?ck_subscriber_id=1238258824)

```js
it("should allow user to change country", () => {
  render(<App />);
  userEvent.selectOptions(
    // Find the select element, like a real user would.
    screen.getByRole("combobox"),
    // Find and select the Ireland option, like a real user would.
    screen.getByRole("option", { name: "Ireland" })
  );
  expect(screen.getByRole("option", { name: "Ireland" }).selected).toBe(true);
});
```
