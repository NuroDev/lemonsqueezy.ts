import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/types/shared";

export type LemonsqueezyInterval = "day" | "week" | "month" | "year";

/**
 * @docs https://docs.lemonsqueezy.com/api/variants#the-variant-object
 */
export interface LemonsqueezyVariant {
  attributes: {
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * The description of the variant in HTML
     */
    description: string;
    /**
     * Has the value `true` if this variant has a free trial period
     *
     * Only available if the variant is a subscription
     */
    has_free_trial: boolean;
    /**
     * Has the value `true` if this variant should generate license keys for the customer on purchase
     */
    has_license_keys: boolean;
    /**
     * If this variant is a subscription, this is the number of intervals (specified in the `interval` attribute) between subscription billings
     *
     * For example, `interval=month` and `interval_count=3` bills every 3 months
     */
    interval_count: number | null;
    /**
     * If this variant is a subscription, this is the frequency at which a subscription is billed
     *
     * One of `day`, `week`, `month` or `year`
     */
    interval: LemonsqueezyInterval | null;
    /**
     * Has the value `true` if license keys should never expire
     *
     * Note: If the variant is a subscription, the license key expiration will be linked to the status of the subscription (e.g. the license will expire when the subscription expires)
     */
    is_license_length_unlimited: boolean;
    /**
     * Has the value `true` if license key activations are unlimited for this variant
     */
    is_license_limit_unlimited: boolean;
    /**
     * Has the value `true` if this variant is a subscription
     */
    is_subscription: boolean;
    /**
     * The maximum number of times a license key can be activated for this variant
     */
    license_activation_limit: number;
    /**
     * The unit linked with the `license_length_value` attribute. One of `days`, `months` or `years`
     *
     * For example, `license_length_value=3` and `license_length_unit=months` license keys will expire after 3 months
     */
    license_length_unit: string;
    /**
     * The number of units (specified in the `license_length_unit` attribute) until a license key expires
     */
    license_length_value: number;
    /**
     * If `pay_what_you_want` is `true`, this is the minimum price this variant can be purchased for, as a positive integer in cents
     */
    min_price: number;
    /**
     * The name of the variant
     */
    name: string;
    /**
     * Has the value `true` if this is a “pay what you want” variant where the price can be set by the customer at checkout
     */
    pay_what_you_want: false;
    /**
     * A positive integer in cents representing the price of the variant
     */
    price: number;
    /**
     * The ID of the product this variant belongs to
     */
    product_id: number;
    /**
     * The slug used to identify the variant
     */
    slug: string;
    /**
     * An integer representing the order of this variant when displayed on the checkout
     */
    sort: number;
    /**
     * The formatted status of the variant
     */
    status_formatted: string;
    /**
     * The status of the variant
     *
     * Either `pending`, `draft` or `published`
     *
     * If a variant has a `pending` status, it is considered the “default” variant and is not shown as a separate option at checkout
     */
    status: "pending" | "draft" | "published";
    /**
     * If `pay_what_you_want` is `true`, this is the suggested price for this variant shown at checkout, as a positive integer in cents
     */
    suggested_price: number;
    /**
     * If interval count of the free trial.
     *
     * For example, a variant with `trial_interval=day` and `trial_interval_count=14` would have a free trial that lasts 14 days
     */
    trial_interval_count: number;
    /**
     * The interval unit of the free trial
     *
     * One of `day`, `week`, `month` or `year`
     */
    trial_interval: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
  };
  type: LemonsqueezyDataType.VARIANTS;
  id: string | number;
}

export interface ListAllVariantsOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return variants belonging to the product with this ID
   */
  productId?: string;
}

export type ListAllVariantsResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezyVariant>
>;

export interface RetrieveVariantOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveVariantResult =
  BaseLemonsqueezyResponse<LemonsqueezyVariant>;
