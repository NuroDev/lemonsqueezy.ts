import { requestLemonSqueeze } from "~/shared";

import type {
  ListAllOrdersOptions,
  ListAllOrdersResult,
  RetrieveOrderOptions,
  RetrieveOrderResult,
} from "./order.types";
import type { SharedModuleOptions } from "~/shared";

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
  const { storeId, userEmail, ...rest } = options;

  return requestLemonSqueeze<ListAllOrdersResult>({
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
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveOrderResult>({
    path: `/orders/${id}`,
    ...rest,
  });
}
