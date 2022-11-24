import { requestLemonSqueeze } from "~/shared";

import type {
  ListAllLicenseKeyInstancesOptions,
  ListAllLicenseKeyInstancesResult,
  RetrieveLicenseKeyInstanceOptions,
  RetrieveLicenseKeyInstanceResult,
} from "./licenseKeyInstance.types";
import type { SharedModuleOptions } from "~/shared";

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
export async function listAllLicenseKeyInstances(
  options: ListAllLicenseKeyInstancesOptions & SharedModuleOptions
): Promise<ListAllLicenseKeyInstancesResult> {
  const { licenseKeyId, ...rest } = options;

  return requestLemonSqueeze<ListAllLicenseKeyInstancesResult>({
    params: {
      ...(licenseKeyId ? { license_key_id: licenseKeyId } : {}),
    },
    path: "/license-key-instances",
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
export async function retrieveLicenseKeyInstance(
  options: RetrieveLicenseKeyInstanceOptions & SharedModuleOptions
): Promise<RetrieveLicenseKeyInstanceResult> {
  const { id, ...rest } = options;

  return requestLemonSqueeze<RetrieveLicenseKeyInstanceResult>({
    path: `/license-key-instances/${id}`,
    ...rest,
  });
}
