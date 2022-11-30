## ♻️ Subscription

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/subscriptions)

```typescript
import { Lemonsqueezy } from "lemonsqueezy.ts";

const client = new Lemonsqueezy("YOUR_API_KEY");

const updatedSubscription = await client.updateSubscription({
  // ...
});

const subscription = await client.retrieveSubscription({
  id: "...",
});

const subscriptions = await client.listAllSubscriptions();
```

```typescript
import {
  updateSubscription,
  retrieveSubscription,
  listAllSubscriptions,
} from "lemonsqueezy.ts/subscription";

const updatedSubscription = await updateSubscription({
  apiKey: "YOUR_API_KEY",
  // ...
});

const subscription = await retrieveSubscription({
  apiKey: "YOUR_API_KEY",
  id: "...",
});

const subscriptions = await listAllSubscriptions({
  apiKey: "YOUR_API_KEY",
});
```
