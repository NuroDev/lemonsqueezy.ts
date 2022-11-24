import { requestLemonSqueeze } from "~/request";

import type {
  ListAllLicenseKeysOptions,
  ListAllLicenseKeysResult,
  RetrieveLicenseKeyOptions,
  RetrieveLicenseKeyResult,
} from "./licenseKey.types";
import type { SharedModuleOptions } from "~/types/shared";

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
export async function listAllLicenseKeys(
  options: ListAllLicenseKeysOptions & SharedModuleOptions
): Promise<ListAllLicenseKeysResult> {
  const { orderId, orderItemId, productId, storeId, ...rest } = options;

  return requestLemonSqueeze<ListAllLicenseKeysResult>({
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
export async function retrieveLicenseKey(
  options: RetrieveLicenseKeyOptions & SharedModuleOptions
): Promise<RetrieveLicenseKeyResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveLicenseKeyResult>({
    path: `/license-keys/${id}`,
    ...rest,
  });
}
