---
displayed_sidebar: docs
title: "@hodfords/nestjs-any-guard"
---
<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">
Nestjs-AnyGuard is a custom guard for NestJS that allows you to apply multiple guards to a single route. It will pass the request to the first guard that returns true, and if none of the guards return true, it will throw a ForbiddenException.
</p>

## Installation 🤖

To begin using it, we first install the required dependencies.

```
npm install @hodfords/nestjs-any-guard
```
## Usage 📖

### AnyGuard Decorator
**AnyGuard** is a custom decorator that allows you to apply multiple guards to a single route. It will pass the request to the first guard that returns true, and if none of the guards return true, it will throw an ForbiddenException.
```typescript
@Post('example')
@AnyGuard(Guard1, Guard2, Guard3)
async example(@Body() body: any) {
  return body;
}
```

### Custom Guards
**FirstSuccessGuard** is a custom guard that checks if any of the provided guards return true. If any guard returns true, it allows the request to proceed; otherwise, it throws a ForbiddenException.

```typescript

@Post('example')
@UseGuards(FirstSuccessGuard(Guard1, Guard2, Guard3))
async example(@Body() body: any) {
    return body;
}

```

**HasHeaderGuard** checks if a specific header is present in the request. If the header is present and its value is 'true', it allows the request to proceed. Otherwise, it denies access.
It is useful when you use with API-Gateway

```typescript
@Post('example')
@UseGuards(HasHeaderGuard('permission-passed'))
async example(@Body() body: any) {
    return body;
}
```

## Limitations 🚧
You have to register the guards in your module providers, otherwise it will not work.


## License

This project is licensed under the MIT License
