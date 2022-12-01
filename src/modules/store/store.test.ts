import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllStores } from ".";

describe.concurrent("Store", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve store", async () => {
    expect(true).toEqual(true);
  });

  it("List all stores", async () => {
    const stores = await listAllStores({
      apiKey,
    });

    expect(stores).toBeDefined();
    expect(Array.isArray(stores.data)).toBe(true);
    expect(stores.errors).toBeUndefined();
  });
});
