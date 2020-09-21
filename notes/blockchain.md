---
title: Blockchain
emoji: 🅱
tags:
  - blockchain
link:
---

## On-Chain Versus Off-Chain

While blockchain is fundamentally a storage solution, it principally differs from a database. A database is an organized collection of data representing the current system state. The main functionality of a database is to allow efficient data retrieval, fusion, and aggregation triggered by user queries. In contrast, most blockchain implementations represent a ledger in which a history of changes to the system state is recorded, which results in blockchain space being more expensive and the storage less efficient compared to a database.

As a result, only specific data elements (such as short transactions or indices) are stored on a blockchain. Most blockchain-based applications combine blockchain with offchain storage (databases or dedicated file systems)

### Advantages To Off-Chain Transactions Over On-Chain Transactions

• It's faster. The transactions are recorded instantly, without having to wait for the network confirmations.

• It's cheaper. Transactions done off-chain are usually free.

• It's more private. These transfers are not visible on the public blockchain.

## Consensus

### Practical Byzantine Fault Tolerance (PBFT) 

## Tutorial

### [Ethereum dApp development](https://eurychen.me/post/5days-ethereum-develop/day0/)

## Libraries

### [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib)

A javascript Bitcoin library for node.js and browsers. Written in TypeScript, but committing the JS files to verify.

### [Mnemonic Code Converter](https://eurychen.me/tools/mnemonic.html#english)

### [Core functionality for the XYO NodeJS projects.](https://github.com/XYOracleNetwork/sdk-core-nodejs)

Core functionality for the XYO NodeJS projects. This repository implements the core objects and services used in the XYO protocol. Additionally it provides core XYO features like performing bound-witnesses, hashing, signing, serialization, origin-chain management and TCP Network services. Alas, it exposes a number of CLI applications for running archivists and diviners.

## Results

- [Deconstructing Blockchains: Concepts, Systems, and Insights](http://folk.uio.no/romanvi/Papers/bc-tutorial-debs-master.pdf)

- [MAXathon Blockchain Hackathon](https://hackathon.maxonrow.com/)
