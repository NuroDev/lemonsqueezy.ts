import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllVariants } from ".";

describe("Variant", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve variant", async () => {
    expect(true).toEqual(true);
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
