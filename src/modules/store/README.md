## 🏪 Store

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/stores)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const store = await client.retrieveStore({
  id: "...",
});

const stores = await client.listAllStores();
```

```typescript
import { retrieveStore, listAllStores } from "lemonsqueezy.ts/store";

const store = await retrieveStore({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const stores = await listAllStores({
  apiKey: "YOUR_API_KEY",
});
```
