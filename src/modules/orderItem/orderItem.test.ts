import { describe, it, expect, beforeAll } from "vitest";

import { listAllOrderItems, retrieveOrderItem } from ".";

describe.concurrent("Order item", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve order item", async () => {
    const orderItems = await listAllOrderItems({
      apiKey,
    });
    if (!orderItems.data.length) throw new Error("No order items found");

    const orderItem = await retrieveOrderItem({
      apiKey,
      id: orderItems.data.at(0)!.id,
    });

    expect(orderItem).toBeDefined();
    expect(orderItem.data).toBeDefined();
    expect(orderItem.data).not.toBeNull();
    expect(orderItem.errors).toBeUndefined();
  });

  it("List all order items", async () => {
    const orderItems = await listAllOrderItems({
      apiKey,
    });

    expect(orderItems).toBeDefined();
    expect(Array.isArray(orderItems.data)).toBe(true);
    expect(orderItems.errors).toBeUndefined();
  });
});
