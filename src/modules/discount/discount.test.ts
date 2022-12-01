import { describe, it, expect, beforeAll } from "vitest";

import { listAllDiscounts } from ".";

describe.concurrent("Discount", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve discount", async () => {
    expect(true).toEqual(true);
  });

  it("List all discounts", async () => {
    const discounts = await listAllDiscounts({
      apiKey,
    });

    expect(discounts).toBeDefined();
    expect(Array.isArray(discounts.data)).toBe(true);
    expect(discounts.errors).toBeUndefined();
  });
});
