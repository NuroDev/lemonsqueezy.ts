import {
  listAllLicenseKeyInstances,
  retrieveLicenseKeyInstance,
} from "./licenseKeyInstance.action";

export { listAllLicenseKeyInstances, retrieveLicenseKeyInstance };

export default {
  listAllLicenseKeyInstances,
  retrieveLicenseKeyInstance,
} as const;
