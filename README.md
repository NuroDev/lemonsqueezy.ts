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
  
[![Package Version](https://img.shields.io/npm/v/lemonsqueezy.ts?label=%20&style=for-the-badge)](https://www.npmjs.com/package/lemonsqueezy.ts)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/lemonsqueezy.ts?color=blue&label=%20&style=for-the-badge)](https://www.npmjs.com/package/lemonsqueezy.ts)
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
import { Lemonsqueezy } from "lemonsqueezy.ts";

const client = new Lemonsqueezy("YOUR_API_KEY");

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
