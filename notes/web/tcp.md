---
title: What every developer should know about TCP
emoji: 📝
tags:
  - web
  - programming
link: https://robertovitillo.com/what-every-developer-should-know-about-tcp/
created: 2021-05-17T19:54:36.000Z
modified: 2021-05-17T19:54:36.000Z
---

The Transmission Control Protocol is one of the main protocols of the Internet protocol suite.

## Handshake

Before a client can start sending data to a server, it needs to perform a handshake for TCP and another one for TLS.

TCP uses a three-way handshake to create a new connection.

- The sender picks a randomly generated sequence number “x” and sends a SYN packet to the receiver.
- The receiver increments “x,” chooses a randomly generated sequence number “y” and sends back a SYN/ACK packet.
- The sender increments both sequence numbers and replies with an ACK packet and the first bytes of application data.

![](https://robertovitillo.com/static/de69ba6c5c24a0c28ae2dc80f93d965f/fcda8/handshake.png)

## Flow Control

Flow control is a backoff mechanism implemented to prevent the sender from overwhelming the receiver.

The receiver stores incoming TCP packets waiting to be processed by the application into a receive buffer.

![](https://robertovitillo.com/static/485da12cb0fc5b9a01ed254f010357dd/fcda8/rcwnd.png)
