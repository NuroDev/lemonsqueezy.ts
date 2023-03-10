import { describe, it, expect, beforeAll } from "vitest";

import { listAllStores, retrieveStore } from ".";

describe.concurrent("Store", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve store", async () => {
    const stores = await listAllStores({
      apiKey,
    });
    if (!stores.data.length) throw new Error("No stores found");

    const store = await retrieveStore({
      apiKey,
      id: stores.data.at(0)!.id,
    });

    expect(store).toBeDefined();
    expect(store.data).toBeDefined();
    expect(store.data).not.toBeNull();
    expect(store.errors).toBeUndefined();
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
