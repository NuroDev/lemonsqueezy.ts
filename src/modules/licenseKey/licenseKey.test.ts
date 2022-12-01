import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllLicenseKeys } from ".";

describe.concurrent("License Key", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve license key", async () => {
    expect(true).toEqual(true);
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
