import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllOrders } from ".";

describe("Order", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve order", async () => {
    expect(true).toEqual(true);
  });

  it("List all orders", async () => {
    const orders = await listAllOrders({
      apiKey,
    });

    expect(orders).toBeDefined();
    expect(Array.isArray(orders.data)).toBe(true);
    expect(orders.errors).toBeUndefined();
  });
});
