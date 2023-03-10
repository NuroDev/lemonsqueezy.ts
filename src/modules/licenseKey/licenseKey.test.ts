import { describe, it, expect, beforeAll } from "vitest";

import { listAllLicenseKeys, retrieveLicenseKey } from ".";

describe.concurrent("License Key", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve license key", async () => {
    const licenseKeys = await listAllLicenseKeys({
      apiKey,
    });
    console.log(licenseKeys);
    if (!licenseKeys.data.length) throw new Error("No license keys found");

    const licenseKey = await retrieveLicenseKey({
      apiKey,
      id: licenseKeys.data.at(0)!.id,
    });

    expect(licenseKey).toBeDefined();
    expect(licenseKey.data).toBeDefined();
    expect(licenseKey.data).not.toBeNull();
    expect(licenseKey.errors).toBeUndefined();
  });

  it("List all license keys", async () => {
    const licenseKeys = await listAllLicenseKeys({
      apiKey,
    });

    expect(licenseKeys).toBeDefined();
    expect(Array.isArray(licenseKeys.data)).toBe(true);
    expect(licenseKeys.errors).toBeUndefined();
  });
});
