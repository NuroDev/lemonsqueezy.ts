import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

export interface LemonsqueezyCustomer {
  attributes: {
    /**
     * The ID of the store this customer belongs to
     */
    store_id: number;
    /**
     * The full name of the customer
     */
    name: string;
    /**
     * The email address of the customer
     */
    email: string;
    /**
     * The email marketing status of the customer.
     */
    status:
      | "subscribed"
      | "unsubscribed"
      | "archived"
      | "requires_verification"
      | "invalid_email"
      | "bounced";
    /**
     * The city of the customer
     */
    city: string;
    /**
     * The region of the customer
     */
    region: string;
    /**
     * The country of the customer
     */
    country: string;
    /**
     * A positive integer in cents representing the total revenue from the customer (USD).
     */
    total_revenue_currency: number;
    /**
     * A positive integer in cents representing the monthly recurring revenue from the customer (USD).
     */
    mrr: number;
    /**
     * The formatted status of the customer.
     */
    status_formatted: string;
    /**
     * The formatted country of the customer.
     */
    country_formatted: string;
    /**
     * A human-readable string representing the total revenue from the customer (e.g. $9.99).
     */
    total_revenue_currency_formatted: string;
    /**
     * A human-readable string representing the monthly recurring revenue from the customer (e.g. $9.99).
     */
    mrr_formatted: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
  };
  type: LemonsqueezyDataType.customers;
  id: string;
}

export interface ListAllCustomersOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return checkouts belonging to the store with this ID
   */
  storeId?: string;
  /**
   * Only return customers where the email field is equal to this email address.
   */
  email?: string;
}

export type ListAllCustomersResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezyCustomer>
>;

export interface RetrieveCustomerOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveCustomerResult =
  BaseLemonsqueezyResponse<LemonsqueezyCustomer>;
