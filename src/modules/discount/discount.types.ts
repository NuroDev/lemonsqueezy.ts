import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

/**
 * @docs https://docs.lemonsqueezy.com/api/discounts#the-discount-object
 */
export interface LemonsqueezyDiscount {
  attributes: {
    /**
     * The type of the amount. Either `percent` or `fixed`
     */
    amount_type: "percent" | "fixed";
    /**
     * The amount of discount to apply to the order
     *
     * Either a fixed amount or a percentage depending on the value of `amount_type`
     */
    amount: number;
    /**
     * The discount code that can be used at checkout
     */
    code: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * If `duration` is `repeating`, this specifies how many months the discount should apply
     */
    duration_in_months: number;
    /**
     * If the discount is applied to a subscription, this specifies how often the discount should be applied.
     *
     * One of `once`, `repeating`, `forever`
     */
    duration: "once" | "repeating" | "forever";
    /**
     * An ISO-8601 formatted date-time string indicating when the discount expires
     *
     * Can be `null` if no expiration date is specified
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    expires_at: Date | null;
    /**
     * Has the value `true` if the discount can only be redeemed a limited number of times
     */
    is_limited_redemptions: boolean;
    /**
     * Has the value `true` if the discount can only be applied to certain products/variants
     */
    is_limited_to_products: boolean;
    /**
     * If `is_limited_redemptions` is `true`, this is the maximum number of redemptions
     */
    max_redemptions: number;
    /**
     * The name of the discount
     */
    name: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the discount is valid from
     *
     * Can be `null` if no start date is specified
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    starts_at: Date | null;
    /**
     * The formatted status of the discount
     */
    status_formatted: string;
    /**
     * The status of the discount. Either `draft` or `published`
     */
    status: "draft" | "published";
    /**
     * The ID of the store this discount belongs to
     */
    store_id: number;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
  };
  type: LemonsqueezyDataType.discounts;
  id: string | number;
}

export interface ListAllDiscountsOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return discounts belonging to the store with this ID
   */
  storeId?: number;
}

export type ListAllDiscountsResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezyDiscount>
>;

export interface RetrieveDiscountOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveDiscountResult =
  BaseLemonsqueezyResponse<LemonsqueezyDiscount>;
