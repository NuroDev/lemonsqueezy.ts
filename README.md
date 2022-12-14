<div align="center">
  <h1>
    <br/>
    <br/>
    ๐
    <br />
    lemonsqueezy.ts
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    JavaScript / TypeScript SDK for the Lemon Squeezy API</em>
    <br />
    <br />
  
[![Build status](https://img.shields.io/github/actions/workflow/status/NuroDev/lemonsqueezy.ts/ci.yml?branch=main&label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/NuroDev/lemonsqueezy.ts/actions/workflows/ci.yml)
[![Package version](https://img.shields.io/npm/v/lemonsqueezy.ts?label=%20&style=for-the-badge)](https://www.npmjs.com/package/lemonsqueezy.ts)
[![Package monthly downloads](https://img.shields.io/npm/dm/lemonsqueezy.ts?color=blueviolet&label=%20&style=for-the-badge)](https://www.npmjs.com/package/lemonsqueezy.ts)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api)

  </sup>
  <br />
  <br />
</div>

## ๐ Install

Install it locally in your project

```bash
# npm
npm install lemonsqueezy.ts

# yarn
yarn add lemonsqueezy.ts

# pnpm
pnpm install lemonsqueezy.ts
```

## ๐ฆ Usage

Create a new client instance with your API key

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const user = await client.getUser();
// => { attributes: { ... }, id: "1", links: { self: "..." }, type: 'users' }

const stores = await client.listAllStores();
// => [{ attributes: { ... }, id: "1", type: "stores" }]

// And many many more...
```

## ๐ Documentation

To view the documentation on how to use each module, view the README.md for each module:

- [๐ Checkout](src/modules/checkout#-checkout)
- [๐ Discount](src/modules/discount#-discount)
- [๐ File](src/modules/file#-file)
- [๐ License key](src/modules/licenseKey#-license-key)
- [๐ฅ License key instance](src/modules/licenseKeyInstance#-license-key-instance)
- [๐งพ Order](src/modules/order#-order)
- [๐ฆ Order Item](src/modules/orderItem#-orderItem)
- [๐ Product](src/modules/product#-product)
- [๐ช Store](src/modules/store#-store)
- [โป๏ธ Subscription](src/modules/subscription#-subscription)
- [๐ง User](src/modules/user#-user)
- [๐ง Variant](src/modules/variant#-variant)
