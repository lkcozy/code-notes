---
title: Using Blockchain for Trustworthy Mobile Contract Tracing
emoji:  
tags:
  - research
  - blockchain
  - iot
  - security
link:
created: 2021-01-05T22:58:30.000Z
modified: 2021-04-01T22:58:30.000Z
---


## Key Insight

- a description of a blockchain based contract tracing mobile prototype for privacy preservation
- challenge: privacy concerns regarding using mobile contract tracing applications to mitigate COVID-19 pandemic bad effect
- methods:
  - use Blockchain technologies to address the privacy concerns
  - use uniquely generated IDs and Bluetooth Low Energy to identify proximate devices that are in close contact
  - use three AWS EC2 instances to host the blockchain
- results: preliminary results from the evaluation of the proposed system shows high accuracy for the determination of close contacts.

## Why it matters

- The world has been badly reeling from the devastation of the COVID-19 pandemic.
- Stakeholders have been trying everything possible to contain the spread of infection, manage the devastation, or employ other measures to bring the virus under control
- The authors aim to examine whether persons who have come into closeness with COVID-19 cases are duly notified to isolate or take precautions.
- Mobile Contact Tracing Apps (MCTA) have been proposed as a technological intervention to advise people who might have come into close contact with a COVID-19 infected person.

## How it works

- Users are in close proximity when their smartphones are discoverable within a Bluetooth range
- Since the authors could not simulate with as many as 50 smartphones, the authors introduced the SensorTag devices which communicate via Bluetooth and are detectable by smartphones within proximity
- Three workstations are deployed on Amazon EC2 to host the `Blockchain`, the `Provenance layer`, and the `HIS`

## Results

- In this research, a blockchain inspired contact tracing mobile architecture for COVID19 cases has been developed for privacy preservation.

## Context

In recent times, blockchain has become a ubiquitous technology in many industries such as finance, real estate, bitcoin, smart city projects, supply chain, production, and many more

The two common types are the Public Blockchain and the Private Blockchain.

- A public blockchain allows any node that has internet connection to access the blockchain by issuing either a write a read request. Some of the popular public blockchain available today are Bitcoins, Ethereum, Fac-
  tom, Blockstream, and so on.
- A private blockchain allows nodes to issue similar requests but these nodes must be predefined and authorized.

Chakraborty et al. [40] showed that the consolidation of technologies such as blockchain, Internet of Things (IoT), and Machine Learning can enhance the delivery of smart healthcare services. The authors established that blockchain technologies can be used for the storing, processing, and maintenance of patient data that is coming from wearable devices. `This is because blockchain can store data in a form of multiple transactions and supports access control`. This can enhance `anonymity` of patient identity as well as increasing trustworthiness in the medical data coming from the wearable device
