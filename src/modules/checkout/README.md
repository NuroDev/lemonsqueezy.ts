## 🛒 Checkout

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/checkouts)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const newCheckout = await client.createCheckout({
  // ...
});

const checkout = await client.retrieveCheckout({
  id: "...",
});

const checkouts = await client.listAllCheckouts();
```

```typescript
import {
  createCheckout,
  retrieveCheckout,
  listAllCheckouts,
} from "lemonsqueezy.ts/checkout";

const newCheckout = await createCheckout({
  apiKey: "YOUR_API_KEY",
  // ...
});

const checkout = await retrieveCheckout({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const checkouts = await listAllCheckouts({
  apiKey: "YOUR_API_KEY",
});
```
