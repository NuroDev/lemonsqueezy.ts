## 🔑 License key

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/license-keys)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const licenseKey = await client.retrieveLicenseKey({
  id: "...",
});

const licenseKeys = await client.listAllLicenseKeys();
```

```typescript
import {
  retrieveLicenseKey,
  listAllLicenseKeys,
} from "lemonsqueezy.ts/licenseKey";

const licenseKey = await retrieveLicenseKey({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const licenseKeys = await listAllLicenseKeys({
  apiKey: "YOUR_API_KEY",
});
```
