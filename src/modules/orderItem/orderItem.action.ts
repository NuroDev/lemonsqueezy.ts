import { requestLemonSqueeze } from "~/request";

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
  const { orderId, productId, variantId, ...rest } = options;

  return requestLemonSqueeze<ListAllOrderItemsResult>({
    params: {
      ...(orderId ? { order_id: orderId } : {}),
      ...(productId ? { product_id: productId } : {}),
      ...(variantId ? { variant_id: variantId } : {}),
    },
    path: "/order-items",
    ...rest,
  });
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
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveOrderItemResult>({
    path: `/order-items/${id}`,
    ...rest,
  });
}
