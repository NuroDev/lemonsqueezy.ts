import { describe, it, expect, beforeAll } from "vitest";

import { listAllProducts, retrieveProduct } from ".";

describe.concurrent("Product", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve product", async () => {
    const products = await listAllProducts({
      apiKey,
    });
    if (!products.data.length) throw new Error("No products found");

    const product = await retrieveProduct({
      apiKey,
      id: products.data.at(0)!.id,
    });

    expect(product).toBeDefined();
    expect(product.data).toBeDefined();
    expect(product.data).not.toBeNull();
    expect(product.errors).toBeUndefined();
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
