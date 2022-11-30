## 🔖 Discount

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/discounts)

```typescript
import { Lemonsqueezy } from "lemonsqueezy.ts";

const client = new Lemonsqueezy("YOUR_API_KEY");

const discount = await client.retrieveDiscount({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const discounts = await client.listAllDiscounts({
  apiKey: "YOUR_API_KEY",
});
```

```typescript
import { retrieveDiscount, listAllDiscounts } from "lemonsqueezy.ts/discount";

const discount = await retrieveDiscount({
  id: "...",
});

const discounts = await listAllDiscounts();
```
