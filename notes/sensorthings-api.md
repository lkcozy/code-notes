---
title: OGC SensorThings API
emoji: 📝
tags:
  - SensorThings API
  - OGC
  - GIS
  - IoT
link: https://developers.sensorup.com/docs/
---

## Introduction

OGC SensorThings API provides an open and unified way to interconnect Internet of Things (IoT) devices over the Web as well as interfaces to interact with and analyze their observations. [Part 1:Sensing](https://docs.opengeospatial.org/is/15-078r6/15-078r6.html) was released in 2016 and allowed management and reception of observations or measurements made by IoT sensors. Part 2: Tasking Core provides a mechanism to tell the sensor/actuator what to do.

### Get all Datastreams

```
https://toronto-bike-snapshot.sensorup.com/v1.0/Datastreams?$count=false&$expand=Thing/Locations,ObservedProperty,Observations($top=2000),Observations/FeatureOfInterest&$top=1
```

### Get all observations of Datastreams named with the given name

```
http://edmonton-aq-sta.sensorup.com/v1.0/Datastreams?$expand=Thing,Sensor,ObservedProperty,Observations,Observations%2FFeatureOfInterest&$filter=substringof('PM2.5',name)
```

### Get all observations between the specific datetime of Datastreams named with the given name

```
http://edmonton-aq-sta.sensorup.com/v1.0/Datastreams?$expand=Thing,Sensor,ObservedProperty,Observations,Observations%2FFeatureOfInterest&$filter=substringof('PM2.5',name) and Observations/phenomenonTime ge 2017-01-01T00:00:00.000Z and Observations/phenomenonTime le 2018-03-01T00:00:00.000Z
```

### Get specific Datastream hourly data

```
http://edmonton-aq-sta.sensorup.com/v1.0/Datastreams(124139)/Observations?$aggregate=mean_hour:America/Edmonton
```
