import {
  ListAllCustomersOptions,
  ListAllCustomersResult,
  RetrieveCustomerOptions,
  RetrieveCustomerResult,
} from "./customer.types";
import type { SharedModuleOptions } from "~/shared";
import { requestLemonSqueeze } from "~/shared";

/**
 * List all customers
 *
 * @description Returns a paginated list of customers
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#list-all-customers
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of customer objects ordered by `created_at` (descending)
 */
export async function listAllCustomers(
  options: ListAllCustomersOptions & SharedModuleOptions
): Promise<ListAllCustomersResult> {
  const { storeId, email, ...rest } = options;

  return requestLemonSqueeze<ListAllCustomersResult>({
    params: {
      ...(storeId ? { store_id: storeId } : {}),
      ...(email ? { email: email } : {}),
    },
    path: "/customers",
    ...rest,
  });
}

/**
 * Retrieve customer
 *
 * @description Retrieves the customer with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/customers#retrieve-a-customer
 *
 * @param {String} options.id - The ID of the customer to retrieve
 *
 * @returns A customer object
 */
export async function retrieveCustomer(
  options: RetrieveCustomerOptions & SharedModuleOptions
): Promise<RetrieveCustomerResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveCustomerResult>({
    path: `/customers/${id}`,
    ...rest,
  });
}
