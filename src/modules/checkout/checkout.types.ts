import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

export interface LemonsqueezyBillingAddress {
  /**
   * A pre-filled billing address country in a ISO 3166-1 alpha-2 format
   *
   * @see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  country?: string;
  /**
   * A pre-filled billing address zip/postal code
   */
  zip?: string;
}

export interface LemonsqueezyCheckoutData {
  billing_address?: LemonsqueezyBillingAddress;
  /**
   * An object containing any custom data to be passed to the checkout
   */
  custom?: Array<any>;
  /**
   * A pre-filled discount code
   */
  discount_code?: string;
  /**
   * A pre-filled email address
   */
  email?: string;
  /**
   * A pre-filled name
   */
  name?: string;
  /**
   * A pre-filled tax number
   */
  tax_number?: string;
}

export interface LemonsqueezyCheckoutOptions {
  /**
   * A custom hex color to use for the checkout button
   */
  button_color?: `#${string}`;
  /**
   * If `true`, use the dark theme
   */
  dark?: boolean;
  /**
   * If `false`, hide the product description
   */
  desc?: boolean;
  /**
   * If `false`, hide the discount code field
   */
  discount?: boolean;
  /**
   * If `true`, show the checkout overlay
   *
   * @docs https://docs.lemonsqueezy.com/help/checkout/checkout-overlay
   */
  embed?: boolean;
  /**
   * If `false`, hide the store logo
   */
  logo?: boolean;
  /**
   * If `false`, hide the product media
   */
  media?: boolean;
}

export interface LemonsqueezyCheckoutPreview {
  currency_rate: number;
  currency: string;
  discount_total_formatted: string;
  discount_total_usd: number;
  discount_total: number;
  subtotal_formatted: string;
  subtotal_usd: number;
  subtotal: number;
  tax_formatted: string;
  tax_usd: number;
  tax: number;
  total_formatted: string;
  total_usd: number;
  total: number;
}

export interface LemonsqueezyProductOptions {
  /**
   * A custom description for the product
   */
  description: string;
  /**
   * An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled
   */
  enabled_variants?: Array<string>;
  /**
   * An array of image URLs to use as the product's media
   */
  media?: Array<string>;
  /**
   * A custom name for the product
   */
  name: string;
  /**
   * A custom text to use for the order receipt email button
   */
  receipt_button_text: string;
  /**
   * A custom URL to use for the order receipt email button
   */
  receipt_link_url: string;
  /**
   * A custom thank you note to use for the order receipt email
   */
  receipt_thank_you_note: string;
  /**
   * A custom URL to redirect to after a successful purchase
   */
  redirect_url: string;
}

/**
 * @docs https://docs.lemonsqueezy.com/api/checkouts#the-checkout-object
 */
export interface LemonsqueezyCheckout {
  attributes: {
    /**
     * An object containing any prefill or custom data to be used in the checkout
     *
     * @docs https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields
     * @docs https://docs.lemonsqueezy.com/help/checkout/passing-custom-data
     */
    checkout_data: LemonsqueezyCheckoutData;
    /**
     * An object containing checkout options for this checkout
     */
    checkout_options: LemonsqueezyCheckoutOptions;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * If the value is not `null`, this represents a positive integer in cents representing the custom price of the variant
     */
    custom_price: number | null;
    /**
     * An ISO-8601 formatted date-time string indicating when the checkout expires
     *
     * Can be `null` if the checkout is perpetual
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    expires_at: Date | null;
    preview: LemonsqueezyCheckoutPreview;
    /**
     * An object containing any overridden product options for this checkout
     */
    product_options: LemonsqueezyProductOptions;
    /**
     * The ID of the store this checkout belongs to
     */
    store_id: number;
    /**
     * A boolean indicating if the returned checkout object was created within test mode
     */
    test_mode: boolean;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
    /**
     * The unique URL to access the checkout
     *
     * Note: for security reasons, download URLs are signed
     *
     * If the checkout `expires_at` is set, the URL will expire after the specified time
     */
    url: string;
    /**
     * The ID of the variant associated with this checkout
     */
    variant_id: number;
  };
  type: LemonsqueezyDataType.checkouts;
  id: string;
}

export interface CreateCheckoutOptions extends SharedLemonsqueezyOptions {
  /**
   * An object containing any prefill or custom data to be used in the checkout
   *
   * @docs https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields
   * @docs https://docs.lemonsqueezy.com/help/checkout/passing-custom-data
   */
  checkout_data?: LemonsqueezyCheckoutData;
  /**
   * An object containing checkout options for this checkout
   */
  checkout_options?: LemonsqueezyCheckoutOptions;
  /**
   * A positive integer in cents representing the custom price of the variant.
   *
   * Note: If the product purchased is a subscription, this custom price is used
   * for all renewal payments. If the subscription's variant changes in the
   * future (i.e. the customer is moved to a different subscription "tier") the
   * new variant's price will be used from that moment forward.
   */
  custom_price?: number;
  /**
   * An ISO-8601 formatted date-time string indicating when the checkout expires
   *
   * Can be `null` if the checkout is perpetual
   *
   * @see https://en.wikipedia.org/wiki/ISO_8601
   */
  expires_at?: Date | null;
  /**
   * A boolean indicating whether to return a preview of the checkout.
   *
   * If `true`, the checkout will include a `preview` object with the checkout preview data.
   */
  preview?: boolean;
  /**
   * An object containing any overridden product options for this checkout.
   */
  product_options?: LemonsqueezyProductOptions;
  /**
   * The ID of the store this checkout belongs to.
   */
  store: string;
  /**
   * The ID of the variant associated with this checkout.
   *
   * Note: by default, all variants of the related product will be shown in the checkout, with
   * your selected variant highlighted. If you want hide to other variants, you can utilise
   * the `product_options.enabled_variants` option to determine which variant(s) are
   * displayed in the checkout.
   */
  variant: string;
}

export interface CreateCheckoutBody {
  data: {
    type: LemonsqueezyDataType.checkouts;
    attributes: Omit<CreateCheckoutOptions, "store" | "variant">;
    relationships: {
      store: {
        data: {
          id: string;
          type: LemonsqueezyDataType.stores;
        };
      };
      variant: {
        data: {
          id: string;
          type: LemonsqueezyDataType.variants;
        };
      };
    };
  };
}

export type CreateCheckoutResult =
  BaseLemonsqueezyResponse<LemonsqueezyCheckout>;

export interface ListAllCheckoutsOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return checkouts belonging to the store with this ID
   */
  storeId?: string;
  /**
   * Only return checkouts belonging to the variant with this ID
   */
  variantId?: string;
}

export type ListAllCheckoutsResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezyCheckout>
>;

export interface RetrieveCheckoutOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveCheckoutResult =
  BaseLemonsqueezyResponse<LemonsqueezyCheckout>;
