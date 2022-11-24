import { Lemonsqueezy } from "~/client";

import type {
  ListAllProductsOptions,
  ListAllProductsResult,
  RetrieveProductOptions,
  RetrieveProductResult,
  SharedModuleOptions,
} from "~/types";

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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllProducts(rest);
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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveProduct(rest);
}
