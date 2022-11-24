import { Lemonsqueezy } from "~/client";

import type {
  ListAllOrdersOptions,
  ListAllOrdersResult,
  RetrieveOrderOptions,
  RetrieveOrderResult,
  SharedModuleOptions,
} from "~/types";

/**
 * List all files
 *
 * @description Returns a paginated list of files
 *
 * @docs https://docs.lemonsqueezy.com/api/files#list-all-files
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of file objects ordered by `sort`
 */
export async function listAllOrders(
  options: ListAllOrdersOptions & SharedModuleOptions
): Promise<ListAllOrdersResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllOrders(rest);
}

/**
 * Retrieve order
 *
 * @description Retrieves the order with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/orders#retrieve-an-order
 *
 * @param {String} options.id - The ID of the order to retrieve
 *
 * @returns A order object
 */
export async function retrieveOrder(
  options: RetrieveOrderOptions & SharedModuleOptions
): Promise<RetrieveOrderResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveOrder(rest);
}
