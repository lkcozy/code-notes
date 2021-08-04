---
title: GIS Command Line Tools
emoji: 🌍
tags:
  - gis
  - cli
link: https://github.com/mapbox/geojsonio-cli
created: 2021-08-04T15:02:03.000Z
modified: 2021-08-04T15:02:03.000Z
---

Install all mentioned packages:

```sh
npm install -g geojsonio-cli wellknown csv2geojson geojsonify togeojson simplify-geojson reproject
```

## CLIs

- [simplify-geojson](https://github.com/mapbox/geojsonio-cli): Apply Ramer–Douglas–Peucker line simplification to GeoJSON features or feature collections in JS or on the CLI.
- [geojsonio-cli](https://github.com/mapbox/geojsonio-cli): Shoot files from your shell to geojson.io for lightning-fast visualization and editing.
- [wellknown](https://github.com/mapbox/wellknown): Parse & stringify [Well-Known Text](http://en.wikipedia.org/wiki/Well-known_text) into [GeoJSON](http://www.geojson.org/).
- [csv2geojson](https://github.com/mapbox/csv2geojson): Converts CSV and TSV files into GeoJSON data suitable for maps.
- [geojsonify](https://github.com/blackmad/geojsonify): Convert lines of geojson features into a geojson collection. Useful for using grep to manipulate geojson from ogr2ogr
- [togeojson](https://github.com/mapbox/togeojson): convert KML and GPX to GeoJSON, without the fuss
- [reproject](https://github.com/perliedman/reproject): Transforms GeoJSON from one projection / CRS (Coordinate Reference Systems) to another.

## Examples

- Simplify geojson

```sh
curl https://raw.github.com/maxogden/simplify-geojson/master/test-data/oakland-route.csv | \
  csv2geojson --lat "LATITUDE N/S" --lon "LONGITUDE E/W" --line true | \
  simplify-geojson -t 0.001 | \
  geojsonio
```

- Convert WKT file to a GeoJSON file.

```sh
echo "MultiPoint(0 0, 1 1, 3 3)" | wellknown > multipoint.geojson
```

- pipe wkt through wellknown into geojsonio to get magic:

```sh
echo "MultiPoint(0 0, 1 1, 3 3)" | wellknown | geojsonio
```

- pipe grep'ed geojson through geojsonify:

```sh
grep -h something *json | geojsonify | geojsonio
```

- convert kml or gpx to geojson and push it to geojson.io:

```sh
togeojson foo.kml | geojsonio
```

- copy the generated url instead of opening it in a browser (on OSX)

```sh
geojsonio foo.geojson --print | pbcopy
```
