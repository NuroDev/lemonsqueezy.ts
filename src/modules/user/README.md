## 🧘 User

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/users)

```typescript
import { Lemonsqueezy } from "lemonsqueezy.ts";

const client = new Lemonsqueezy("YOUR_API_KEY");

const user = await client.getUser();
```

```typescript
import { getUser } from "lemonsqueezy.ts/user";

const user = await getUser({
  apiKey: "YOUR_API_KEY",
});
```
