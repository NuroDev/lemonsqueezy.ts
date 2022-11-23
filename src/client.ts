import fetch from "node-fetch";
import { join } from "node:path";

import {
  LemonsqueezyDataType,
  ListAllCheckoutsOptions,
  ListAllCheckoutsResult,
  RetrieveCheckoutOptions,
  RetrieveCheckoutResult,
} from "./types";

import type {
  BaseLemonsqueezyResponse,
  GetUserOptions,
  GetUserResult,
  LemonsqueezyOptions,
  ListAllDiscountsOptions,
  ListAllDiscountsResult,
  ListAllFilesOptions,
  ListAllFilesResult,
  ListAllLicenseKeyInstancesOptions,
  ListAllLicenseKeyInstancesResult,
  ListAllLicenseKeysOptions,
  ListAllLicenseKeysResult,
  ListAllOrderItemsOptions,
  ListAllOrderItemsResult,
  ListAllOrdersOptions,
  ListAllOrdersResult,
  ListAllProductsOptions,
  ListAllProductsResult,
  ListAllStoresOptions,
  ListAllStoresResult,
  ListAllSubscriptionsOptions,
  ListAllSubscriptionsResult,
  ListAllVariantsOptions,
  ListAllVariantsResult,
  PaginatedBaseLemonsqueezyResponse,
  RetrieveDiscountOptions,
  RetrieveDiscountResult,
  RetrieveFileOptions,
  RetrieveFileResult,
  RetrieveLicenseKeyInstanceOptions,
  RetrieveLicenseKeyInstanceResult,
  RetrieveLicenseKeyOptions,
  RetrieveLicenseKeyResult,
  RetrieveOrderItemOptions,
  RetrieveOrderItemResult,
  RetrieveOrderOptions,
  RetrieveOrderResult,
  RetrieveProductOptions,
  RetrieveProductResult,
  RetrieveStoreOptions,
  RetrieveStoreResult,
  RetrieveSubscriptionOptions,
  RetrieveSubscriptionResult,
  RetrieveVariantOptions,
  RetrieveVariantResult,
  UpdateSubscriptionOptions,
  UpdateSubscriptionResult,
} from "./types";

export class Lemonsqueezy {
  private _apiKey: string;

  constructor(apiKey: string) {
    this._apiKey = apiKey;
  }

  /**
   * Get User
   *
   * @description Retrieves the currently authenticated user
   *
   * @docs https://docs.lemonsqueezy.com/api/users#retrieve-the-authenticated-user
   *
   * @param {Object} [options]
   *
   * @returns A user object
   */
  public async getUser(options: GetUserOptions = {}) {
    return this._request<GetUserResult>({
      path: "/users/me",
      ...options,
    });
  }

  /**
   * Retrieve store
   *
   * @description Retrieves the store with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/stores#retrieve-a-store
   *
   * @param {String} options.id - The ID of the store to retrieve
   *
   * @returns A store object
   */
  public async retrieveStore(options: RetrieveStoreOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveStoreResult>({
      path: `/stores/${id}`,
      ...rest,
    });
  }

  /**
   * List all stores
   *
   * @description Returns a paginated list of stores
   *
   * @docs https://docs.lemonsqueezy.com/api/stores#list-all-stores
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of `store` objects ordered by name
   */
  public async listAllStores(options: ListAllStoresOptions = {}) {
    return this._request<ListAllStoresResult>({
      path: "/stores",
      ...options,
    });
  }

  /**
   * Retrieve product
   *
   * @description Retrieves the product with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/products#retrieve-a-product
   *
   * @param {String} options.id - The ID of the product to retrieve
   *
   * @returns A product object
   */
  public async retrieveProduct(options: RetrieveProductOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveProductResult>({
      path: `/products/${id}`,
      ...rest,
    });
  }

  /**
   * List all products
   *
   * @description Returns a paginated list of products
   *
   * @docs https://docs.lemonsqueezy.com/api/products#list-all-products
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of product objects ordered by `name`
   */
  public async listAllProducts(options: ListAllProductsOptions = {}) {
    const { storeId, ...rest } = options;

    return this._request<ListAllProductsResult>({
      params: {
        ...(storeId ? { store_id: storeId } : {}),
      },
      path: "/products",
      ...rest,
    });
  }

