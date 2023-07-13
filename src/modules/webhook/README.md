## 🪝 Webhook

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/help/webhooks)

```typescript
import { LemonsqueezyClient } from "lemonsqueezy.ts";

const client = new LemonsqueezyClient("YOUR_API_KEY");

const event = client.constructEvent(
    "RAW_REQUEST_BODY",
    "X-Signature HEADER_VALUE",
    "YOUR_WEBHOOK_SECRET"
)

switch (event.type) {
    case "order_created":
        const order = event.data;
        break;
    case "order_refunded":
        const order = event.data;
        break;
    case "subscription_created":
        const subscription = event.data;
        break;
    default:
        break;
}
```

```typescript
import { constructEvent } from "lemonsqueezy.ts";

const event = constructEvent(
    "RAW_REQUEST_BODY",
    "X-Signature HEADER_VALUE",
    "YOUR_WEBHOOK_SECRET"
)

switch (event.type) {
    case "order_created":
        const order = event.data;
        break;
    case "order_refunded":
        const order = event.data;
        break;
    case "subscription_created":
        const subscription = event.data;
        break;
    default:
        break;
}
```