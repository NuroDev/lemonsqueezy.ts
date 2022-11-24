import { Lemonsqueezy } from "~/client";

import type {
  ListAllSubscriptionsOptions,
  ListAllSubscriptionsResult,
  RetrieveSubscriptionOptions,
  RetrieveSubscriptionResult,
  SharedModuleOptions,
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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllSubscriptions(rest);
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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveSubscription(rest);
}
