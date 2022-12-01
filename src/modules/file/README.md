## 📄 File

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/files)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const file = await client.retrieveFile({
  id: "...",
});

const files = await client.listAllFiles();
```

```typescript
import { retrieveFile, listAllFiles } from "lemonsqueezy.ts/file";

const file = await retrieveFile({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const files = await listAllFiles({
  apiKey: "YOUR_API_KEY",
});
```
