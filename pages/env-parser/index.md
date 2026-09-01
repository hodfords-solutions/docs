---
displayed_sidebar: docs
title: "@hodfords/env-parser"
---
<p align="center">
  <a href="http://opensource.hodfords.uk" target="blank"><img src="https://opensource.hodfords.uk/img/logo.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">
Env-Parser is a simple and lightweight library for parsing environment variables in Node.js applications. Inspired by znv but simpler and lighter.
</p>

## Installation 🤖
To begin using it, we first install the required dependencies. `zod` is a peer dependency, so install it alongside the package.
```
npm install @hodfords/env-parser zod
```

## Usage 🚀

Create `.env` file, you can also pass it via environment variable without creating a file.

```env
APP_PORT=3000
REDIS_PORT=6379
REDIS_HOST=localhost
ALLOW_SEND_MAIL=true
```

Create env file like `env.ts` and import `parse` and `z` from `@hodfords/env-parser`.
```typescript
import { parse, z } from '@hodfords/env-parser';

export const env = parse(process.env, {
    APP_PORT: z.number().min(1000).max(9999),
    REDIS: {
        PORT: z.number().default(6379),
        HOST: z.string().default('localhost')
    },
    ALLOW_SEND_MAIL: z.boolean().default(true)
});
```

> Note: env-parser supports multiple parser levels, but we recommend using up to 2 levels to ensure easier code readability.


More validation function here: [Zod Validation](https://zod.dev/?id=basic-usage)

## License
This project is licensed under the MIT License