  /**
   * Retrieve variant
   *
   * @description Retrieves the variant with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/variants#retrieve-a-variant
   *
   * @param {String} options.id - The ID of the variant to retrieve
   *
   * @returns A variant object
   */
  public async retrieveVariant(options: RetrieveVariantOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveVariantResult>({
      path: `/variants/${id}`,
      ...rest,
    });
  }

  /**
   * List all variants
   *
   * @description Returns a paginated list of variants
   *
   * @docs https://docs.lemonsqueezy.com/api/variants#list-all-variants
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of variant objects ordered by sort
   */
  public async listAllVariants(options: ListAllVariantsOptions = {}) {
    const { productId, ...rest } = options;

    return this._request<ListAllVariantsResult>({
      params: {
        ...(productId ? { product_id: productId } : {}),
      },
      path: "/variants",
      ...rest,
    });
  }

  /**
   * Retrieve file
   *
   * @description Retrieves the file with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/files#retrieve-a-file
   *
   * @param {String} options.id - The ID of the file to retrieve
   *
   * @returns A file object
   */
  public async retrieveFile(options: RetrieveFileOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveFileResult>({
      path: `/files/${id}`,
      ...rest,
    });
  }

  /**
   * List all files
   *
   * @description Returns a paginated list of files
   *
   * @docs https://docs.lemonsqueezy.com/api/files#list-all-files
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of file objects ordered by `sort`
   */
  public async listAllFiles(options: ListAllFilesOptions = {}) {
    const { variantId, ...rest } = options;

    return this._request<ListAllFilesResult>({
      params: {
        ...(variantId ? { variant_id: variantId } : {}),
      },
      path: "/files",
      ...rest,
    });
  }

  /**
   * Retrieve order
   *
   * @description Retrieves the order with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/orders#retrieve-an-order
   *
   * @param {String} options.id - The ID of the order to retrieve
   *
   * @returns A order object
   */
  public async retrieveOrder(options: RetrieveOrderOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveOrderResult>({
      path: `/orders/${id}`,
      ...rest,
    });
  }

  /**
   * List all orders
   *
   * @description Returns a paginated list of orders
   *
   * @docs https://docs.lemonsqueezy.com/api/orders#list-all-orders
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of file objects ordered by `sort`
   */
  public async listAllOrders(options: ListAllOrdersOptions = {}) {
    const { storeId, userEmail, ...rest } = options;

    return this._request<ListAllOrdersResult>({
      params: {
        ...(storeId ? { store_id: storeId } : {}),
        ...(userEmail ? { user_email: userEmail } : {}),
      },
      path: "/orders",
      ...rest,
    });
  }

  /**
   * Retrieve order item
   *
   * @description Retrieves the order item with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/order-items#retrieve-an-order-item
   *
   * @param {String} options.id - The ID of the order item to retrieve
   *
   * @returns A order item object
   */
  public async retrieveOrderItem(options: RetrieveOrderItemOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveOrderItemResult>({
      path: `/order-items/${id}`,
      ...rest,
    });
  }

