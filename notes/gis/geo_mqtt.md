---
title: GeoMQTT
emoji: 🌍
tags:
  - gis
  - sta
  - mqtt
  - web
link: http://www.geomqtt.org/
created: 2021-06-02T10:58:54.000Z
modified: 2021-06-02T10:58:54.000Z
---

![](http://www.geomqtt.org/images/geomqtt_architecture.png)

A publish-subscribe protocol for the geospatial IoT.

- MQTT protocol only supports topic filter
- GeoMQTT protocol extends the MQTT protocol by adding the spatial filter and temporal filter, which partially moves filter processing from the client side to the server side.
- Besides the spatial and temporal filter, we could also add other customized properties (e.g., speed) as filter.
