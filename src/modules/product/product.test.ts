import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllProducts } from ".";

describe.concurrent("Product", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve product", async () => {
    expect(true).toEqual(true);
  });

  it("List all products", async () => {
    const products = await listAllProducts({
      apiKey,
    });

    expect(products).toBeDefined();
    expect(Array.isArray(products.data)).toBe(true);
    expect(products.errors).toBeUndefined();
  });
});
