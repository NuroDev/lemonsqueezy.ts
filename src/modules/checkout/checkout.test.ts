import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllCheckouts } from ".";

describe("Checkout", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve checkout", async () => {
    expect(true).toEqual(true);
  });

  it("List all checkouts", async () => {
    const checkouts = await listAllCheckouts({
      apiKey,
    });

    expect(checkouts).toBeDefined();
    expect(Array.isArray(checkouts.data)).toBe(true);
    expect(checkouts.errors).toBeUndefined();
  });
});
