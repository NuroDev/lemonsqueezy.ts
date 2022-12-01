## 🧟 Variant

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/variants)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const variant = await client.retrieveVariant({
  id: "...",
});

const variants = await client.listAllVariants();
```

```typescript
import { retrieveVariant, listAllVariants } from "lemonsqueezy.ts/variant";

const variant = await retrieveVariant({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const variants = await listAllVariants({
  apiKey: "YOUR_API_KEY",
});
```
