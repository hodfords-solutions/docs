---
displayed_sidebar: docs
title: "@hodfords/reactjs-codelint-config"
---
# Hodfords ReactJS Codelint Config

<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Hodfords Logo" /></a>
</p>

<p align="center"> <b>reactjs-codelint-config</b> include eslint, stylelint, tslint configs help you to maintain the code quality of your project.</p>

## Installation 🤖

* Install [PNPM](https://pnpm.io/) latest version
* Install Nodejs >= 20 ( Should be use [NVM](https://github.com/nvm-sh/nvm) for install NodeJS )

* With NPM:
```
npm install @hodfords/reactjs-codelint-config --save
```

* with PNPM:
```
pnpm install @hodfords/reactjs-codelint-config
```

## Configuration 🚀

* To activate eslint, create a `eslint.config.js` file in the root of your project and add the following configuration:

```typescript
import { eslintConfig } from '@hodfords/reactjs-codelint-config';

export default eslintConfig;
```

* To activate stylelint, create a `.stylelintrc.js` file in the root of your project and add the following configuration:

```typescript
import { stylelintConfig } from '@hodfords/reactjs-codelint-config';

export default stylelintConfig;
```

## Usage 🚀
Run the following command to lint your project:
```
npx eslint
```

## Eslint Config Details
This configuration extends the `@hodfords/reactjs-codelint-config` package. It includes the following plugins:
- `@typescript-eslint/parser`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-unused-imports`
- `eslint-plugin-import`
- `eslint-plugin-react-func`
- `@tanstack/eslint-plugin-query`

## Stylelint Config Details
This configuration extends the `@hodfords/reactjs-codelint-config` package. It includes the following plugins:
- `postcss-styled-syntax`
- `stylelint-config-standard`,
- `stylelint-config-recommended`

## License 📝

This project is licensed under the MIT License
