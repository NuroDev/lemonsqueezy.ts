import { listAllCustomers, retrieveCustomer } from './customer.action';

export { listAllCustomers, retrieveCustomer };

export type {
	LemonsqueezyCustomer,
	ListAllCustomersOptions,
	ListAllCustomersResult,
	RetrieveCustomerOptions,
	RetrieveCustomerResult,
} from './customer.types';

export default {
	listAllCustomers,
	retrieveCustomer,
} as const;
