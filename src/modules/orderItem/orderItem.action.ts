import { Lemonsqueezy } from "~/client";

import type {
  ListAllOrderItemsOptions,
  ListAllOrderItemsResult,
  RetrieveOrderItemOptions,
  RetrieveOrderItemResult,
  SharedModuleOptions,
} from "~/types";

/**
 * List all order items
 *
 * @description Returns a paginated list of order items
 *
 * @docs https://docs.lemonsqueezy.com/api/order-items#list-all-order-items
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of order item objects ordered by `id`
 */
export async function listAllOrderItems(
  options: ListAllOrderItemsOptions & SharedModuleOptions
): Promise<ListAllOrderItemsResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllOrderItems(rest);
}

/**
 * Retrieve order item
 *
 * @description Retrieves the order item with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/order-items#retrieve-an-order-item
 *
 * @param {String} options.id - The ID of the order item to retrieve
 *
 * @returns A order item object
 */
export async function retrieveOrderItem(
  options: RetrieveOrderItemOptions & SharedModuleOptions
): Promise<RetrieveOrderItemResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveOrderItem(rest);
}
