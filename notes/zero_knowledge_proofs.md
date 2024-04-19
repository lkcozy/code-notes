---
title: Zero-Knowledge Proofs - Indirect proofs to prove you known a secret
emoji: ₿
tags:
  - blockchain
  - cryptography
link: https://blockonomi.com/zero-knowledge-proofs/
created: 2021-05-17T16:12:53.000Z
modified: 2021-05-17T16:12:53.000Z
---

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*GNlZGiQbh3nqcBur0cVTUQ.png&f=1&nofb=1)

- A zero-knowledge-proof is a `method` used in cryptography to `prove that something is known without revealing the known information directly`.
- Are indirect proofs allowing you to prove you know a secret without ever revealing the secret to anyone else.
- You prove only that you're telling the truth.
- It essentially allows private information to be kept in an exchange.
- Zero knowledge proofs are a type of cryptography that keeps the details of a hidden transaction

## Concept: provers and verifiers

In zero-knowledge proofs, the basic roles are the `prover` and `verifier`.

- The prover must prove they know the secret.
- The verifier must be able to verify the prover is telling the truth.
- It works because the verifier asks the prover to do things that can only be done if the prover definitely knows the secret.
- If the prover is guessing, he or she will eventually be proven wrong by the verifier’s tests.
- If the secret is known, then the prover will pass the verifiers test every time without a problem.
- It's like when a bank or institution asks you for letters of a known secret word to verify your identity. Y
- ou're not telling the bank what's in your bank account, you're merely telling them that you know the sequence of a given word.
