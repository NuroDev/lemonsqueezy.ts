import { listAllLicenseKeys, retrieveLicenseKey } from "./licenseKey.action";

export { listAllLicenseKeys, retrieveLicenseKey };

export default {
  listAllLicenseKeys,
  retrieveLicenseKey,
} as const;
