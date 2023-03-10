import { describe, it, expect, beforeAll } from "vitest";

import { listAllOrders, retrieveOrder } from ".";

describe.concurrent("Order", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve order", async () => {
    const orders = await listAllOrders({
      apiKey,
    });
    if (!orders.data.length) throw new Error("No orders found");

    const order = await retrieveOrder({
      apiKey,
      id: orders.data.at(0)!.id,
    });

    expect(order).toBeDefined();
    expect(order.data).toBeDefined();
    expect(order.data).not.toBeNull();
    expect(order.errors).toBeUndefined();
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
