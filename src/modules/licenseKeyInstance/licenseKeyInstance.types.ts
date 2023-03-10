import type {
  BaseLemonsqueezyResponse,
  LemonsqueezyDataType,
  PaginatedBaseLemonsqueezyResponse,
  SharedLemonsqueezyOptions,
} from "~/shared";

/**
 * @docs https://docs.lemonsqueezy.com/api/license-key-instances#the-license-key-instance-object
 */
export interface LemonsqueezyLicenseKeyInstance {
  attributes: {
    /**
     * An ISO-8601 formatted date-time string indicating when the object was created
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    created_at: Date;
    /**
     * The unique identifier (UUID) for this instance
     *
     * This is the `instance_id` returned when activating a license key
     *
     * @docs https://docs.lemonsqueezy.com/help/licensing/license-api#post-v1-licenses-activate
     */
    identifier: string;
    /**
     * The ID of the license key this instance belongs to
     */
    license_key_id: number;
    /**
     * The name of the license key instance
     */
    name: string;
    /**
     * An ISO-8601 formatted date-time string indicating when the object was last updated
     *
     * @see https://en.wikipedia.org/wiki/ISO_8601
     */
    updated_at: Date;
  };
  type: LemonsqueezyDataType.license_key_instances;
  id: string;
}

export interface ListAllLicenseKeyInstancesOptions
  extends SharedLemonsqueezyOptions {
  /**
   * Only return instances belonging to the license key with this ID
   */
  licenseKeyId?: string;
}

export type ListAllLicenseKeyInstancesResult =
  PaginatedBaseLemonsqueezyResponse<Array<LemonsqueezyLicenseKeyInstance>>;

export interface RetrieveLicenseKeyInstanceOptions
  extends SharedLemonsqueezyOptions {
  id: string;
}

export type RetrieveLicenseKeyInstanceResult =
  BaseLemonsqueezyResponse<LemonsqueezyLicenseKeyInstance>;
