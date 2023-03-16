import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export interface LemonsqueezySubscriptionInvoice {
  attributes: {
    billing_reason: string;
    card_brand: string;
    card_last_four: string;
    created_at: Date;
    currency_rate: string;
    currency: string;
    discount_total_formatted: string;
    discount_total_usd: number;
    discount_total: number;
    refunded_at: Date | null;
    refunded: number;
    status_formatted: string;
    status: string;
    store_id: number;
    subscription_id: number;
    subtotal_formatted: string;
    subtotal_usd: number;
    subtotal: number;
    tax_formatted: string;
    tax_usd: number;
    tax: number;
    test_mode: boolean;
    total_formatted: string;
    total_usd: number;
    total: number;
    updated_at: Date;
    urls: {
      invoice_url: string;
    };
  };
  type: LemonsqueezyDataType.subscription_invoices;
  id: string;
}

export interface ListAllSubscriptionInvoicesOptions
  extends SharedLemonsqueezyOptions {
  /**
   * Only return subscription invoices that are `refunded` (the value should be `true` or `false`).
   */
  refunded?: boolean;
  /**
   * Only return subscription invoices with this status
   */
  status?: string;
  /**
   * Only return subscription invoices belonging to the store with this ID
   */
  storeId?: string;
}

export type ListAllSubscriptionInvoicesResult =
  PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezySubscriptionInvoice>>;

export interface RetrieveSubscriptionInvoiceOptions
  extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveSubscriptionInvoiceResult =
  BaseLemonsqueezyResponse<LemonsqueezySubscriptionInvoice>;
