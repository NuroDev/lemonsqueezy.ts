import { describe, it, expect, beforeAll } from 'vitest';

import { listAllCustomers, retrieveCustomer } from '.';

describe.concurrent('Customer', () => {
	const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

	beforeAll(() => {
		if (!apiKey) throw 'No LEMON_SQUEEZY_API_KEY environment variable found';
	});

	it('Retrieve customer', async () => {
		const customers = await listAllCustomers({
			apiKey,
		});
		if (!customers.data.length) throw new Error('No customers found');

		const customer = await retrieveCustomer({
			apiKey,
			id: customers.data.at(0)!.id,
		});

		expect(customer).toBeDefined();
		expect(customer.data).toBeDefined();
		expect(customer.data).not.toBeNull();
		expect(customer.errors).toBeUndefined();
	});

	it('List all customers', async () => {
		const customers = await listAllCustomers({
			apiKey,
		});

		expect(customers).toBeDefined();
		expect(Array.isArray(customers.data)).toBe(true);
		expect(customers.errors).toBeUndefined();
	});
});
