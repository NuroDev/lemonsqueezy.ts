import { Lemonsqueezy } from "~/client";

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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllVariants(rest);
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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveVariant(rest);
}
