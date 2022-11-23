import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "./shared";

export interface RetrieveOrderOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export interface LemonsqueezyOrder {
  attributes: {
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * If the order currency is USD, this will always be `1.0`.
     *
     * Otherwise, this is the currency conversion rate used to determine the cost of the order in USD at the time of purchase
     */
    currency_rate: string;
    /**
     * The ISO 4217 currency code for the order (e.g. `USD`, `GBP`, etc)
     *
     * @see https://en.wikipedia.org/wiki/ISO_4217
     */
    currency: string;
    /**
     * A positive integer in cents representing the total discount value applied to the order in USD
     */
    discount_total_usd: number;
    /**
     * A positive integer in cents representing the total discount value applied to the order in the order currency
     */
    discount_total: number;
    /**
     * The unique identifier (UUID) for this order
     */
    identifier: string;
    /**
     * An integer representing the sequential order number for this store
     */
    order_number: number;
    /**
     * If the order has been refunded, this will be an ISO-8601 formatted date-time string indicating when the order was refunded
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    refunded_at: Date | null;
    /**
     * Has the value true if the order has been refunded
     */
    refunded: number;
    /**
     * The formatted status of the order
     */
    status_formatted: string;
    /**
     * The status of the order. One of `pending`, `failed`, `paid`, `refunded`
     */
    status: "pending" | "failed" | "paid" | "refunded";
    /**
     * The ID of the store this order belongs to
     */
    store_id: number;
    /**
     * A positive integer in cents representing the subtotal of the order in USD
     */
    subtotal_usd: number;
    /**
     * A positive integer in cents representing the subtotal of the order in the order currency
     */
    subtotal: number;
    /**
     * If tax is applied to the order, this will be the name of the tax rate (e.g. `VAT`, `Sales Tax`, etc)
     */
    tax_name: string;
    /**
     * If tax is applied to the order, this will be the rate of tax as a decimal percentage
     */
    tax_rate: string;
    /**
     * A positive integer in cents representing the tax applied to the order in USD
     */
    tax_usd: number;
    /**
     * A positive integer in cents representing the tax applied to the order in the order currency
     */
    tax: number;
    /**
     * A positive integer in cents representing the total cost of the order in USD
     */
    total_usd: number;
    /**
     * A positive integer in cents representing the total cost of the order in the order currency
     */
    total: number;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
    /**
     * The email address of the customer
     */
    user_email: string;
    /**
     * The full name of the customer
     */
    user_name: string;
  };
  type: LemonsqueezyDataType.ORDERS;
  id: string | number;
}

export type RetrieveOrderResult = BaseLemonsqueezyResponse<LemonsqueezyOrder>;

export interface ListAllOrdersOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return orders belonging to the store with this ID
   */
  storeId?: string;
  /**
   * Only return orders where the `user_email` field is equal to this email address
   */
  userEmail?: string;
}

export type ListAllOrdersResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezyOrder>
>;
