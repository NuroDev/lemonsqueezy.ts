import { Lemonsqueezy } from "~/client";

import type {
  CreateCheckoutOptions,
  CreateCheckoutResult,
  ListAllCheckoutsOptions,
  ListAllCheckoutsResult,
  RetrieveCheckoutOptions,
  RetrieveCheckoutResult,
  SharedModuleOptions,
} from "~/types";

/**
 * Create checkout
 *
 * @description Create a custom checkout. Use this endpoint to create a unique checkout URL for a specific variant
 *
 * @docs https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
 *
 * @returns A checkout object
 */
export async function createCheckout(
  options: CreateCheckoutOptions & SharedModuleOptions
): Promise<CreateCheckoutResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.createCheckout(rest);
}

/**
 * List all checkouts
 *
 * @description Returns a paginated list of checkouts
 *
 * @docs https://docs.lemonsqueezy.com/api/checkouts#list-all-checkouts
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of checkout objects ordered by `created_at` (descending)
 */
export async function listAllCheckouts(
  options: ListAllCheckoutsOptions & SharedModuleOptions
): Promise<ListAllCheckoutsResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllCheckouts(rest);
}

/**
 * Retrieve checkout
 *
 * @description Retrieves the checkout with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/checkouts#retrieve-a-checkout
 *
 * @param {String} options.id - The ID of the checkout to retrieve
 *
 * @returns A checkout object
 */
export async function retrieveCheckout(
  options: RetrieveCheckoutOptions & SharedModuleOptions
): Promise<RetrieveCheckoutResult> {
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveCheckout(rest);
}
