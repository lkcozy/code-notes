---
title: Blockchain
emoji: 📝
tags:
  - blockchain
link:
created: 2021-05-26T18:09:18.000Z
modified: 2022-03-21T18:09:18.000Z
---

Blockchain is an immutable, distributed public ledger and peer-to-peer (P2P network).

- Block = all transactions within a certain time period
- Blockchain = links all blocks together

## How it works

## Why

- Remove the need for trusted intermediaries
  - Reduce transaction fees

## Features of Blockchain

- `SHA256 Hash Function`: a one-way cryptographic function to generate a fixed size for any size of source text. The encrypted value cannot be decrypted back to the original text.
- `Public Key Cryptography`: creating a set of keys referred as Public key and Private key.
- `Distributed Leger`: a digital system in which transaction and their details are recorded in multiple places at the same time.
- `Peer to Peer Network`: one in which two or more PCs shares files and access to devices such as printers without require a separate server computer.
- `Consensus Algorithm`: a process in computer science used to achieve agreement on a single data value among distributed systems. `Proof-of-Work is the original consensus algorithm in a Blockchain network.`
- `Incentives for Validation`: giving a reward for validating the transactions and maintaining the Blockchain
- `Smart Contract`: Immutable programs stored on a blockchain. They automate the execution of transactions based on predetermined conditions being met.

## [Blockchain Type](#Using Blockchain for Trustworthy Mobile Contact Tracing)

The two common types are the Public Blockchain and the Private Blockchain.

- A `public` blockchain allows any node that has internet connection to access the blockchain by issuing either a write a read request. Some of the popular public blockchain available today are Bitcoins, Ethereum, Factom, Blockstream, and so on.
- A `private` blockchain allows nodes to issue similar requests but these nodes must be predefined and authorized.

## [How is the Bitcoin Mining Block Reward Determined?](https://www.bitcoinmining.com/what-is-the-bitcoin-block-reward/)

- One of Bitcoin’s central rules and cannot be changed without agreement between the entire Bitcoin network
- The block reward started at 50 BTC in block #1 and `halves every 210,000 blocks`.
- The reward is halved every 4 years
- Block reward halvings cut miners’ earnings in half
- Block reward halvings also decrease supply, which as discussed above may cause Bitcoin’s price to increase.
- A Bitcoin price increase can help offset the block reward halving.

## Related Technologies

- InterPlanetary File System (IPFS): a protocol and peer-to-peer network sharing data in a distributed file system.
- [Ganache](https://github.com/trufflesuite/ganache): A tool for creating a local blockchain for fast Ethereum development.
  - [How to develop, test, and deploy smart contracts using Ganache](https://blog.logrocket.com/develop-test-deploy-smart-contracts-ganache/)
- [Truffle](https://github.com/trufflesuite/truffle): A development environment, testing framework and asset pipeline for Ethereum.
- [Hardhat](https://github.com/nomiclabs/hardhat):
  Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. Get Solidity stack traces & console.log.
- [Drizzle](https://github.com/trufflesuite/drizzle): a collection of front-end libraries that make writing dapp front-ends easier and more predictable.
- [Solidity](https://soliditylang.org/): smart contract development language, which is similar to the javascript. [Writing smart contracts with Solidity](https://blog.logrocket.com/writing-smart-contracts-solidity/)

## Resources

- [Cryptopedia](https://www.gemini.com/cryptopedia): Your trusted source for all things crypto.

[[ethereum]]

## Basic

The basic concept of blockchain is quite simple: a distributed database that maintains a continuously growing list of ordered time-stamped series of immutable records.

### Block structure

The first logical step is to decide the block structure. To keep things as simple as possible we include only the most necessary: index, timestamp, data, hash and previous hash.

![](https://miro.medium.com/max/1400/1*pbyFH4U5sO27UE1EjnImoA.png)

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

### [A blockchain in 200 lines of code](https://medium.com/@lhartikk/a-blockchain-in-200-lines-of-code-963cc1cc0e54)

### [Ethereum dApp development](https://eurychen.me/post/5days-ethereum-develop/day0/)

### [BlockChain Full Stack](https://github.com/itheima1/BlockChain)

### 🚀 [Build Blockchain Insurance Application](https://github.com/IBM/build-blockchain-insurance-app)

![](https://github.com/IBM/build-blockchain-insurance-app/raw/master/images/app-arch.png)

This project showcases the use of blockchain in insurance domain for claim processing. In this application, it has four participants, namely insurance, police, repair shop and the shop. Furthermore, each participant will own its own peer node. The insurance peer is the insurance company providing the insurance for the products and it is responsible for processing the claims. Police peer is responsible for verifying the theft claims. Repair shop peer is responsible for repairs of the product while shop peer sells the products to consumer. The value of running this network on the IBM Blockchain Platform is that you can easily customize the network infrastructure as needed, whether that is the location of the nodes, the CPU and RAM of the hardware, the endorsement policy needed to reach consensus, or adding new organizations and members to the network.

## Libraries

### [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib)

A javascript Bitcoin library for node.js and browsers. Written in TypeScript, but committing the JS files to verify.

### [Mnemonic Code Converter](https://eurychen.me/tools/mnemonic.html#english)

### [Core functionality for the XYO NodeJS projects.](https://github.com/XYOracleNetwork/sdk-core-nodejs)

Core functionality for the XYO NodeJS projects. This repository implements the core objects and services used in the XYO protocol. Additionally it provides core XYO features like performing bound-witnesses, hashing, signing, serialization, origin-chain management and TCP Network services. Alas, it exposes a number of CLI applications for running archivists and diviners.

### [Hyperledger Explorer](https://github.com/hyperledger/blockchain-explorer)

Hyperledger Explorer is a simple, powerful, easy-to-use, well maintained, open source utility to browse activity on the underlying blockchain network. Users have the ability to configure and build Hyperledger Explorer on MacOS and Ubuntu.

### [Hyperledger Iroha](https://github.com/hyperledger/iroha)

![](https://iroha.readthedocs.io/en/master/_images/iroha_logo.png)

Iroha is a straightforward distributed ledger technology (DLT), inspired by Japanese Kaizen principle — eliminate excessiveness (muri). Iroha has essential functionality for your asset, information and identity management needs, at the same time being an efficient and trustworthy crash fault-tolerant tool for your enterprise needs.

Iroha is Crash Fault Tolerant and has its own consensus algorithm - [YAC](https://arxiv.org/pdf/1809.00554.pdf)

## References

### [Blockchain Resources In Chinese](https://github.com/LiuBoyu/blockchain)

### [awesome-blockchain-cn](https://github.com/chaozh/awesome-blockchain-cn)

## Results

### [Deconstructing Blockchains: Concepts, Systems, and Insights](http://folk.uio.no/romanvi/Papers/bc-tutorial-debs-master.pdf)

### [MAXathon Blockchain Hackathon](https://hackathon.maxonrow.com/)
