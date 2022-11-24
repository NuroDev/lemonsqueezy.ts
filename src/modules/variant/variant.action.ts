import { requestLemonSqueeze } from "~/request";

import type {
  ListAllVariantsOptions,
  ListAllVariantsResult,
  RetrieveVariantOptions,
  RetrieveVariantResult,
  SharedModuleOptions,
} from "~/types";

/**
 * List all variants
 *
 * @description Returns a paginated list of variants
 *
 * @docs https://docs.lemonsqueezy.com/api/variants#list-all-variants
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of variant objects ordered by sort
 */
export async function listAllVariants(
  options: ListAllVariantsOptions & SharedModuleOptions
): Promise<ListAllVariantsResult> {
  const { apiKey, productId, ...rest } = options;

  return requestLemonSqueeze<ListAllVariantsResult>({
    apiKey,
    params: {
      ...(productId ? { product_id: productId } : {}),
    },
    path: "/variants",
    ...rest,
  });
}

/**
 * Retrieve variant
 *
 * @description Retrieves the variant with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/variants#retrieve-a-variant
 *
 * @param {String} options.id - The ID of the variant to retrieve
 *
 * @returns A variant object
 */
export async function retrieveVariant(
  options: RetrieveVariantOptions & SharedModuleOptions
): Promise<RetrieveVariantResult> {
  const { apiKey, id, ...rest } = options;

  return requestLemonSqueeze<RetrieveVariantResult>({
    apiKey,
    path: `/variants/${id}`,
    ...rest,
  });
}
