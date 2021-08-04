---
title: Well-known Text Representation of geometry
emoji: 🌍
tags:
  - gis
  - wkt
link: "http://www.gaia-gis.it/gaia-sins/spatialite-cookbook/html/wkt-wkb.html"
created: 2020-12-04T02:15:45.000Z
modified: 2021-05-05T22:03:31.000Z
---

Geometry is a very complex data type: accordingly to this, OGC-SFS defines two alternative standard notations allowing to represent Geometry values:

- the **WKT** (Well Known Text) notation is a text markup language for representing vector geometry objects.
- the **WKB** (Well Known Binary) notation on the other side is more intended for precise and accurate import/export/exchange of Geometries between different platforms.

| Type       | Examples                                      |
| ---------- | --------------------------------------------- |
| Point      | POINT (30 10)                                 |
| LineString | LINESTRING (30 10, 10 30, 40 40)              |
| Polygon    | POLYGON ((30 10, 40 40, 20 40, 10 20, 30 10)) |

## Tools

- [wellknown](https://github.com/mapbox/wellknown): Parse & stringify [Well-Known Text](http://en.wikipedia.org/wiki/Well-known_text) into [GeoJSON]
