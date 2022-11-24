import { requestLemonSqueeze } from "~/request";

import type {
  ListAllDiscountsOptions,
  ListAllDiscountsResult,
  RetrieveDiscountOptions,
  RetrieveDiscountResult,
  SharedModuleOptions,
} from "~/types";

/**
 * List all discounts
 *
 * @description Returns a paginated list of discounts
 *
 * @docs https://docs.lemonsqueezy.com/api/discounts#list-all-discounts
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of discount objects ordered by `created_at`
 */
export async function listAllDiscounts(
  options: ListAllDiscountsOptions & SharedModuleOptions
): Promise<ListAllDiscountsResult> {
  const { storeId, ...rest } = options;

  return await requestLemonSqueeze<ListAllDiscountsResult>({
    params: {
      ...(storeId ? { store_id: storeId } : {}),
    },
    path: "/discounts",
    ...rest,
  });
}

/**
 * Retrieve discount
 *
 * @description Retrieves the discount with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/discounts#retrieve-a-discount
 *
 * @param {String} options.id - The ID of the discount to retrieve
 *
 * @returns A discount object
 */
export async function retrieveDiscount(
  options: RetrieveDiscountOptions & SharedModuleOptions
): Promise<RetrieveDiscountResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveDiscountResult>({
    path: `/discounts/${id}`,
    ...rest,
  });
}
