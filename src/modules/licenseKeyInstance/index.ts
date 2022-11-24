import {
  listAllLicenseKeyInstances,
  retrieveLicenseKeyInstance,
} from "./licenseKeyInstance.action";

export { listAllLicenseKeyInstances, retrieveLicenseKeyInstance };

export type {
  LemonsqueezyLicenseKeyInstance,
  ListAllLicenseKeyInstancesOptions,
  ListAllLicenseKeyInstancesResult,
  RetrieveLicenseKeyInstanceOptions,
  RetrieveLicenseKeyInstanceResult,
} from "./licenseKeyInstance.types";

export default {
  listAllLicenseKeyInstances,
  retrieveLicenseKeyInstance,
} as const;
