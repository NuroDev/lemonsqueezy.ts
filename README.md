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
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://github.com/nurodev/lemonsqueezy.ts)

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
```

#### 🛒 Checkout

```typescript
const newCheckout = await client.createCheckout({
  // ...
});

const checkout = await client.retrieveCheckout({
  id: "...",
});

const checkouts = await client.listAllCheckouts();
```

#### 🔖 Discount

```typescript
const discount = await client.retrieveDiscount({
  id: "...",
});

const discounts = await client.listAllDiscounts();
```

#### 📄 File

```typescript
const file = await client.retrieveFile({
  id: "...",
});

const files = await client.listAllFiles();
```

#### 🔑 License key

```typescript
const licenseKey = await client.retrieveLicenseKey({
  id: "...",
});

const licenseKeys = await client.listAllLicenseKeys();
```

#### 🥇 License key instance

```typescript
const licenseKeyInstance = await client.retrieveLicenseKeyInstance({
  id: "...",
});

const licenseKeyInstances = await client.listAllLicenseKeyInstances();
```

#### 🧾 Order

```typescript
const order = await client.retrieveOrder({
  id: "...",
});

const orders = await client.listAllOrders();
```

#### 📦 Order Item

```typescript
const orderItem = await client.retrieveOrderItem({
  id: "...",
});

const orderItems = await client.listAllOrderItems();
```

#### 💎 Product

```typescript
const product = await client.retrieveProduct({
  id: "...",
});

const products = await client.listAllProducts();
```

#### 🏪 Store

```typescript
const store = await client.retrieveStore({
  id: "...",
});

const stores = await client.listAllStores();
```

#### ♻️ Subscription

```typescript
const updatedSubscription = await client.updateSubscription({
  // ...
});

const subscription = await client.retrieveSubscription({
  id: "...",
});

const subscriptions = await client.listAllSubscriptions();
```

#### 🧘 User

```typescript
const user = await client.getUser();
```

#### 🧟 Variant

```typescript
const variant = await client.retrieveVariant({
  id: "...",
});

const variants = await client.listAllVariants();
```
