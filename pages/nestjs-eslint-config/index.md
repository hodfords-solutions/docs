---
displayed_sidebar: docs
title: "@hodfords/nestjs-eslint-config"
---
<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Nest Logo" /></a>
</p>

# ESLINT DEFAULT CONFIGURATION
Eslint default configuration for Nestjs project. It will help you to maintain the code quality of your project.

## Installation 🤖
To begin using it, we first install the required dependencies.
```
npm install @hodfords/nestjs-eslint-config
```

## Configuration 🚀
To activate eslint, create a `eslint.config.js` file in the root of your project and add the following configuration:
```javascript
module.exports = require('@hodfords/nestjs-eslint-config');
```

## Usage 🚀
Run the following command to lint your project:
```
npx eslint
```

## Eslint Config Details
This configuration extends the `@hodfords/eslint-config` package. It includes the following plugins:
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-prettier/recommended`

Custom rules are also included in this configuration.

### Prettier Config
```javascript
{
    useTabs: false,
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'none'
}
```

### Typescript Config

#### Naming Conventions
- `@typescript-eslint/naming-convention`
    - `enumMember`: `UPPER_CASE`
    - `objectLiteralProperty`: `['camelCase', 'PascalCase', 'UPPER_CASE']`
    - `['class', 'interface', 'enum']`: `PascalCase`
    - `variable`: `['PascalCase', 'camelCase', 'UPPER_CASE']`
    - `function`: `['PascalCase', 'camelCase']`
    - `'parameter','variable','function', 'classProperty','typeProperty','parameterProperty','classMethod','objectLiteralMethod','typeMethod'`: `'camelCase'`

#### Typescript Custom Rules
```
'@typescript-eslint/interface-name-prefix': 'off',
'@typescript-eslint/no-empty-function': 'off',
'@typescript-eslint/explicit-function-return-type': 'off',
'@typescript-eslint/explicit-module-boundary-types': 'off',
'@typescript-eslint/no-explicit-any': 'off',
'@typescript-eslint/no-inferrable-types': 'off',
'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }]
```

### Js Rules
- `max-line-per-function`: `50`
- `max-lines`: `400`
- `prefer-const`
- `lines-between-class-members`
- `indent`: `off`

## License
This project is licensed under the MIT License
