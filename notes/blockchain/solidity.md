---
title: Solidity
emoji: "\U0001F1E7\U0001F1E7"
tags:
  - Ethereum
  - blockchain
link: "https://docs.soliditylang.org/en"
created: 2021-05-05T22:03:31.000Z
modified: 2021-05-05T22:03:31.000Z
---

Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract HelloWorld {
    function helloWorld() external pure returns (string memory) {
        return "Hello, World!";
    }
}
```
