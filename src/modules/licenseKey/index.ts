import { listAllLicenseKeys, retrieveLicenseKey } from "./licenseKey.action";

export { listAllLicenseKeys, retrieveLicenseKey };

export type {
  LemonsqueezyLicenseKey,
  ListAllLicenseKeysOptions,
  ListAllLicenseKeysResult,
  RetrieveLicenseKeyOptions,
  RetrieveLicenseKeyResult,
} from "./licenseKey.types";

export default {
  listAllLicenseKeys,
  retrieveLicenseKey,
} as const;
