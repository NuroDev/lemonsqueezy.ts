> [!WARNING]  
> This packages has been deprecated in favor of the official [Lemon Squeezy SDK](https://github.com/lmsqueezy/lemonsqueezy.js/tree/main) JavaScript SDK. Please use `@lemonsqueezy/lemonsqueezy.js` instead.

<div align="center">
  <h1>
    <br/>
    <br/>
    🍋
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

## 🚀 Install

Install it locally in your project

```bash
# npm
npm install lemonsqueezy.ts

# yarn
yarn add lemonsqueezy.ts

# pnpm
pnpm install lemonsqueezy.ts
```

## 🦄 Usage

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

## 📚 Documentation

To view the documentation on how to use each module, view the README.md for each module:

- [🛒 Checkout](src/modules/checkout#-checkout)
- [🔖 Discount](src/modules/discount#-discount)
- [📄 File](src/modules/file#-file)
- [🔑 License key](src/modules/licenseKey#-license-key)
- [🥇 License key instance](src/modules/licenseKeyInstance#-license-key-instance)
- [🧾 Order](src/modules/order#-order)
- [📦 Order Item](src/modules/orderItem#-orderItem)
- [💎 Product](src/modules/product#-product)
- [🏪 Store](src/modules/store#-store)
- [♻️ Subscription](src/modules/subscription#-subscription)
- [🧘 User](src/modules/user#-user)
- [🧟 Variant](src/modules/variant#-variant)
