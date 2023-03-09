import { LemonsqueezyDataType, requestLemonSqueeze } from "~/shared";

import type {
  CreateCheckoutBody,
  CreateCheckoutOptions,
  CreateCheckoutResult,
  ListAllCheckoutsOptions,
  ListAllCheckoutsResult,
  RetrieveCheckoutOptions,
  RetrieveCheckoutResult,
} from "./checkout.types";
import type { SharedModuleOptions } from "~/shared";

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
  const {
    checkout_data,
    checkout_options,
    custom_price,
    expires_at,
    product_options,
    store,
    variant,
    ...rest
  } = options;

  return requestLemonSqueeze<CreateCheckoutResult, CreateCheckoutBody>({
    data: {
      data: {
        attributes: {
          checkout_data,
          checkout_options,
          custom_price,
          expires_at,
          product_options,
        },
        relationships: {
          ...(store
            ? {
                store: {
                  data: { id: store, type: LemonsqueezyDataType.stores },
                },
              }
            : {}),
          ...(variant
            ? {
                variant: {
                  data: { id: variant, type: LemonsqueezyDataType.variants },
                },
              }
            : {}),
        },
        type: LemonsqueezyDataType.checkouts,
      },
    },
    path: "/checkouts",
    method: "POST",
    ...rest,
  });
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
  const { storeId, variantId, ...rest } = options;

  return requestLemonSqueeze<ListAllCheckoutsResult>({
    params: {
      ...(storeId ? { store_id: storeId } : {}),
      ...(variantId ? { variant_id: variantId } : {}),
    },
    path: "/checkouts",
    ...rest,
  });
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
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveCheckoutResult>({
    path: `/checkouts/${id}`,
    ...rest,
  });
}
