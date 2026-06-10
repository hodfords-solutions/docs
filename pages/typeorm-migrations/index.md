---
displayed_sidebar: docs
title: "@hodfords/typeorm-migrations"
---
<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Hodfords Logo" /></a>
</p>

<p align="center">
  A fluent, Laravel-style schema builder on top of <a href="https://typeorm.io" target="blank">TypeORM</a> migrations.
</p>

## Description

`@hodfords/typeorm-migrations` wraps TypeORM's `QueryRunner` and schema-builder classes in a small, readable API so migrations are easier to write and review. Instead of constructing `Table`, `TableColumn`, `TableIndex` and `TableForeignKey` objects by hand, you describe your schema with chainable methods:

```typescript
await this.create('User', (table) => {
    table.primaryUuid('id');
    table.string('email').index();
    table.integer('age').nullable();
    table.uuid('enterpriseId').index().foreign('Enterprise');
    table.baseTime();
});
```

It is designed for PostgreSQL but works with any database TypeORM supports (a few helpers such as `unsigned()` or `zerofill()` are driver-specific and noted as such below).

## Installation 🤖

```bash
npm install @hodfords/typeorm-migrations --save
```

`typeorm` is a peer dependency and must be installed in your project.

## Usage

Extend `BaseMigration` instead of implementing `MigrationInterface` directly. Implement `run()` (executed on `up`) and optionally `rollback()` (executed on `down`):

```typescript
import { BaseMigration } from '@hodfords/typeorm-migrations';
import { QueryRunner } from 'typeorm';

export class CreateUserTable1626749239046 extends BaseMigration {
    async run(queryRunner: QueryRunner): Promise<void> {
        await this.create('User', (table) => {
            table.primaryUuid('id');
            table.string('email').index();
            table.string('firstName').nullable();
            table.string('lastName').nullable();
            table.string('password').nullable();
            table.integer('role');
            table.string('language').length(10).default("'en'");
            table.timestamp('lastLoginAt').nullable();
            table.uuid('enterpriseId').nullable().index().foreign('Enterprise');
            table.createdAt().index();
            table.updatedAt();
            table.deletedAt();
        });
    }

    async rollback(queryRunner: QueryRunner): Promise<void> {
        await this.drop('User');
    }
}
```

### Updating an existing table

`update()` lets you add columns, drop columns and index existing columns in one place:

```typescript
export class UpdateUserTable1726749239046 extends BaseMigration {
    async run(queryRunner: QueryRunner): Promise<void> {
        await this.update('User', (table) => {
            table.string('phone').nullable();
            table.dropColumn('legacyColumn');
            table.addIndexAlreadyColumn('email');
        });
    }
}
```

## Table methods

