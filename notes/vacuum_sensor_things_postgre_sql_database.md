---
title: VACUUM PostgreSQL Database
emoji: 📝
tags:
  - postgresql
  - sensorthings
---

## Solution

After running the STA server for several months, the EC2 may have enough disk space due to bloated database tables. You can use PostgreSQL `VACUUM` command to return space to the OS.

Here is the step by step process:

1. Login to the STA EC2 Instance
2. Check the disk usage

```bash
df -h
```

3. Login to the PostgreSQL Database

```bash
sudo su postgres
psql -d sensorthings
```

4. Check the last time your tables were vacuumed, analyzed, live and dead tup

```SQL
SELECT relname, n_live_tup, n_dead_tup, last_vacuum, last_autovacuum
FROM pg_stat_all_tables
ORDER BY n_dead_tup
    /(n_live_tup
        * current_setting('autovacuum_vacuum_scale_factor')::float8
        + current_setting('autovacuum_vacuum_threshold')::float8)
     DESC
LIMIT 12;

Results:
       relname       | n_live_tup | n_dead_tup |          last_vacuum
---------------------+------------+------------+-------------------------------
 pg_class            |        367 |         75 | 2018-09-05 22:28:22.941349+00
 pg_statistic        |        499 |         58 | 2018-09-05 22:11:16.729493+00
 pg_index            |        150 |         23 | 2018-09-05 22:28:22.95605+00
 pg_toast_2619       |         32 |         16 | 2018-09-05 22:11:16.730219+00
 pg_attribute        |       2734 |        128 | 2018-09-05 22:28:22.874761+00
 pg_type             |        411 |         27 | 2018-09-05 22:11:16.829871+00
 location            |       2660 |         55 | 2018-09-05 22:11:16.73436+00
 pg_depend           |       9388 |        177 | 2018-09-05 22:28:23.072771+00
 data_stream         |       2660 |         45 | 2018-09-05 22:28:22.737992+00
 observation         |   56042655 |     172199 | 2018-09-13 21:20:39.68152+00
 feature_of_interest |       2350 |          6 | 2018-09-05 22:28:22.778667+00
(11 rows)
```

