---
title: DuckDB
emoji: 🛢️
tags:
  - duckdb
  - sql
  - database
link: https://duckdb.org/docs/
created: 2024-03-13T16:33:32.000Z
modified: 2024-04-13T16:33:32.000Z
---

DuckDB is a high-performance analytical database system. It is designed to be fast, reliable, portable, and easy to use. DuckDB provides a rich SQL dialect, with support far beyond basic SQL. DuckDB supports arbitrary and nested correlated subqueries, window functions, collations, complex types (arrays, structs), and more.

- [Why DuckDB](#why-duckdb)
- [Usages](#usages)
  - [Parquet - A Column-Oriented Data File Format](#parquet---a-column-oriented-data-file-format)
  - [Geospatial](#geospatial)
    - [Turn a row into a geojson object](#turn-a-row-into-a-geojson-object)
    - [To get the centroid](#to-get-the-centroid)
- [Resources](#resources)
- [Tools](#tools)

## Why DuckDB

- simple
- portable
- fast
- feature-rich
- extensible
- free

## Usages

```sql
duckdb /path/to/your/database.duckdb
```

### [Parquet - A Column-Oriented Data File Format](https://parquet.apache.org/)

Apache Parquet is an open-source data file format specifically designed for efficient data storage and retrieval, particularly optimized for handling complex data in bulk.

```sql
CREATE TABLE test AS SELECT * FROM read_parquet('test.parquet');
```

```ts
// load local parquet files into memory
const loadData = async (name: string | number) => {
  const url = `data/${name}.parquet`;
  const res = await fetch(url);
  await db.registerFileBuffer(
    `data_${name}.parquet`,
    new Uint8Array(await res.arrayBuffer())
  );
};

console.time("load data");
// Parquet demo data listhttps://github.com/duckdb/duckdb-data/releases/tag/v1.0
await Promise.all([4, 5, 6].map(loadData));
console.timeEnd("load data");

const result = await conn.query(`
    SELECT
        COUNT(*) as count
    FROM
        parquet_scan('data_*.parquet')`);
console.timeEnd("count");
console.log("count: ", result.toArray()[0].count);
```

### Geospatial

#### Turn a row into a geojson object

```sql
-- install the spatial extension
INSTALL spatial;LOAD spatial;

CREATE TABLE locations (
    id INTEGER PRIMARY KEY,
    name VARCHAR,
    longitude DOUBLE,
    latitude DOUBLE
)

INSERT INTO locations (id, name, longitude, latitude) VALUES
    (1, 'Location A', 40.7128, -74.0060),
    (2, 'Location B', 34.0522, -118.2437),
    (3, 'Location C', 51.5074, -0.1278);

-- spatial extension way
SELECT
  json_object(
    'type', 'Feature',
    'properties', json_object('name', name),
    'geometry', ST_AsGeoJSON(ST_Point(longitude, latitude))::JSON
    ) AS geojson
FROM locations

-- non spatial extension way
SELECT
  json_object(
      'type', 'Feature',
      'geometry', json_object(
          'type', 'Point',
          'coordinates', [longitude, latitude]
      ),
      'properties', json_object('name', name)
  ) AS geojson
FROM locations
```

#### To get the centroid

```sql
CREATE TABLE geojson_data AS SELECT ST_GeomFromGeoJSON('{"type":"Polygon","coordinates":[[[0,0],[10,0],[10,10],[0,10],[0,0]]]}') AS geom;

SELECT ST_AsGeoJSON(ST_Centroid(geom)) AS centroid_geojson FROM geojson_data;

-- Get the longitude and latitude
SELECT
  ST_X(ST_Centroid(geom)) AS longitude,
  ST_Y(ST_Centroid(geom)) AS latitude
FROM geojson_data;
```

## Resources

- [serverless-duckdb](https://github.com/tobilg/serverless-duckdb): An example of how to run DuckDB on AWS Lambda & API Gateway.

## Tools

- [VS Code Parquet Explorer](https://marketplace.visualstudio.com/items?itemName=AdamViola.parquet-explorer)
- [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools)
- [DuckDB Driver for SQLTools](https://marketplace.visualstudio.com/items?itemName=Evidence.sqltools-duckdb-driver)
- [duckdb-nodejs-layer](https://github.com/tobilg/duckdb-nodejs-layer):Packaging DuckDB for usage in AWS Lambda functions with Node.js, and publishing as public Lambda layers.
- [DB Pilot](https://www.dbpilot.io/)
