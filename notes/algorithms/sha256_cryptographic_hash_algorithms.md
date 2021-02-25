---
title: SHA-256 Cryptographic Hash Algorithm
emoji: 📝
tags:
  - crypto
  - hash
  - algorithm
  - blockchain
link: https://movable-type.co.uk/scripts/sha256.html
---

![](https://waytomine.com/wp-content/uploads/2018/12/Sha-2561.jpg)

- SHA-256 is a very important part of Bitcoin network and it `ensures` both `mining process` and `security of the network`.
- Producing the information about the previous block requires its header to pass through the SHA-256 algorithm `two times`, which is called double-SHA-256. This is how the formula looks like
  > Previous Block Hash = SHA-256(SHA-256(Block Header))
- A `cryptographic hash` (`digest`) is a kind of `signature` for a text or a data file.
- A hash is not `encryption` because it cannot be decrypted back to the original text
- A `one-way cryptographic function`
- A `fixed size` for any size of source text
- Used to compared `hashed` versions of texts
  - hash tables
  - integrity verification
  - challenge handshake authentication: avoids transmissing passwords in clear
  - digital signatures

SHA-256 generates an almost-unique 256-bit(32-byte) signature for a text.

```js
sha256(
  "abc"
) = "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad";
```