  /**
   * List all order items
   *
   * @description Returns a paginated list of order items
   *
   * @docs https://docs.lemonsqueezy.com/api/order-items#list-all-order-items
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of order item objects ordered by `id`
   */
  public async listAllOrderItems(options: ListAllOrderItemsOptions = {}) {
    const { orderId, productId, variantId, ...rest } = options;

    return this._request<ListAllOrderItemsResult>({
      params: {
        ...(orderId ? { order_id: orderId } : {}),
        ...(productId ? { product_id: productId } : {}),
        ...(variantId ? { variant_id: variantId } : {}),
      },
      path: "/order-items",
      ...rest,
    });
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
  public async retrieveSubscription(options: RetrieveSubscriptionOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveSubscriptionResult>({
      path: `/subscriptions/${id}`,
      ...rest,
    });
  }

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
  public async listAllSubscriptions(options: ListAllSubscriptionsOptions = {}) {
    const { orderId, orderItemId, productId, storeId, variantId, ...rest } =
      options;

    return this._request<ListAllSubscriptionsResult>({
      params: {
        ...(orderId ? { order_id: orderId } : {}),
        ...(orderItemId ? { order_item_id: orderItemId } : {}),
        ...(productId ? { product_id: productId } : {}),
        ...(storeId ? { store_id: storeId } : {}),
        ...(variantId ? { variant_id: variantId } : {}),
      },
      path: "/subscriptions",
      ...rest,
    });
  }

  /**
   * Update subscription
   *
   * @description Update an existing subscription to specific parameters. With this endpoint, you can:
   *
   *  - Upgrade & Downgrade a subscripion to a different Product or Variant
   *  - Change payment pause collection behaviour
   *  - Update the billing date for when payments are collected
   *
   * When changing the plan of a subscription, we prorate the charge for the next billing cycle.
   * For example, if a customer buys your product on April 1st for $50, they'll be charged $50 immediately.
   * If on April 15th they upgrade to your $100 product, on May 1st they'll be charged $125.
   * This is made up of $100 for renewing, $50 of used time on your upgraded $100 plan from April 15th - May 1st, and then a credited -$25 for unused time on your $50 plan.
   *
   * If downgrading a subscription, we'll issue a credit which is then applied on the next invoice.
   *
   * Changing a subscription plan may change the billing date or charge immediately if:
   *
   *  - The variant has a different billing cycle (from monthly to yearly, etc)
   *  - The subscription is no longer free, or is now free
   *  - A trial starts or ends
   *
   * @docs https://docs.lemonsqueezy.com/api/subscriptions#update-a-subscription
   *
   * @param {String} options.id - The ID of the subscription to retrieve
   *
   * @returns A subscription object
   */
  public async updateSubscription(options: UpdateSubscriptionOptions) {
    const {
      billingAnchor,
      cancelled,
      id,
      pause,
      productId,
      variantId,
      ...rest
    } = options;

    return this._request<UpdateSubscriptionResult>({
      data: {
        data: {
          attributes: {
            billing_anchor: billingAnchor,
            cancelled,
            pause,
            product_id: productId,
            variant_id: variantId,
          },
          id,
          type: LemonsqueezyDataType.SUBSCRIPTIONS,
        },
      },
      path: `/subscriptions/${id}`,
      method: "PATCH",
      ...rest,
    });
  }

  /**
   * Retrieve discount
   *
   * @description Retrieves the discount with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/discounts#retrieve-a-discount
   *
   * @param {String} options.id - The ID of the discount to retrieve
   *
   * @returns A discount object
   */
  public async retrieveDiscount(options: RetrieveDiscountOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveDiscountResult>({
      path: `/discounts/${id}`,
      ...rest,
    });
  }

  /**
   * List all discounts
   *
   * @description Returns a paginated list of discounts
   *
   * @docs https://docs.lemonsqueezy.com/api/discounts#list-all-discounts
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of discount objects ordered by `created_at`
   */
  public async listAllDiscounts(options: ListAllDiscountsOptions = {}) {
    const { storeId, ...rest } = options;

    return this._request<ListAllDiscountsResult>({
      params: {
        ...(storeId ? { store_id: storeId } : {}),
      },
      path: "/discounts",
      ...rest,
    });
  }

  /**
   * Retrieve license key
   *
   * @description Retrieves the license key with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/license-keys#retrieve-a-license-key
   *
   * @param {String} options.id - The ID of the license key to retrieve
   *
   * @returns A license key object
   */
  public async retrieveLicenseKey(options: RetrieveLicenseKeyOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveLicenseKeyResult>({
      path: `/license-keys/${id}`,
      ...rest,
    });
  }

  /**
   * List all license keys
   *
   * @description Returns a paginated list of license keys
   *
   * @docs https://docs.lemonsqueezy.com/api/license-keys#list-all-license-keys
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of license key objects ordered by `id`
   */
  public async listAllLicenseKeys(options: ListAllLicenseKeysOptions = {}) {
    const { orderId, orderItemId, productId, storeId, ...rest } = options;

    return this._request<ListAllLicenseKeysResult>({
      params: {
        ...(orderId ? { order_id: orderId } : {}),
        ...(orderItemId ? { order_item_id: orderItemId } : {}),
        ...(productId ? { product_id: productId } : {}),
        ...(storeId ? { store_id: storeId } : {}),
      },
      path: "/license-keys",
      ...rest,
    });
  }

  /**
   * Retrieve license key instance
   *
   * @description Retrieves the license key instance with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/license-key-instances#retrieve-a-license-key-instance
   *
   * @param {String} options.id - The ID of the license key instance to retrieve
   *
   * @returns A license key instance object
   */
  public async retrieveLicenseKeyInstance(
    options: RetrieveLicenseKeyInstanceOptions
  ) {
    const { id, ...rest } = options;

    return this._request<RetrieveLicenseKeyInstanceResult>({
      path: `/license-key-instances/${id}`,
      ...rest,
    });
  }

  /**
   * List all license key instances
   *
   * @description Returns a paginated list of license key instances
   *
   * @docs https://docs.lemonsqueezy.com/api/license-key-instances#list-all-license-key-instances
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of license key instance objects ordered by `id`
   */
  public async listAllLicenseKeyInstances(
    options: ListAllLicenseKeyInstancesOptions = {}
  ) {
    const { licenseKeyId, ...rest } = options;

    return this._request<ListAllLicenseKeyInstancesResult>({
      params: {
        ...(licenseKeyId ? { license_key_id: licenseKeyId } : {}),
      },
      path: "/license-key-instances",
      ...rest,
    });
  }

  /**
   * Retrieve checkout
   *
   * @description Retrieves the checkout with the given ID
   *
   * @docs https://docs.lemonsqueezy.com/api/checkouts#retrieve-a-checkout
   *
   * @param {String} options.id - The ID of the checkout to retrieve
   *
   * @returns A checkout object
   */
  public async retrieveCheckout(options: RetrieveCheckoutOptions) {
    const { id, ...rest } = options;

    return this._request<RetrieveCheckoutResult>({
      path: `/checkouts/${id}`,
      ...rest,
    });
  }

  /**
   * List all checkouts
   *
   * @description Returns a paginated list of checkouts
   *
   * @docs https://docs.lemonsqueezy.com/api/checkouts#list-all-checkouts
   *
   * @param {Object} [options]
   *
   * @returns Returns a paginated list of checkout objects ordered by `created_at` (descending)
   */
  public async listAllCheckouts(options: ListAllCheckoutsOptions = {}) {
    const { storeId, variantId, ...rest } = options;

    return this._request<ListAllCheckoutsResult>({
      params: {
        ...(storeId ? { store_id: storeId } : {}),
        ...(variantId ? { variant_id: variantId } : {}),
      },
      path: "/checkouts",
      ...rest,
    });
  }

  private async _request<
    TResponse extends
      | BaseLemonsqueezyResponse<any>
      | PaginatedBaseLemonsqueezyResponse<any>
  >({
    apiVersion = "v1",
    baseUrl = "https://api.lemonsqueezy.com",
    data,
    params,
    headers,
    method = "GET",
    path,
  }: LemonsqueezyOptions): Promise<TResponse> {
    try {
      const url = new URL(join(apiVersion, path), baseUrl);
      if (params && method === "GET")
        Object.entries(params).forEach(([key, value]) =>
          url.searchParams.append(key, value)
        );

      const response = await fetch(url.href, {
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${this._apiKey}`,
          "Content-Type": "application/vnd.api+json",
          ...headers,
        },
        method,
        ...(data && method !== "GET"
          ? {
              body: JSON.stringify(params),
            }
          : {}),
      });

      const json = (await response.json()) as TResponse;
      if (json.errors && json.errors.length > 0) throw json;

      return json;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
