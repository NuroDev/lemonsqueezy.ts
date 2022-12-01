## 🧾 Order

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/orders)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const order = await client.retrieveOrder({
  id: "...",
});

const orders = await client.listAllOrders();
```

```typescript
import { retrieveOrder, listAllOrders } from "lemonsqueezy.ts/order";

const order = await retrieveOrder({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const orders = await listAllOrders({
  apiKey: "YOUR_API_KEY",
});
```
