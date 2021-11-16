---
title: IndexedDB
emoji: 📝
tags:
  - note
  - web
  - database
link: https://developers.google.com/web/ilt/pwa/working-with-indexeddb
created: 2021-11-15T17:12:28.000Z
modified: 2021-11-15T17:12:28.000Z
---

IndexedDB is a large-scale, NoSQL storage system. It lets you store just about anything in the user's browser. In addition to the usual search, get, and put actions, IndexedDB also supports transactions.

Each IndexedDB database is unique to an origin (typically, this is the site domain or subdomain), meaning it cannot access or be accessed by any other origin.

## Tools

- [Dexie.js](https://github.com/dfahlander/Dexie.js): A wrapper library for indexedDB. Dexie provides a neat database API with a well thought-through API design, robust error handling, extendability, change tracking awareness and extended KeyRange support (case insensitive search, set matches and OR operations).

```js
import url from "url";
import _ from "lodash";
import Dexie from "dexie";
import keymirror from "keymirror";

export const PROPERTIES_KEY = "properties";
export const PROPERTY_IDENTITY = `${PROPERTIES_KEY}.${NAME_PROPERTY_KEY}`;
export const PROPERTY_TIME = `${PROPERTIES_KEY}.${TIME_PROPERTY_KEY}`;
export const INDEXEDDB_NAMESPACE =
  process.env.REACT_APP_INDEXED_DB_NAMESPACE || "ups";

export const TABLE_NAMES = keymirror({
  geojsonRows: null,
  lastKnownLocations: null,
  specification: null,
  metadata: null,
});

export const getDexieSchema = () => ({
  // store all incoming data of all features
  [TABLE_NAMES.geojsonRows]: `[${PROPERTY_IDENTITY}+${PROPERTY_TIME}], ${PROPERTY_IDENTITY}, ${PROPERTY_TIME}`,
  // store most the recent data of each feature
  [TABLE_NAMES.lastKnownLocations]: `${PROPERTY_IDENTITY}, ${PROPERTY_TIME}`,
  // store the specification sent to the UP
  [TABLE_NAMES.specification]: "++id",
  // store the dataset metadata object
  [TABLE_NAMES.metadata]: "++id",
});

/**
 * Get the database object by name
 * @param {String} dbIdentifier database name
 *
 * @return {Object} Dexie instance
 */
export const getDbByName = (dbIdentifier) => {
  const db = new Dexie(dbIdentifier);
  const schema = getDexieSchema();
  // declare tables
  db.version(1).stores(schema);
  return db;
};

/* eslint-disable import/no-webpack-loader-syntax */
const getTable = (db, tableName) => {
  return db ? db[tableName] : undefined;
};

export const clearGeoJsonRows = async (db) => {
  const table = getTable(db, TABLE_NAMES.geojsonRows);
  if (table) {
    await table.clear();
  }
};

export const clearFeatureLastData = async (db) => {
  const table = getTable(db, TABLE_NAMES.lastKnownLocations);
  if (table) {
    await table.clear();
  }
};

/**
 * Get database name
 * @param {String} datasetEndpoint dataset service URL
 * @param {String} datasetServiceIdentifier dataset service identifier
 *
 * @return {String} database identifier
 */
export const getDbIdentifier = (datasetEndpoint, datasetServiceIdentifier) => {
  const { hostname } = url.parse(datasetEndpoint);
  return `${INDEXEDDB_NAMESPACE}_${hostname}_${datasetServiceIdentifier}`;
};

/**
 * Declare database and associated tables
 * @prop {String} dbIdentifier database name
 * @prop {Object} metadata dataset metadata
 * @prop {Object} specification dataset specification(part of dataset metadata)
 * @prop {Boolean} [resetGeoJsonRows=false] whether to clear all feature data
 *
 * @return {Object} Dexie instance
 */
export const createDb = async ({
  dbIdentifier,
  specification,
  metadata,
  resetGeoJsonRows = false,
}) => {
  // declare database
  const db = getDbByName(dbIdentifier);
  await db.specification.add(JSON.parse(JSON.stringify(specification)));
  await db.metadata.add(JSON.parse(JSON.stringify(metadata)));

  if (resetGeoJsonRows) {
    await clearGeoJsonRows(db);
  }
  // clear lastKnownLocations table before inserting new data
  await clearFeatureLastData(db);

  return db;
};

/**
 * Get data from the lastKnownLocations table
 * @param {Object} db dexie instance
 *
 * @return {Array} geojson data
 */
export const getFeatureLastData = (db) => {
  const table = getTable(db, TABLE_NAMES.lastKnownLocations);
  return table ? table.toArray() : [];
};

/**
 * Delete all data from the given database
 * @param {String} dbIdentifier database name
 */
export const deleteDatabaseByName = async (dbIdentifier) => {
  const db = getDbByName(dbIdentifier);
  await db.delete();
};

/**
 * Get data from the geojsonRows table within the specific datetime range
 * @param {String} dbIdentifier database Identifier
 * @param {Object} datetimeRange start and end datetime
 *
 * @return {Collection|undefined} a collection of database objects
 */
export const getFeatureDataByTimeRange = (dbIdentifier, datetimeRange = {}) => {
  const db = getDbByName(dbIdentifier);
  const { start, end } = datetimeRange;
  const table = getTable(db, TABLE_NAMES.geojsonRows);
  if (!table) return undefined;

  return !start || !end
    ? table.toCollection()
    : table.where(PROPERTY_TIME).between(start, end);
};

/**
 * Get data from the geojsonRows table
 * @param {Object} dbIdentifier database instance
 * @param {String} identity property identity
 * @param {Object} datetimeRange start and end datetime
 *
`* @return {Array} geojson data
 */
export const getFeatureData = async (
  dbIdentifier,
  identity,
  datetimeRange = {}
) => {
  const db = getDbByName(dbIdentifier);
  db.open();
  const table = getTable(db, TABLE_NAMES.geojsonRows);
  if (!table) return [];

  let geojsonRows;
  if (_.isEmpty(datetimeRange)) {
    // get all data for a given primary key
    geojsonRows = await table
      .where(PROPERTY_IDENTITY)
      .equals(identity)
      .sortBy(PROPERTY_TIME);
  } else {
    // get data for a given primary key between two date times
    const { start, end } = datetimeRange;
    geojsonRows = await table
      .where([`${PROPERTY_IDENTITY}`, `${PROPERTY_TIME}`])
      .equals([identity, start], [identity, end])
      .sortBy(PROPERTY_TIME);
  }

  return geojsonRows;
};

/**
 * Delete all data from the given database
 * @param {String} dbIdentifier database Identifier
 * @param {Array} keys array of primary keys of the objects to delete
 */
export const deleteFeatureLastDataByKeys = async (dbIdentifier, keys) => {
  const db = getDbByName(dbIdentifier);
  const table = getTable(db, TABLE_NAMES.geojsonRows);
  if (table) {
    await table.bulkDelete(keys);
  }
};

/**
 * Delete all databases at current host.
 *
 * @return {Array} deleted database names
 */
export const deleteAllDatabaseAtCurrentHost = async () => {
  const names = await Dexie.getDatabaseNames();
  const result = await Promise.all(
    names.map(async (name) => {
      await deleteDatabaseByName(name);
      return name;
    })
  );
  return result;
};

/**
 * Get time range of the data in the given database
 * @param {String} dbIdentifier database name
 *
 * @return {Object} {startTime, endTime}
 */
export const getDataTimeRange = async (dbIdentifier) => {
  const db = getDbByName(dbIdentifier);
  const firstRow = await db.geojsonRows.orderBy(PROPERTY_TIME).first(1);
  const lastRow = await db.geojsonRows.orderBy(PROPERTY_TIME).last();
  if (!firstRow || !lastRow) return {};

  const start = getUtcDateTimeString(firstRow.properties.time);
  const end = getUtcDateTimeString(lastRow.properties.time);
  return { start, end };
};

/**
 * Add the data or replace existing data in the specified table
 * @param {Object} db dexie instance
 * @param {Object} table table name
 * @param {Array} data the objects to store
 */
export const bulkPutDbData = (db, table, data) => {
  return db[table].bulkPut(data);
};
```

```js
// libraries
import * as Comlink from "comlink";
import _ from "lodash";
import DexieBatch from "dexie-batch";
import { getFeatureDataByTimeRange } from "helpers/db";

const DEFAULT_BATCH_SIZE = 50000;

export const fetchCachedDbData = (dbIdentifier, onBatch, onError) => {
  const collection = getFeatureDataByTimeRange(dbIdentifier);
  if (!collection) return;

  const batchDriverPromise = collection.count().then((n) => {
    const batchSize =
      n < DEFAULT_BATCH_SIZE * 10 ? DEFAULT_BATCH_SIZE : DEFAULT_BATCH_SIZE * 2;
    return new DexieBatch({ batchSize, limit: n });
  });

  let hasCachedData = false;
  batchDriverPromise.then((batchDriver) =>
    batchDriver
      .eachBatch(collection, (geojsonRows) => {
        hasCachedData = hasCachedData || !_.isEmpty(geojsonRows);
        const loading = true;
        onBatch(loading, geojsonRows, hasCachedData);
      })
      .then(() => {
        const loading = false;
        const geojsonRows = [];
        onBatch(loading, geojsonRows, hasCachedData);
      })
      .catch(onError)
  );
};

Comlink.expose({ fetchCachedDbData });
```
