---
displayed_sidebar: docs
title: "@hodfords/nestjs-prettier-config"
---
# PRETTIER CONFIGURATION FOR NESTJS PROJECTS
Prettier default configuration for Nestjs project. It will help you to maintain the code quality of your project.

## Installation 🤖
To begin using it, we first install the required dependencies.
```
npm install @hodfords/nestjs-prettier-config
```

## Configuration 🚀
To activate prettier, create a `prettier.config.js` file in the root of your project and add the following configuration:
```javascript
module.exports = require('@hodfords/nestjs-prettier-config');
```

### Prettier Config
```javascript
{
    singleQuote: true,
    printWidth: 120,
    proseWrap: 'always',
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'none',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    semi: true,
    endOfLine: 'auto'
}
```

## License
This project is licensed under the MIT License
