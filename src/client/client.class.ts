import {
  createCheckout,
  CreateCheckoutOptions,
  getUser,
  GetUserOptions,
  listAllCheckouts,
  ListAllCheckoutsOptions,
  listAllDiscounts,
  ListAllDiscountsOptions,
  listAllFiles,
  ListAllFilesOptions,
  listAllLicenseKeyInstances,
  ListAllLicenseKeyInstancesOptions,
  listAllLicenseKeys,
  ListAllLicenseKeysOptions,
  listAllOrderItems,
  ListAllOrderItemsOptions,
  listAllOrders,
  ListAllOrdersOptions,
  listAllProducts,
  ListAllProductsOptions,
  listAllStores,
  ListAllStoresOptions,
  listAllSubscriptions,
  ListAllSubscriptionsOptions,
  listAllVariants,
  ListAllVariantsOptions,
  retrieveCheckout,
  RetrieveCheckoutOptions,
  retrieveDiscount,
  RetrieveDiscountOptions,
  retrieveFile,
  RetrieveFileOptions,
  retrieveLicenseKey,
  retrieveLicenseKeyInstance,
  RetrieveLicenseKeyInstanceOptions,
  RetrieveLicenseKeyOptions,
  retrieveOrder,
  retrieveOrderItem,
  RetrieveOrderItemOptions,
  RetrieveOrderOptions,
  retrieveProduct,
  RetrieveProductOptions,
  retrieveStore,
  RetrieveStoreOptions,
  retrieveSubscription,
  RetrieveSubscriptionOptions,
  retrieveVariant,
  RetrieveVariantOptions,
  updateSubscription,
  UpdateSubscriptionOptions,
} from "~/modules";

export class LemonsqueezyClient {
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
    return getUser({
      apiKey: this._apiKey,
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
    return retrieveStore({
      apiKey: this._apiKey,
      ...options,
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
    return listAllStores({
      apiKey: this._apiKey,
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
    return retrieveProduct({
      apiKey: this._apiKey,
      ...options,
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
    return listAllProducts({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveVariant({
      apiKey: this._apiKey,
      ...options,
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
    return listAllVariants({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveFile({
      apiKey: this._apiKey,
      ...options,
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
    return listAllFiles({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveOrder({
      apiKey: this._apiKey,
      ...options,
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
    return listAllOrders({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveOrderItem({
      apiKey: this._apiKey,
      ...options,
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
    return listAllOrderItems({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveSubscription({
      apiKey: this._apiKey,
      ...options,
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
    return listAllSubscriptions({
      apiKey: this._apiKey,
      ...options,
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
    return updateSubscription({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveDiscount({
      apiKey: this._apiKey,
      ...options,
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
    return listAllDiscounts({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveLicenseKey({
      apiKey: this._apiKey,
      ...options,
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
    return listAllLicenseKeys({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveLicenseKeyInstance({
      apiKey: this._apiKey,
      ...options,
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
    return listAllLicenseKeyInstances({
      apiKey: this._apiKey,
      ...options,
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
    return retrieveCheckout({
      apiKey: this._apiKey,
      ...options,
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
    return listAllCheckouts({
      apiKey: this._apiKey,
      ...options,
    });
  }

  /**
   * Create checkout
   *
   * @description Create a custom checkout. Use this endpoint to create a unique checkout URL for a specific variant
   *
   * @docs https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
   *
   * @returns A checkout object
   */
  public async createCheckout(options: CreateCheckoutOptions) {
    return createCheckout({
      apiKey: this._apiKey,
      ...options,
    });
  }
}
