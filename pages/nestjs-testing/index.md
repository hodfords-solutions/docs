---
displayed_sidebar: docs
title: "@hodfords/nestjs-testing"
---
<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">
Nestjs-Testing is a testing library for Nestjs applications. It provides a set of utilities to help you test your Nestjs application.
</p>

## Requirements 📋

| `@hodfords/nestjs-testing` | NestJS | Node | Test runner |
| --- | --- | --- | --- |
| `12.x` | `12.x` | `>=20.19` | Vitest `>=4` |
| `11.x` | `11.x` | `>=18` | Jest |

> **This package is ESM-only.** It ships `"type": "module"` and can only be loaded with
> `import` (`require()` is not supported). Node `>=20.19` (or `>=22.12` / `>=24.15` / `>=26`)
> is required.

## Installation 🤖
To begin using it, we first install the required dependencies.
```
npm install @hodfords/nestjs-testing
```

`@nestjs/common`, `@nestjs/core`, `@nestjs/testing` and `vitest` are peer dependencies and must
be installed in your project.

Relative imports inside your own test files must carry the `.js` extension, as required by
`moduleResolution: nodenext`:

```typescript
import { TestHelper } from './test.helper.js';
```

## Configuration 🚀
To easily customize the configuration, let's create an object that extends the `BaseTestHelper` class. This object will be used to configure the test environment.

```typescript
export class TestHelper extends BaseTestHelper {
    getSupertestConfig(): SupertestConfig {
        return {
            isUseBearerAuth: true,
            authenticationHeader: 'Authorization',
            workspaceHeader: 'x-workspace-id'
        };
    }

    getTestModuleBuilder(): TestingModuleBuilder {
        return Test.createTestingModule({
            imports: [AppModule]
        });
    }
}
```

## Usage 🚀

Write your test cases using the `TestHelper` class.

```typescript
import { afterAll, beforeAll, describe, it } from 'vitest';
import { TestHelper } from './test.helper.js';

describe('AppController (e2e)', () => {
    const testHelper = new TestHelper();

    beforeAll(async () => {
        await testHelper.initialize();
    });

    afterAll(async () => {
        await testHelper.close();
    });

    it('Get index success', async () => {
        return testHelper.get('/').isOk().expect('Hello World!');
    });
});
```

`BaseTestHelper.close()` calls Vitest's `vi.restoreAllMocks()` (it used to call
`jest.restoreAllMocks()`), so the helper must be used from inside a Vitest run.

## License
This project is licensed under the MIT License
