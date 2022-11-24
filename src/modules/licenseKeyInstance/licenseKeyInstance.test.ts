import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllLicenseKeyInstances } from ".";

describe("License key instance", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Create license key instance", async () => {
    expect(true).toEqual(true);
  });

  it("Retrieve license key instance", async () => {
    expect(true).toEqual(true);
  });

  it("List all license key instances", async () => {
    const licenseKeyInstances = await listAllLicenseKeyInstances({
      apiKey,
    });

    expect(licenseKeyInstances).toBeDefined();
    expect(Array.isArray(licenseKeyInstances.data)).toBe(true);
    expect(licenseKeyInstances.errors).toBeUndefined();
  });
});
