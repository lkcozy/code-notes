---
title: OGC API - Environmental Data Retrieval Standard
emoji: 🌍
tags:
  - edr
  - ogc
  - gis
  - iot
link: "https://docs.opengeospatial.org/DRAFTS/19-086.html"
created: 2021-03-03T16:47:35.000Z
modified: 2021-03-04T20:14:56.000Z
---

## Introduction

The Environmental Data Retrieval (EDR) Application Programming Interface (API) provides a family of lightweight query interfaces to access Environmental Data resources by requesting data at a Position, within an Area or along a Trajectory. An Environmental Data resource is a collection of spatiotemporal data that can be sampled using the EDR query pattern geometries. These patterns are described in the Requirement Class Core section.

The EDR API uses current web technologies and practices to enable end-users – or anyone with web development experience – to easily identify and retrieve a subset of data from ‘big data’ stores. The idea is to save those users interested in environmental (or other ‘big’) data from having to transfer and deal with datasets that inevitably contain data concerning areas or time periods that are irrelevant to their interests. Plus, as an API, it does this using an understood and established mode of interaction that comes with a shallow learning curve.

EDR API query patterns, such as Position, Area, Cube, Trajectory or Corridor, can be thought of as discrete sampling geometries, conceptually consistent with the feature of interest in the Sensor Observation Service (SOS).
