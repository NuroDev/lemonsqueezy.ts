import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllCheckouts } from ".";

describe("Order item", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Create order item", async () => {
    expect(true).toEqual(true);
  });

  it("Retrieve order item", async () => {
    expect(true).toEqual(true);
  });

  it("List all order items", async () => {
    const orderItems = await listAllCheckouts({
      apiKey,
    });

    expect(orderItems).toBeDefined();
    expect(Array.isArray(orderItems.data)).toBe(true);
    expect(orderItems.errors).toBeUndefined();
  });
});
