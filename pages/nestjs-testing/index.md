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

## Installation 🤖
To begin using it, we first install the required dependencies.
```
npm install @hodfords/nestjs-testing
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
describe('AppController (e2e)', () => {
    let testHelper = new TestHelper();

    beforeAll(async () => {
        await testHelper.initialize();
    });

    it('Get index success', async () => {
        return testHelper.get('/').isOk().expect('Hello World!');
    });
});
```

## License
This project is licensed under the MIT License
