import { LemonsqueezyDataType } from "~/types";
import { requestLemonSqueeze } from "~/request";

import type {
  ListAllSubscriptionsOptions,
  ListAllSubscriptionsResult,
  RetrieveSubscriptionOptions,
  RetrieveSubscriptionResult,
  SharedModuleOptions,
  UpdateSubscriptionOptions,
  UpdateSubscriptionResult,
} from "~/types";

/**
 * List all subscriptions
 *
 * @description Returns a paginated list of subscriptions
 *
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#list-all-subscriptions
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of subscription objects ordered by `created_at` (descending)
 */
export async function listAllSubscriptions(
  options: ListAllSubscriptionsOptions & SharedModuleOptions
): Promise<ListAllSubscriptionsResult> {
  const {
    apiKey,
    orderId,
    orderItemId,
    productId,
    storeId,
    variantId,
    ...rest
  } = options;

  return requestLemonSqueeze<ListAllSubscriptionsResult>({
    apiKey,
    params: {
      ...(orderId ? { order_id: orderId } : {}),
      ...(orderItemId ? { order_item_id: orderItemId } : {}),
      ...(productId ? { product_id: productId } : {}),
      ...(storeId ? { store_id: storeId } : {}),
      ...(variantId ? { variant_id: variantId } : {}),
    },
    path: "/subscriptions",
    ...rest,
  });
}

/**
 * Retrieve subscription
 *
 * @description Retrieves the subscription with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#retrieve-a-subscription
 *
 * @param {String} options.id - The ID of the subscription to retrieve
 *
 * @returns A subscription object
 */
export async function retrieveSubscription(
  options: RetrieveSubscriptionOptions & SharedModuleOptions
): Promise<RetrieveSubscriptionResult> {
  const { apiKey, id, ...rest } = options;

  return requestLemonSqueeze<RetrieveSubscriptionResult>({
    apiKey,
    path: `/subscriptions/${id}`,
    ...rest,
  });
}

/**
 * Update subscription
 *
 * @description Update an existing subscription to specific parameters. With this endpoint, you can:
 *
 *  - Upgrade & Downgrade a subscripion to a different Product or Variant
 *  - Change payment pause collection behaviour
 *  - Update the billing date for when payments are collected
 *
 * When changing the plan of a subscription, we prorate the charge for the next billing cycle.
 * For example, if a customer buys your product on April 1st for $50, they'll be charged $50 immediately.
 * If on April 15th they upgrade to your $100 product, on May 1st they'll be charged $125.
 * This is made up of $100 for renewing, $50 of used time on your upgraded $100 plan from April 15th - May 1st, and then a credited -$25 for unused time on your $50 plan.
 *
 * If downgrading a subscription, we'll issue a credit which is then applied on the next invoice.
 *
 * Changing a subscription plan may change the billing date or charge immediately if:
 *
 *  - The variant has a different billing cycle (from monthly to yearly, etc)
 *  - The subscription is no longer free, or is now free
 *  - A trial starts or ends
 *
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#update-a-subscription
 *
 * @param {String} options.id - The ID of the subscription to retrieve
 *
 * @returns A subscription object
 */
export async function updateSubscription(
  options: UpdateSubscriptionOptions & SharedModuleOptions
): Promise<UpdateSubscriptionResult> {
  const {
    apiKey,
    billingAnchor,
    cancelled,
    id,
    pause,
    productId,
    variantId,
    ...rest
  } = options;

  return requestLemonSqueeze<UpdateSubscriptionResult>({
    apiKey,
    data: {
      data: {
        attributes: {
          billing_anchor: billingAnchor,
          cancelled,
          pause,
          product_id: productId,
          variant_id: variantId,
        },
        id,
        type: LemonsqueezyDataType.SUBSCRIPTIONS,
      },
    },
    path: `/subscriptions/${id}`,
    method: "PATCH",
    ...rest,
  });
}
