---
title: TypeScript
emoji: 📝
tags:
  - js
  - typescript
link:
created: 2021-07-08T15:49:56.000Z
modified: 2022-08-12T15:49:56.000Z
---

## [Migrate an entire project to TypeScript](https://github.com/airbnb/ts-migrate/tree/master/packages/ts-migrate#usage)

```zsh
npx -p ts-migrate -c "ts-migrate-full ."
```

## [Create a condition-based subset types](https://www.piotrl.net/typescript-condition-subset-types/)

```ts
type SubType<Base, Condition> = Pick<
  Base,
  {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
  }[keyof Base]
>;
// or
type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

// usage
type JsonPrimitive = SubType<Person, number | string>;
type JsonPrimitive = {
  id: number;
  name: string;
  lastName: string;
};
```

## [An Introduction To Type Programming In TypeScript](https://www.zhenghao.io/posts/type-programming#equality-comparisons-and-conditional-branching)

## [Equality comparisons and conditional branching](https://www.zhenghao.io/posts/type-programming#equality-comparisons-and-conditional-branching)

In the type language, on the other hand, we use the extends keyword for "equality check", and the conditional (ternary) operator ? for conditional branching too as in:

```ts
TypeC = TypeA extends TypeB ? TrueExpression : FalseExpression
```

The `extends` keyword is versatile. It can also apply constraints to generic type parameters. For example:

```ts
function getUserName<T extends { name: string }>(user: T) {
  return user.name;
}
```

By adding the generic constraints, `<T extends {name: string}>` we ensure the argument our function takes always consist of a `name` property of the type `string`.

## [How to use type guards in TypeScript](https://blog.logrocket.com/how-to-use-type-guards-typescript/)

- The `in` type guard checks if an object has a particular property,
- [Custom type guard with predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

## Functions

```ts
function fn(a, b = "world") {
  return [a, b];
}
const result = fn("hello"); // ["hello", "world"]
```

```ts
type Fn<A extends string, B extends string = "world"> = [A, B];
//   ↑    ↑           ↑                          ↑              ↑
// name parameter parameter type          default value   function body/return statement

type Result = Fn<"hello">; // ["hello", "world"]
```

## [Typescript utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

- `keyof`: creates a union type consisting of the property names of the type you pass
- `Partial`: will return a new type with all of the props set to optional.
- `Pick` creates a new type by specifying which properties you would like to copy
- `Omit` will copy all the props, except for the ones you passed:
- `Exclude` removes a constituent of that union.
- `Record`:constructs an object type whose property keys are Keys and whose property values are Type

## [React with TypeScript: Best Practices](https://www.sitepoint.com/react-with-typescript-best-practices/)

![React with TypeScript](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FoeaMGnj.jpg&f=1&nofb=1)

Best practices for using Typescript with React

## [Making ESLint Happy in Mixed TypeScript/Javascript Projects](https://hashnode.blainegarrett.com/making-eslint-happy-in-mixed-typescriptjavascript-projects-ck5lge2v204cgqks1sk4nlp85)

Add this property to your `.eslintrc`:

```js
overrides: [
  {
    extends: ["plugin:@typescript-eslint/recommended"],
    files: ["**/*.ts?(x)"],
    plugins: ["@typescript-eslint"],
  },
];
```

## [Exploring advanced compiler options in TypeScript](https://blog.logrocket.com/exploring-advanced-compiler-options-typescript/)

This article will cover the following options:

- Nested tsconfig.json files
- strictPropertyInitialization
- noImplicitThis
- noImplicitReturns
- strictNullChecks

```sh
├── dist
└── src
    ├── tsconfig.json
    ├── backend
    │   ├── index.ts
    │   └── tsconfig.json
    └── frontend
        ├── index.ts
        └── tsconfig.json
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": ".",
    "outDir": "../dist/"
  },
  "files": [],
  "references": [{ "path": "./backend" }, { "path": "./frontend" }]
}
```

## Tools

- [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode): a developer productivity tool for rapid JavaScript / TypeScript prototyping.
- [ts-migrate](https://github.com/airbnb/ts-migrate): A tool to help migrate JavaScript code quickly and conveniently to TypeScript

## tutorials

- [Typesafe useReducer with React Context](https://dev.to/kardell/typesafe-usereducer-with-react-context-53c3?ck_subscriber_id=1238258824)
