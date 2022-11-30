## 📦 Order Item

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/order-items)

```typescript
import { Lemonsqueezy } from "lemonsqueezy.ts";

const client = new Lemonsqueezy("YOUR_API_KEY");

const orderItem = await client.retrieveOrderItem({
  id: "...",
});

const orderItems = await client.listAllOrderItems();
```

```typescript
import {
  retrieveOrderItem,
  listAllOrderItems,
} from "lemonsqueezy.ts/orderItem";

const orderItem = await retrieveOrderItem({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const orderItems = await listAllOrderItems({
  apiKey: "YOUR_API_KEY",
});
```
