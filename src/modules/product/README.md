## 💎 Product

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/products)

```typescript
import { Lemonsqueezy } from "lemonsqueezy.ts";

const client = new Lemonsqueezy("YOUR_API_KEY");

const product = await client.retrieveProduct({
  id: "...",
});

const products = await client.listAllProducts();
```

```typescript
import { retrieveProduct, listAllProducts } from "lemonsqueezy.ts/product";

const product = await retrieveProduct({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const products = await listAllProducts({
  apiKey: "YOUR_API_KEY",
});
```