Inside `create()` and `update()` callbacks you receive a `BaseTable`. Every column method returns a `BaseColumn`, so you can chain the [column modifiers](#column-modifiers) below.

### Primary keys

| Method | Description |
| --- | --- |
| `id(name?)` | Auto-incrementing `integer` primary key (default name `id`) |
| `increments(name)` | Auto-incrementing `integer` primary key |
| `smallIncrements(name)` | Auto-incrementing `smallint` primary key |
| `bigIncrements(name)` | Auto-incrementing `bigint` primary key |
| `primaryUuid(name?)` | `uuid` primary key with `uuid_generate_v4()` default |
| `primaryUuidV7(name?)` | `uuid` primary key with `uuidv7()` default (Postgres 18+) |

### Character types

| Method | Description |
| --- | --- |
| `string(name, length = 255)` | `character varying` |
| `varchar(name, length = 255)` | Alias of `string()` |
| `char(name, length)` | `char` |
| `text(name)` | `text` |
| `citext(name)` | `citext` (case-insensitive text) |

### Numeric types

| Method | Description |
| --- | --- |
| `integer(name)` | `integer` |
| `smallint(name)` | `smallint` |
| `bigint(name)` | `bigint` |
| `decimal(name, precision = 10, scale = 2)` | `decimal` |
| `numeric(name, precision = 10, scale = 2)` | `numeric` |
| `money(name)` | `money` |
| `real(name)` / `float4(name)` | `real` |
| `double(name)` / `doublePrecision(name)` / `float(name)` / `float8(name)` | `double precision` |

### Date and time types

| Method | Description |
| --- | --- |
| `timestamp(name)` | `timestamp` |
| `timestamptz(name)` | `timestamp with time zone` |
| `date(name)` | `date` |
| `time(name)` | `time` |
| `timetz(name)` | `time with time zone` |
| `interval(name)` | `interval` |
| `createdAt()` | `timestamp` named `createdAt`, defaults to `now()` |
| `updatedAt()` | `timestamp` named `updatedAt`, defaults to `now()` |
| `deletedAt()` | Nullable `timestamp` named `deletedAt` |
| `baseTime()` | Shortcut for `createdAt()` + `updatedAt()` |

### JSON, UUID and other types

| Method | Description |
| --- | --- |
| `uuid(name = 'id')` | `uuid` |
| `json(name)` / `jsonb(name)` | `json` / `jsonb` |
| `boolean(name)` | `boolean` |
| `enum(name, enumName, values)` | `enum` — accepts a string array or a `Record<string, string>` (e.g. a TS enum) |
| `bytea(name)` | `bytea` |
| `bit(name, length = 1)` / `varbit(name, length?)` | `bit` / `bit varying` |
| `xml(name)` | `xml` |
| `hstore(name)` | `hstore` |
| `tsvector(name)` / `tsquery(name)` | Full-text search types |
| `cube(name)` | `cube` |
| `ltree(name)` | `ltree` |
| `column(name, type, options?)` | Escape hatch — any type supported by your database driver |

### Array types

| Method | Description |
| --- | --- |
| `strings(name)` | `character varying[]` |
| `texts(name)` | `text[]` |
| `uuids(name)` | `uuid[]` |
| `integers(name)` | `integer[]` |
| `smallints(name)` / `bigints(name)` | `smallint[]` / `bigint[]` |
| `booleans(name)` | `boolean[]` |
| `jsonbs(name)` | `jsonb[]` |

Any column can also be made an array with the `.array()` modifier.

### Network and geometric types

| Method | Description |
| --- | --- |
| `inet(name)` / `cidr(name)` | IP address types |
| `macaddr(name)` / `macaddr8(name)` | MAC address types |
| `point(name)`, `line(name)`, `lseg(name)`, `box(name)`, `path(name)`, `polygon(name)`, `circle(name)` | Geometric types |
| `geography(name, spatialFeatureType, srid = 4326)` | PostGIS `geography` |
| `geometry(name, spatialFeatureType, srid = 0)` | PostGIS `geometry` |

### Range types

| Method | Description |
| --- | --- |
| `int4range(name)` / `int8range(name)` | Integer ranges |
| `numrange(name)` | Numeric range |
| `tsrange(name)` / `tstzrange(name)` | Timestamp ranges |
| `daterange(name)` | Date range |

### Other table helpers

| Method | Description |
| --- | --- |
| `dropColumn(name)` | Drop a column (only meaningful inside `update()`) |
| `addIndexAlreadyColumn(name)` | Create an index on a column that already exists |

Every column method also accepts a final `options` argument (`Partial<TableColumnOptions>`) that is merged into the underlying TypeORM column definition:

```typescript
table.string('email', 255, { isUnique: true, comment: 'login email' });
```

## Column modifiers

Methods on `BaseColumn` are chainable and cover all of TypeORM's `TableColumnOptions`:

| Modifier | Description |
| --- | --- |
| `nullable()` / `notNullable()` | Set `NULL` / `NOT NULL` |
| `unique()` | Add a unique constraint |
| `index()` | Create an index for this column |
| `primary(constraintName?)` | Mark as primary key |
| `default(value)` | Set the default value (e.g. `default("'en'")`) |
| `useCurrent()` | Default to `now()` |
| `length(length)` | Set the column length |
| `precision(precision, scale?)` / `scale(scale)` | Numeric precision and scale |
| `array()` | Store an array of the column type |
| `comment(text)` | Column comment |
| `collation(collation)` | Column collation |
| `charset(charset)` | Column character set |
| `enum(values, enumName?)` | Enum values and the exact enum type name |
| `autoIncrement()` | Auto-increment generation |
| `generated(strategy?)` | Generation strategy: `'increment'`, `'uuid'`, `'rowid'` or `'identity'` |
| `generatedIdentity(value?)` | Identity column, `'ALWAYS'` or `'BY DEFAULT'` (Postgres 10+) |
| `asExpression(expression, type?)` | Generated (computed) column, `'STORED'` or `'VIRTUAL'` |
| `spatial(featureType, srid?)` | Spatial feature type and SRID |
| `width(width)` | Display width (MySQL only) |
| `unsigned()` / `zerofill()` | Numeric attributes (MySQL only) |
| `onUpdate(value)` | `ON UPDATE` trigger (MySQL only) |
| `foreign(table, column = 'id', onDelete = 'CASCADE', onUpdate = 'CASCADE', name?)` | Add a foreign key referencing another table |

Example:

```typescript
table.decimal('price', 12, 4).notNullable().default(0).comment('unit price');
table.uuid('ownerId').index().foreign('User', 'id', 'SET NULL');
table.string('fullName').asExpression('"firstName" || \' \' || "lastName"');
```

## Migration methods

`BaseMigration` exposes the full `QueryRunner` surface as small helpers. All of them can be called from `run()` and `rollback()`.

### Tables

| Method | Description |
| --- | --- |
| `create(tableName, callback)` | Create a table, its indexes and foreign keys |
| `update(tableName, callback)` | Add/drop columns and create indexes/foreign keys on an existing table |
| `drop(table)` | Drop a table |
| `dropIfExists(table)` | Drop a table only if it exists |
| `rename(oldTable, newTableName)` | Rename a table |
| `hasTable(tableName)` | Check whether a table exists |
| `getTable(tableName)` | Load the full `Table` definition |
| `clearTable(tableName)` | Truncate a table |
| `changeTableComment(table, comment?)` | Change the table comment |

### Columns

| Method | Description |
| --- | --- |
| `hasColumn(tableName, columnName)` | Check whether a column exists |
| `addColumn(table, column)` / `addColumns(table, columns)` | Add raw `TableColumn`s |
| `renameColumn(table, oldName, newName)` | Rename a column |
| `changeColumn(table, oldColumn, newColumn)` / `changeColumns(table, changes)` | Change column definitions |
| `dropColumn(table, columnName)` / `dropColumns(table, columnNames)` | Drop columns |

### Keys, constraints and indexes

| Method | Description |
| --- | --- |
| `createPrimaryKey(table, columnNames, constraintName?)` | Create a primary key |
| `updatePrimaryKeys(table, columns)` | Update primary keys |
| `dropPrimaryKey(table, constraintName?)` | Drop the primary key |
| `createUnique(table, columnName, name?)` | Create a unique constraint (name defaults to `` `${table}-${column}Unique` ``) |
| `dropUnique(table, uniqueOrName)` | Drop a unique constraint |
| `dropUniqueColumn(table, columnName)` | Drop a unique constraint by its generated name |
| `createCheck(table, expression, name?)` | Create a check constraint |
| `dropCheck(table, checkOrName)` | Drop a check constraint |
| `createExclusion(table, expression, name?)` | Create an exclusion constraint (Postgres) |
| `dropExclusion(table, exclusionOrName)` | Drop an exclusion constraint |
| `addIndex(tableName, columnNames, options?)` | Create an index (name defaults to `` `${table}-${columns}Index` ``) |
| `dropIndex(table, indexOrName)` / `dropIndices(table, indices)` | Drop indexes |
| `addForeign(tableName, columnName, referencedTable, referencedColumn = 'id', onDelete = 'CASCADE', onUpdate = 'CASCADE')` | Create a foreign key |
| `dropForeign(table, foreignKeyOrName)` | Drop a foreign key |

### Views, schemas and databases

| Method | Description |
| --- | --- |
| `createView(name, expression, materialized = false)` | Create a (materialized) view |
| `dropView(viewOrName)` | Drop a view |
| `createSchema(schemaPath, ifNotExist = true)` | Create a schema |
| `dropSchema(schemaPath, ifExist = true, isCascade = false)` | Drop a schema |
| `hasSchema(schema)` | Check whether a schema exists |
| `createDatabase(database, ifNotExist = true)` | Create a database |
| `dropDatabase(database, ifExist = true)` | Drop a database |
| `hasDatabase(database)` | Check whether a database exists |

### Raw queries

```typescript
await this.query('UPDATE "User" SET "role" = $1 WHERE "role" IS NULL', [1]);
```

You also always have direct access to the `QueryRunner` passed into `run()`/`rollback()` for anything not covered above.

## Testing

```bash
npm test
```

The test suite covers `BaseTable`, `BaseColumn` and `BaseMigration` against a mocked `QueryRunner`, so it does not require a database.

## License 📝

This project is licensed under the MIT License
