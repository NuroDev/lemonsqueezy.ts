import { describe, it, expect, beforeAll } from "vitest";

import { listAllVariants, retrieveVariant } from ".";

describe.concurrent("Variant", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve variant", async () => {
    const variants = await listAllVariants({
      apiKey,
    });
    if (!variants.data.length) throw new Error("No variants found");

    const variant = await retrieveVariant({
      apiKey,
      id: variants.data.at(0)!.id,
    });

    expect(variant).toBeDefined();
    expect(variant.data).toBeDefined();
    expect(variant.data).not.toBeNull();
    expect(variant.errors).toBeUndefined();
  });

  it("List all variants", async () => {
    const variants = await listAllVariants({
      apiKey,
    });

    expect(variants).toBeDefined();
    expect(Array.isArray(variants.data)).toBe(true);
    expect(variants.errors).toBeUndefined();
  });
});