If your bloated table does not show up here, n_dead_tup is zero and last_autovacuum is NULL, you might have [a problem with the statistics collector](https://www.cybertec-postgresql.com/en/stale-statistics-cause-table-bloat/).

If the bloated table is right there on top, but last_autovacuum is NULL, you might need to configure autovacuum to be more aggressive so that it gets done with the table.

5. Vacuum the table

The `observation` table usually is the biggest table in the database. It has the largest dead tuples as well.

**BE CAREFUL.** `VACUUM FULL` is only needed when you have a table that is mostly dead rows - i.e after unnecessary historical data has been deleted by the cron task. It should not be used for table optimization or periodic maintenance, as it's generally counterproductive.

- Plain `VACUUM`: Deletes dead tuples and frees up space for re-use

```SQL
VACUUM observation;
```

- `Full VACUUM`: Locks the database table, and reclaims more space than a plain but doesn't delete dead tuples

```SQL
VACUUM FULL observation;
```

> **Notice**: `VACUUM FULL` is much slower than a normal `VACUUM`, so the table may be unavailable for a while.
> You might need extra volume to execute `VACUUM FULL` command. Because it requires extra disk space for the new copy of the table until the operation completes. To do that:

- Login to your AWS Web console
- Go to EC2
- Select the instance that you want to extend
- Go to the mounted boot volume
- Click Modify Volume
- Change the size field to whatever value you need
- Click the Modify button to apply the changes
- Finally, restart the EC2 instance that links to the EBS volume.

> **Notice**:The size of a volume can only be **increased**, not **decreased**.

6. Set up autovacuum

To prevent our tables from continually getting messy in the future and having to manually `VACUUM` and `ANALYZE`, you can make the default auto-vacuum settings stricter. `Postgres` runs a daemon to regularly vacuum and analyze itself.

Tables are auto-vacuumed when 20% of the rows plus 50 rows are inserted, updated or deleted, and auto-analyzed similarly at 10%, and 50-row thresholds. These settings work fine for smaller tables, but as a table grows to have millions of rows, there can be tens of thousands of inserts or updates before the table is vacuumed and analyzed.

Below is an example which will `VACUUM` and `ANALYZE` after 5,000 inserts, updates, or deletes.

```SQL
ALTER TABLE observation SET (autovacuum_vacuum_scale_factor = 0.0);
ALTER TABLE observation SET (autovacuum_vacuum_threshold = 5000);
ALTER TABLE observation SET (autovacuum_analyze_scale_factor = 0.0);
ALTER TABLE observation SET (autovacuum_analyze_threshold = 5000);
```

The threshold to `auto-vacuum` is calculated by:

```
vacuum threshold = autovacuum_vacuum_threshold + autovacuum_vacuum_scale_factor * number of rows in table
```

Similarly, the threshold to auto-analyze is calculated by:

```
analyze threshold = autovacuum_analyze_threshold + autovacuum_analyze_scale_factor * number of rows in table
```

However, autovacuum sometimes doesn't free the dead tuples.
You can verify the problem by running `VACUUM(VERBOSE)`

```SQL
VACUUM (VERBOSE) observation;
```

## Why we need VACUUM

When you perform `UPDATE` and `DELETE` operations on a table in Postgres, the database has to keep around the old row data for concurrently running queries and transactions, due to its MVCC model. Once all concurrent transactions that have seen these old rows have finished, they effectively become dead rows which will need to be removed.

**VACUUM** is the process by which PostgreSQL cleans up these dead rows, and turns the space they have occupied into usable space again, to be used for future writes.

A more detailed description can be found in the [PostgreSQL documentation](https://www.postgresql.org/docs/10/static/routine-vacuuming.html).

## Which tables have VACUUM running?

The easiest thing you can check on a running PostgreSQL system is which VACUUM operations are running right now. In all Postgres versions this information shows up in the `pg_stat_activity` view, look for query values that start with "autovacuum: ", or which contain the word "VACUUM":

```SQL
SELECT pid, query FROM pg_stat_activity WHERE query LIKE 'autovacuum: %';
```

## VACUUM metrics to monitor

In order to ensure that VACUUMs are running smoothly across your databases, you should monitor:

- [dead rows](https://www.datadoghq.com/blog/postgresql-vacuum-monitoring/#dead-rows)
- [table disk usage](https://www.datadoghq.com/blog/postgresql-vacuum-monitoring/#table-disk-usage)
- [the last time a VACUUM or AUTOVACUUM ran](https://www.datadoghq.com/blog/postgresql-vacuum-monitoring/#last-time-autovacuum-ran)
- [manual/nightly VACUUM events](https://www.datadoghq.com/blog/postgresql-vacuum-monitoring/#correlating-vacuums-with-metrics)

## Why won’t VACUUM remove the dead rows?

VACUUM can only remove those row versions (also known as “tuples”) that are not needed any more. A tuple is not needed if the transaction ID of the deleting transaction (as stored in the xmax system column) is older than the oldest transaction still active in the PostgreSQL database (or the whole cluster for shared tables).

This value is called the `xmin horizon`.

There are three things that can hold back this xmin horizon in a PostgreSQL cluster:

### 1.Long-running transactions:

You can find those and their xmin value with the following query:

```SQL
SELECT pid, datname, usename, state, backend_xmin
FROM pg_stat_activity
WHERE backend_xmin IS NOT NULL
ORDER BY age(backend_xmin) DESC;
```

You can use the [pg_terminate_backend()](https://www.postgresql.org/docs/current/static/functions-admin.html#FUNCTIONS-ADMIN-SIGNAL) function to terminate the database session that is blocking your VACUUM.

### 2.Abandoned replication slots:

A replication slot is a data structure that keeps the PostgreSQL server from discarding information that is still needed by a standby server to catch up with the primary.

If replication is delayed or the standby server is down, the replication slot will prevent VACUUM from deleting old rows.

You can find all replication slots and their xmin value with this query:

```SQL
SELECT slot_name, slot_type, database, xmin
FROM pg_replication_slots
ORDER BY age(xmin) DESC;
```

Use the [pg_drop_replication_slot()](https://www.postgresql.org/docs/current/static/functions-admin.html#FUNCTIONS-REPLICATION) function to drop replication slots that are no longer needed.

> **Note**: This can only happen with physical replication if hot_standby_feedback = on. For logical replication there is a similar hazard, but only system catalogs are affected. Examine the column catalog_xmin in that case.

### 3.Orphaned prepared transactions:

During [two-phase commit](https://en.wikipedia.org/wiki/Two-phase_commit_protocol), a distributed transaction is first prepared with the [PREPARE](https://www.postgresql.org/docs/current/static/sql-prepare-transaction.html) statement and then committed with the [COMMIT PREPARED](https://www.postgresql.org/docs/current/static/sql-commit-prepared.html) statement.

Once a transaction has been prepared, it is kept “hanging around” until it is committed or aborted. It even has to survive a server restart! Normally, transactions don’t remain in the prepared state for long, but sometimes things go wrong and a prepared transaction has to be removed manually by an administrator.

You can find all prepared transactions and their xmin value with the following query:

```SQL
SELECT gid, prepared, owner, database, transaction AS xmin
FROM pg_prepared_xacts
ORDER BY age(transaction) DESC;
```

Use the [ROLLBACK PREPARED SQL](https://www.postgresql.org/docs/current/static/sql-rollback-prepared.html) statement to remove prepared transactions.

## ANALYZE

`ANALYZE` gathers statistics for the query planner to create the most efficient query execution paths. Per PostgreSQL documentation, accurate statistics will help the planner to choose the most appropriate query plan, and thereby improve the speed of query processing.

**Example**
In the example below, [tablename] is optional. Without a table specified, ANALYZE will be run on available tables in the current schema that the user has access to.

```SQL
ANALYZE VERBOSE [tablename]
```

## REINDEX

The REINDEX command rebuilds one or more indices, replacing the previous version of the index. REINDEX can be used in many scenarios, e.g., an index has become "bloated".

**Examples**
Any of these can be forced by adding the keyword FORCE after the command

1. Recreate a single index, myindex:

```SQL
REINDEX INDEX myindex
```

1. Recreate all indices in a table, observation:

```SQL
REINDEX TABLE observation;
```

1. Recreate all indices in sensorthings:

```SQL
REINDEX DATABASE sensorthings;
```

## Some useful PostgreSQL commands

### Show tables

```SQL
\dt

Results:
               List of relations
Schema |        Name         | Type  |  Owner
--------+---------------------+-------+----------
public | data_stream         | table | postgres
public | feature_of_interest | table | postgres
public | historical_location | table | postgres
public | location            | table | postgres
public | observation         | table | postgres
public | observation_archive | table | postgres
public | observed_property   | table | postgres
public | sensor              | table | postgres
public | spatial_ref_sys     | table | postgres
public | thing               | table | postgres
public | thing_location      | table | postgres
(11 rows)
```

4. Check database/table disk usage

### Table disk usage

Tracking the amount of disk space used by each table is important because it enables you to gauge expected changes in query performance over time—but it can also help you detect potential vacuuming-related issues.

The following query shows you the table that is using the most disk space in your database:

- Check database disk usage

```SQL
SELECT pg_size_pretty(pg_database_size('sensorthings'));
```

- Check each table disk usage

```SQL
SELECT
       relname AS "table_name",
       pg_size_pretty(pg_table_size(C.oid)) AS "table_size"
FROM
       pg_class C
LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
WHERE nspname NOT IN ('pg_catalog', 'information_schema') AND nspname !~ '^pg_toast' AND relkind IN ('r')
ORDER BY pg_table_size(C.oid)
DESC LIMIT 11;

Results:
     table_name      | table_size
---------------------+------------
 observation         | 4156 MB
 data_stream         | 8056 kB
 spatial_ref_sys     | 3984 kB
 feature_of_interest | 2248 kB
 location            | 1864 kB
 thing               | 1672 kB
 historical_location | 168 kB
 thing_location      | 120 kB
 sensor              | 16 kB
 observed_property   | 16 kB
 observation_archive | 8192 bytes
```

### Check dead rows

```SQL
SELECT relname, n_dead_tup
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;

Results:
       relname       | n_dead_tup
---------------------+------------
 observation         |     176199
 location            |         55
 data_stream         |         45
 feature_of_interest |          6
 sensor              |          0
 observation_archive |          0
 thing               |          0
 thing_location      |          0
 observed_property   |          0
 spatial_ref_sys     |          0
 historical_location |          0
```
