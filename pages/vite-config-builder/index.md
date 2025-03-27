---
displayed_sidebar: docs
title: "@hodfords/vite-config-builder"
---
# Hodfords Vite Config Builder

<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Hodfords Logo" /></a>
</p>

## Installation 🤖

* Install [PNPM](https://pnpm.io/) latest version
* Install Nodejs >= 20 ( Should be use [NVM](https://github.com/nvm-sh/nvm) for install NodeJS )

* With NPM:
```
npm install @hodfords/vite-config-builder --save
```

* with PNPM:
```
pnpm install @hodfords/vite-config-builder
```

## Usage 🚀
```typescript
import createViteConfig from '@hodfords/vite-config-builder';

export default createViteConfig({
  isUsePWA: true,
  isUseGzip: true,
  defineEnv: ['API_URL', 'APP_URL'],
  aliasPath: ['components', 'containers', 'config', 'api'],
  autoImport: {
    config: {
      eslintrc: {
        enabled: true,
      },
      dirs: ['src/shared'],
      dts: 'src/types/auto-imports.d.ts',
    },
    libs: [
      {
        from: 'antd',
        imports: [
          'CollapseProps',
          'ButtonProps',
        ],
        type: true,
      },
      '@ant-design/plots': [
        ['Pie', 'PieChart'],
        ['Column', 'ColumnChart'],
      ],
    ],
  }
});
```

## Options

### `isUsePWA` - This option enable Vite PWA.
- Type: `boolean`
- Required: `true`

### `isUseGzip` - This option enable Gzip.
- Type: `boolean`
- Required: `true`

### `defineEnv` - This option define list Environments.
- Type: `Array(string)`
- Required: `true`

### `aliasPath` - This option define alias path.
- Type: `Array(string)`
- Required: `true`

### `autoImport` - This option define auto import libraries for Components, Functions, Utils, Types...
- Type: `Object(array)`
- Required: `true`

## License 📝

This project is licensed under the MIT License
