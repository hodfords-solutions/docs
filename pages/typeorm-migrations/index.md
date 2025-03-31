---
displayed_sidebar: docs
title: "@hodfords/typeorm-migrations"
---
<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Hodfords Logo" /></a>
</p>

## Installation 🤖

Install the `typeorm-migrations` package with:

```bash
npm install @hodfords/typeorm-migrations --save
```

### Usage

We develop a class that abstracts the typeorm migration, making it easier to understand. For the update command, let's
use pure queries for the time being.

### Example

```typescript
export class CreateUserTable1626749239046 extends BaseMigration {
    async run(queryRunner: QueryRunner) {
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

    async rollback(queryRunner: QueryRunner) {
        await this.drop('User');
    }
}
```

### Table methods

The Table class provides various methods for defining columns in a database schema

```typescript
    string(name: string, length?: number, options?: Partial<TableColumnOptions>): BaseColumn;
    strings(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    uuid(name?: string, options?: Partial<TableColumnOptions>): BaseColumn;
    uuids(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    primaryUuid(name?: string, options?: Partial<TableColumnOptions>): BaseColumn;
    id(name: string = 'id', options: Partial<TableColumnOptions> = {}): BaseColumn
    integer(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    integers(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    timestamp(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    timestamptz(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    boolean(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    jsonb(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    json(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    decimal(name: string,precision: number = 10,scale: number = 2,options?: Partial<TableColumnOptions>): BaseColumn;
    enum(
        name: string,
        enumName: string,
        enumValues: Record<string, string> | string[],
        options: Partial<TableColumnOptions> = null
    ): BaseColumn;
    char(name: string, length: number, options: Partial<TableColumnOptions> = null): BaseColumn;
    increments(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    smallIncrements(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    bigIncrements(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    real(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    doublePrecision(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    time(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    baseTime(): void;
    timetz(name: string, options: Partial<TableColumnOptions> = null): BaseColumn;
    geography(
        name: string,
        spatialFeatureType: string,
        srid = 4326,
        options?: Partial<TableColumnOptions>
    ): BaseColumn;
    geometry(
        name: string,
        spatialFeatureType: string,
        srid = 0,
        options?: Partial<TableColumnOptions>
    ): BaseColumn;
    macaddr(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    inet(name: string, options?: Partial<TableColumnOptions>): BaseColumn;
    createdAt(): BaseColumn;
    updatedAt(): BaseColumn;
    deletedAt(): BaseColumn;
```

### Column method

The BaseColumn class provides methods that define and configure properties for a database column, including length,
nullability, uniqueness, indexing, default values, and foreign key relationships.

```typescript
    length(length: number): this;
    nullable(): this;
    unique(): this;
    index(): this;
    default(value: any): this;
    autoIncrement(): this;
    useCurrent(): this;
    comment(): this;
    foreign(table: string, column?: string, onDelete?: string, onUpdate?: string): void;
```

## License 📝

This project is licensed under the MIT License
