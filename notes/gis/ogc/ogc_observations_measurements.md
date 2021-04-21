---
title: OGC Observations and Measurements-An encoding for observation services
emoji: 📝
tags:
  - ogc
  - gis
  - sta
link: https://www.ogc.org/Standards/Om
created: 2021-04-21T10:29:56.000Z
modified: 2021-04-21T10:29:56.000Z
---

This encoding is an essential dependency for the OGC Sensor Observation Service (SOS) Interface Standard. More specifically, this standard defines XML/JSON `schemas for observations, and for features involved in sampling when making observations`.

![](https://image.slidesharecdn.com/omoverviewgeospatial-forum-151104213435-lva1-app6892/95/a-standard-for-geospatial-observations-and-measurements-29-638.jpg?cb=1446673008)

- User-centric
- Complemented with OGC SensorML

## Observation

An Observation is the act of measuring or otherwise determining the value of a property.

| Property       | Required  | Type                                                                      |
| -------------- | --------- | ------------------------------------------------------------------------- |
| phenomenonTime | mandatory | Time(Interval) String (ISO 8601)                                          |
| result         | mandatory | Any (depends on the observationType defined in the associated Datastream) |
| resultTime     | mandatory | Time(Interval) String (ISO 8601)                                          |
| resultQuality  | optional  | DQ_Element                                                                |
| validTime      | optional  | Time Interval String (ISO 8601)                                           |
| parameters     | optional  | JSON Object                                                               |

![](https://52north.github.io/sensor-web-tutorial/images/om1.png)
