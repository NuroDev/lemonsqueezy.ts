import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

/**
 * @docs https://docs.lemonsqueezy.com/api/order-items#the-order-item-object
 */
export interface LemonsqueezyOrderItem {
  attributes: {
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * The ID of the order this order item belongs to
     */
    order_id: number;
    /**
     * A positive integer in cents representing the price of this order item (in the order currency)
     *
     * Note, for “pay what you want” products the price will be whatever the customer entered at checkout
     */
    price: number;
    /**
     * The ID of the product associated with this order item
     */
    product_id: number;
    /**
     * The name of the product
     */
    product_name: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
    /**
     * The ID of the variant associated with this order item
     */
    variant_id: number;
    /**
     * The name of the variant
     */
    variant_name: string;
  };
  type: LemonsqueezyDataType.order_items;
  id: string | number;
}

export interface ListAllOrderItemsOptions extends SharedLemonsqueezyOptions {
  /**
   * Only return order items belonging to the order with this ID
   */
  orderId?: string;
  /**
   * Only return order items belonging to the product with this ID
   */
  productId?: string;
  /**
   * Only return order items belonging to the variant with this ID
   */
  variantId?: string;
}

export type ListAllOrderItemsResult = PaginatedBaseLemonsqueezyResponse<
  Array<LemonsqueezyOrderItem>
>;

export interface RetrieveOrderItemOptions extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveOrderItemResult =
  BaseLemonsqueezyResponse<LemonsqueezyOrderItem>;
