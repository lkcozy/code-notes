---
title: AWS IoT Core
emoji: 📝
tags:
   - aws
   - iot
link: https://dev.to/techmagic/aws-iot-platform-for-the-internet-of-things-benefits-examples-5fb0
created: 2021-03-16T15:35:16.000Z
modified: 2021-03-16T15:35:16.000Z
---
AWS IoT core  could provide the `scalability, agility, security and high availability`.


## [How to Bridge Mosquitto MQTT Broker to AWS IoT](https://aws.amazon.com/blogs/iot/how-to-bridge-mosquitto-mqtt-broker-to-aws-iot/)

### Why Bridge your MQTT Broker to AWS IoT?

If you have legacy IoT deployments, you might already have devices connected to an MQTT broker such as Mosquitto. In that scenario, your MQTT broker can be very close to where your sensors are deployed (local MQTT broker) or in a remote location like the Cloud.


![](https://d2908q01vomqb2.cloudfront.net/f6e1126cedebf23e1463aee73f9df08783640400/2020/05/04/Schema-How-to-bridge-Mosquitto-to-AWS-IoT-Core.png)

```sh
The Mosquitto Pub CLI
$> mosquitto_pub --cert thing-0.pem --key thing-0.prv --cafile aws-iot-rootCA.crt -h XXXXXXXXYYYYY.iot.us-west-2.amazonaws.com -p 8883 -t 'test/thing' -m "Hello from Mosquitto"

The Mosquitto Sub CLI
$ mosquitto_sub --cert thing-0.pem --key thing-0.prv --cafile aws-iot-rootCA.crt -h XXXXXXXXYYYYY.iot.us-west-2.amazonaws.com -p 8883 -t 'test/+'
```