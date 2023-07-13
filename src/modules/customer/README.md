## 👤 Customer

[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://docs.lemonsqueezy.com/api/customers)

```typescript
import { LemonsqueezyClient } from 'lemonsqueezy.ts';

const client = new LemonsqueezyClient('YOUR_API_KEY');

const customer = await client.retrieveCustomer({
	id: '...',
});

const customers = await client.listAllCustomers();
```

```typescript
import { retrieveCustomer, listAllCustomers } from 'lemonsqueezy.ts/customer';

const customer = await retrieveCustomer({
	apiKey: 'YOUR_API_KEY',
	id: '...',
});

const customers = await listAllCustomers({
	apiKey: 'YOUR_API_KEY',
});
```
