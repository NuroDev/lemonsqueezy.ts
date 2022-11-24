import { requestLemonSqueeze } from "~/request";

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
  const { apiKey, storeId, userEmail, ...rest } = options;

  return requestLemonSqueeze<ListAllOrdersResult>({
    apiKey,
    params: {
      ...(storeId ? { store_id: storeId } : {}),
      ...(userEmail ? { user_email: userEmail } : {}),
    },
    path: "/orders",
    ...rest,
  });
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
  const { apiKey, id, ...rest } = options;

  return requestLemonSqueeze<RetrieveOrderResult>({
    apiKey,
    path: `/orders/${id}`,
    ...rest,
  });
}
