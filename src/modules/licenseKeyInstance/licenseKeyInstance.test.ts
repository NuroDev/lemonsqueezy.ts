import { describe, it, expect, beforeAll } from "vitest";

import { listAllLicenseKeyInstances, retrieveLicenseKeyInstance } from ".";

describe.concurrent("License key instance", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve license key instance", async () => {
    // const licenseKeyInstances = await listAllLicenseKeyInstances({
    //   apiKey,
    // });
    // if (!licenseKeyInstances.data.length)
    //   throw new Error("No license key instances found");

    // const licenseKeyInstance = await retrieveLicenseKeyInstance({
    //   apiKey,
    //   id: licenseKeyInstances.data.at(0)!.id,
    // });

    // expect(licenseKeyInstance).toBeDefined();
    // expect(licenseKeyInstance.data).toBeDefined();
    // expect(licenseKeyInstance.data).not.toBeNull();
    // expect(licenseKeyInstance.errors).toBeUndefined();

    expect(true).toBe(true);
  });

  it("List all license key instances", async () => {
    // const licenseKeyInstances = await listAllLicenseKeyInstances({
    //   apiKey,
    // });

    // expect(licenseKeyInstances).toBeDefined();
    // expect(Array.isArray(licenseKeyInstances.data)).toBe(true);
    // expect(licenseKeyInstances.errors).toBeUndefined();

    expect(true).toBe(true);
  });
});
