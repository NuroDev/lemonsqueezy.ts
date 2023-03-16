import { requestLemonSqueeze } from "~/shared";

import type {
  ListAllSubscriptionInvoicesOptions,
  ListAllSubscriptionInvoicesResult,
  RetrieveSubscriptionInvoiceOptions,
  RetrieveSubscriptionInvoiceResult,
} from "./subscriptionInvoice.types";
import type { SharedModuleOptions } from "~/shared";

/**
 * List all subscription invoices
 *
 * @description Returns a paginated list of subscriptions
 *
 * @docs https://docs.lemonsqueezy.com/api/subscription-invoices#list-all-subscription-invoices
 *
 * @param {Object} [options]
 *
 * @returns Returns a paginated list of subscription invoice objects.
 */
export async function listAllSubscriptionInvoices(
  options: ListAllSubscriptionInvoicesOptions & SharedModuleOptions
): Promise<ListAllSubscriptionInvoicesResult> {
  const { refunded, status, storeId, ...rest } = options;

  return requestLemonSqueeze<ListAllSubscriptionInvoicesResult>({
    params: {
      ...(refunded ? { refunded } : {}),
      ...(status ? { status } : {}),
      ...(storeId ? { store_id: storeId } : {}),
    },
    path: "/subscription-invoices",
    ...rest,
  });
}

/**
 * Retrieve subscription invoice
 *
 * @description Retrieves a subscription invoice with the given ID
 *
 * @docs https://docs.lemonsqueezy.com/api/subscription-invoices#retrieve-a-subscription-invoice
 *
 * @param {String} options.id - The ID of the subscription invoice to retrieve
 *
 * @returns A subscription invoice object
 */
export async function retrieveSubscriptionInvoice(
  options: RetrieveSubscriptionInvoiceOptions & SharedModuleOptions
): Promise<RetrieveSubscriptionInvoiceResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveSubscriptionInvoiceResult>({
    path: `/subscription-invoices/${id}`,
    ...rest,
  });
}
