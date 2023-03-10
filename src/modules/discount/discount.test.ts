import { describe, it, expect, beforeAll } from "vitest";

import { listAllDiscounts, retrieveDiscount } from ".";

describe.concurrent("Discount", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve discount", async () => {
    const discounts = await listAllDiscounts({
      apiKey,
    });
    if (!discounts.data.length) throw new Error("No discounts found");

    const discount = await retrieveDiscount({
      apiKey,
      id: discounts.data.at(0)!.id,
    });

    expect(discount).toBeDefined();
    expect(discount.data).toBeDefined();
    expect(discount.data).not.toBeNull();
    expect(discount.errors).toBeUndefined();
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
