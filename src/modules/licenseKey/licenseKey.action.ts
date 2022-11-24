import { Lemonsqueezy } from "~/client";

import type {
  ListAllLicenseKeysOptions,
  ListAllLicenseKeysResult,
  RetrieveLicenseKeyOptions,
  RetrieveLicenseKeyResult,
  SharedModuleOptions,
} from "~/types";

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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.listAllLicenseKeys(rest);
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
  const { apiKey, ...rest } = options;

  const client = new Lemonsqueezy(apiKey);

  return await client.retrieveLicenseKey(rest);
}
