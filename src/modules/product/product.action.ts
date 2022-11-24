import { requestLemonSqueeze } from "~/shared";

import type {
  ListAllProductsOptions,
  ListAllProductsResult,
  RetrieveProductOptions,
  RetrieveProductResult,
} from "./product.types";
import type { SharedModuleOptions } from "~/shared";

/**
 * List all products
 *
 * @description Returns a paginated list of products
 *
 * @docs https://docs.lemonsqueezy.com/api/products#list-all-products
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of product objects ordered by `name`
 */
export async function listAllProducts(
  options: ListAllProductsOptions & SharedModuleOptions
): Promise<ListAllProductsResult> {
  const { storeId, ...rest } = options;

  return requestLemonSqueeze<ListAllProductsResult>({
    params: {
      ...(storeId ? { store_id: storeId } : {}),
    },
    path: "/products",
    ...rest,
  });
}

/**
 * Retrieve product
 *
 * @description Retrieves the product with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/products#retrieve-a-product
 *
 * @param {String} options.id - The ID of the product to retrieve
 *
 * @returns A product object
 */
export async function retrieveProduct(
  options: RetrieveProductOptions & SharedModuleOptions
): Promise<RetrieveProductResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveProductResult>({
    path: `/products/${id}`,
    ...rest,
  });
}
