---
displayed_sidebar: docs
title: "@hodfords/nestjs-exception"
---
<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">
This repository contains a set of custom exception filters and exceptions designed for use in a NestJS application. It enhances error handling for HTTP-based and microservice-based (gRPC, Kafka) applications by providing more meaningful error responses and localization support.

</p>

## Installation 🤖

To begin using it, we first install the required dependencies.

```
npm install @hodfords/nestjs-exception
```

## Exception Classes

> **Note**: These exception classes only function when used alongside the `HttpExceptionFilter` or one of its child classes (`GrpcExceptionFilter`, `KafkaExceptionFilter`, etc.). Be sure to apply the appropriate filter in your application.

**1\. UuidException**

This exception is used to handle invalid UUID formats in requests. It returns a 400 `BAD_REQUEST` status.

Parameters:

- `field`: The name of the field that contains the invalid UUID. This value is passed to indicate which field caused the exception.

**2\. ValidateException**

Handles specific validation errors related to a particular field. Returns a 422 `UNPROCESSABLE_ENTITY` status.

Parameters:

- `property`: The field name that caused the validation error.
- `message`: The detailed message for the validation error.
- `constraint`: The validation constraint that was violated (e.g., notNull).
- `detail`: Additional information for the validation error, if applicable.

## Exception Filters

- **HttpExceptionFilter**: Handles various types of HTTP exceptions with localization support.

- **GrpcExceptionFilter**: Handles exceptions for gRPC microservices, formatting errors for gRPC clients.

- **KafkaExceptionFilter**: Manages exceptions in Kafka microservices, formatting errors for Kafka messaging.

- **ValidatorExceptionFilter**: Catches validation errors (`ValidateException`), supporting nested object validation and localization.

**Note on Translation**: These filters, especially `HttpExceptionFilter` and `ValidatorExceptionFilter`, rely on a translation service to provide localized error messages. Ensure that your application has translation support enabled (e.g., using `@hodfords/nestjs-cls-translation`). The filters use translation keys defined in your language files to dynamically translate error messages based on the request's language.

## Example of usage

To use the exception classes and filters in your NestJS application, follow these steps:

#### 1\. **Applying the `HttpExceptionFilter`**

**Global Application:**

```typescript
import { HttpExceptionFilter } from '@hodfords/nestjs-exception';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3000);
}
bootstrap();
```

**Controller-Level Application:**

```typescript
import { Controller, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'hodfords/nestjs-exception';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UserController {}
```

#### 2\. **Throwing a Custom Exception**

```typescript
import { UuidException } from '@hodfords/nestjs-exception';

@Controller('users')
export class UserController {
    @Get(':id')
    getUser(@Param('id') id: string) {
        if (!isValidUUID(id)) {
            throw new UuidException('id'); // Translation key: 'error.field_malformed'
        }
        return { id };
    }
}
```

## License

This project is licensed under the MIT License
