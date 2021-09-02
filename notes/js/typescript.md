---
title: TypeScript
emoji: 📝
tags:
  - js
  - typescript
link:
created: 2021-07-08T15:49:56.000Z
modified: 2021-07-08T15:49:56.000Z
---

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
