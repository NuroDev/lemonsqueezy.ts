import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

interface LemonsqueezySubscriptionPause {
  /**
   * Defines payment pause behaviour, can be one of:
   *
   *  - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged
   *  - `free` - Offer your subscription services for free, whilst halting payment collection
   */
  mode: "void" | "free";
  /**
   * An ISO-8601 formatted date-time string indicating when the subscription will continue collecting payments
   *
   * @see https://en.wikipedia.org/wiki/ISO_8601
   */
  resumes_at: Date;
}

/**
 * @docs https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object
 */
export interface LemonsqueezySubscription {
  attributes: {
    /**
     * An integer representing a day of the month (`21` equals `21st day of the month`)
     *
     * This is the day of which subscription invoice payments are collected
     */
    billing_anchor: number;
    /**
     * A boolean indicating if the subscription has been cancelled
     */
    cancelled: boolean;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * If the subscription has been cancelled, this will be an ISO-8601 formatted date-time string indicating when the subscription expires
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    ends_at: Date | null;
    /**
     * The ID of the order associated with this subscription
     */
    order_id: number;
    /**
     * The ID of the order item associated with this subscription
     */
    order_item_id: number;
    /**
     * An object containing the payment collection pause behaviour options for the subscription, if set
     *
     * The pause object can be null, which indicates payment collection is not paused
     */
    pause: LemonsqueezySubscriptionPause | null;
    /**
     * The ID of the product associated with this subscription
     */
    product_id: number;
    /**
     * The name of the product
     */
    product_name: string;
    /**
     * An ISO-8601 formatted date-time string indicating the end of the current billing cycle, and when the next invoice will be issued
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    renews_at: Date;
    /**
     * The formatted status of the subscription
     */
    status_formatted: string;
    /**
     * The status of the subscription
     *
     * One of `on_trial`, `active`, `cancelled`, `expired`
     */
    status: "on_trial" | "active" | "cancelled" | "expired";
    /**
     * The ID of the store this subscription belongs to
     */
    store_id: number;
    /**
     * The ID of the customer this subscription belongs to.
     */
    customer_id: number;
    /**
     * A boolean indicating if the returned subscription object was created within test mode
     */
    test_mode: boolean;
    /**
     * If the subscription has a free trial, this will be an ISO-8601 formatted date-time string indicating when the trial period ends
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    trial_ends_at: Date | null;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
    /**
     * An object of customer-facing URLs for managing the subscription
     */
    urls: {
      /**
       * A pre-signed URL for managing payment and billing information for the subscription
       *
       * This can be used in conjunction with Lemon.js to allow your customer to change their billing information from within your application
       *
       * The URL is valid for 24 hours from time of request
       *
       * @docs https://docs.lemonsqueezy.com/help/lemonjs/what-is-lemonjs
       */
      update_payment_method: string;
    };
    /**
     * The email address of the customer
     */
    user_email: string;
    /**
     * The full name of the customer
     */
    user_name: string;
    /**
     * The ID of the variant associated with this subscription
     */
    variant_id: number;
    /**
     * The name of the variant
     */
    variant_name: string;
  };
  type: LemonsqueezyDataType.subscriptions;
  id: string;
}

export interface ListAllSubscriptionsOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return subscriptions belonging to the order with this ID
   */
  orderId?: string;
  /**
   * Only return subscriptions belonging to the order item with this ID
   */
  orderItemId?: string;
  /**
   * Only return subscriptions belonging to the product with this ID
   */
  productId?: string;
  /**
   * Only return subscriptions belonging to the store with this ID
   */
  storeId?: string;
  /**
   * Only return subscriptions belonging to the variant with this ID
   */
  variantId?: string;
}

export type ListAllSubscriptionsResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezySubscription>
>;

export interface RetrieveSubscriptionOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveSubscriptionResult =
  BaseLemonsqueezyResponse<LemonsqueezySubscription>;

export interface UpdateSubscriptionOptions extends SharedLemonsqueezyOptions {
  /**
   * An integer representing a day of the month (`21` equals `21st day of the month`).
   * This is the day of which subscription invoice payments are collected.
   *
   * Setting this value to a valid integer (1-31) will set the billing anchor to the next occurrence of that day.
   * For example, if on the 21st of January you set the subscription billing anchor to the 1st, the next occurrence of that day is February 1st.
   * All invoices from that point on will be generated on the 1st of the month
   *
   * When setting a new billing anchor day, we calculate the next occurrence and issue a paid, prorated trial which ends on the next occurrence date.
   * When the trial ends, the customer is charged for the full prorated amount
   */
  billingAnchor?: number;
  /**
   * Set as `true` to cancel the subscription.
   *
   * You can uncancel (before the `ends_at` date) by setting to `false`
   */
  cancelled?: boolean;
  id: string;
  /**
   * An object containing the payment collection pause behaviour options for the subscription
   */
  pause?: LemonsqueezySubscriptionPause;
  /**
   * The ID of the Product Object you want to switch this subscription to.
   *
   * If set, requires a Variant Object ID
   *
   * @docs https://docs.lemonsqueezy.com/api/products
   * @docs https://docs.lemonsqueezy.com/api/variants
   */
  productId: string;
  /**
   * The ID of the Variant Object you want to switch this subscription to.
   *
   * Required if `product_id` set
   *
   * @docs https://docs.lemonsqueezy.com/api/variants
   */
  variantId: string;
   * If true, any updates to the subscription will be charged immediately.
   *
   * Required if `product_id` set
   *
   * @docs https://docs.lemonsqueezy.com/guides/developer-guide/managing-subscriptions#handling-proration
   */
  invoiceImmediately?: boolean
   * If true, any updates to the subscription will be charged immediately but will not be prorated. 
   * Note that this will override the invoice_immediately option if enabled.
   *
   * Required if `product_id` set
   *
   * @docs https://docs.lemonsqueezy.com/guides/developer-guide/managing-subscriptions#handling-proration
   */
  disableProrations?: boolean
}

export type UpdateSubscriptionResult =
  BaseLemonsqueezyResponse<LemonsqueezySubscription>;
