---
title: Vitalik Ethereum Interview Notes
emoji: 📝
tags:
  - blockchain
  - ethereum
link: https://nav.al/vitalik
created: 2022-04-28T17:41:28.000Z
modified: 2022-04-28T17:41:28.000Z
---

## What Is Ethereum?

Ethereum as a general purpose blockchain. So instead of being a blockchain for one application, it’s a blockchain that you can build any application on top of. The way that you do this on Ethereum is you write a piece of code and you create a digital transaction that contains that piece of code and publishes it.

When you publish this transaction and that transaction gets included into a block on the blockchain, this creates an object called a “contract.” This is a virtual object that the blockchain keeps track of. So a contract is an object that contains a piece of code.

## Advantages and Disadvantages of Ethereum

- Doing away with ‘trusted’ third parties
- Trading performance for security
- Eth trades efficiency for transparency
- Completely neutral, completely transparent, visible, treats everyone equally according to what the rules are.
- Ethereum’s limitations are latency and privacy
- zero-knowledge proof (extra cryptographic math) could provide privacy and security at the same time
- zero-knowledge proofs is a way of proving something about a piece of information without revealing that piece of information.
- Ethereum does provide this very high level of decentralization and high level of verifiability, but `at the expense of scaling`.

If you just use a blockchain, you lose a lot of privacy. If you use a blockchain plus zero-knowledge proofs and other kinds of cryptography, you can often get back a lot of privacy.

There is this mathematical castle in the sky verifying the proofs.

Zcash is a blockchain that is built around zero-knowledge proofs where all the transactions, recipients and senders can be anonymous. Truly “moon math,” as they say.

## The Future of Blockchain Technology

Can Eth provide a high level of decentralization and a high level of scaling at the same time?
What are the limits of blockchain scalability and privacy?
Where do we end up?
Do we end up with every transaction we want to have private is private, or do you think a lot of them stay public?
Do you think that we’re using blockchains for almost all cloud computing, or is it still limited into the financial and high-value domain?

There are scaling techniques.
roll-ups and sharding are technologies that allow you to use blockchains in a more clever way, where you still have a lot of very redundant computation happening but it’s much more efficient.

In a blockchain, you have 100,000 computers. You send your transaction. All 100,000 computers verify it.

Sharding is: Send your transaction. The system randomly chooses 1,000 computers out of 100,000 computers. Those 1,000 computers verify it, and the transaction gets accepted. Instead of all 100,000 computers verifying, there’s only 1,000 computers verifying.

Sharding leads to more centralization

One of the weaknesses of sharding is that it is more technically complicated. You have to actually do the work to figure out what exactly are the rules by which these transactions get split apart between the nodes, how they make them all talk to each other, and how you do this distributed verification.

`Verifiability at the expense of scaling`

- `The weakness of this approach—and the reason why Ethereum is not taking this approach—is that it leads to more centralization.`
- The number of people who can actually verify what’s going on decreases.
- It still gets much more decentralized than Facebook,
- but it becomes much less decentralized than it could be.

If you want something that’s `high assurance`, then you do want to create the decentralization up close—as in the maximum—and the current Ethereum does provide that.

`Can you provide this high level of decentralization and high level of verifiability and still have a higher level of scaling at the same time?`

## Decentralization

How much decentralization is the right amount?

It’s hard to end up in crypto without believing that decentralization matters to some degree.

The larger the number of users that are verifying by default, the more secure our blockchain is.
