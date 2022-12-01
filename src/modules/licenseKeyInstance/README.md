## 🥇 License key instance

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/license-key-instances)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const licenseKeyInstance = await client.retrieveLicenseKeyInstance({
  id: "...",
});

const licenseKeyInstances = await client.listAllLicenseKeyInstances();
```

```typescript
import {
  retrieveLicenseKeyInstance,
  listAllLicenseKeyInstances,
} from "lemonsqueezy.ts/licenseKeyInstance";

const licenseKeyInstance = await retrieveLicenseKeyInstance({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const licenseKeyInstances = await listAllLicenseKeyInstances({
  apiKey: "YOUR_API_KEY",
});
```
