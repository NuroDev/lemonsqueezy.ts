import { describe, it, expect, beforeAll } from "vitest";

import { listAllFiles } from ".";

describe.concurrent("File", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve file", async () => {
    expect(true).toEqual(true);
  });

  it("List all files", async () => {
    const files = await listAllFiles({
      apiKey,
    });

    expect(files).toBeDefined();
    expect(Array.isArray(files.data)).toBe(true);
    expect(files.errors).toBeUndefined();
  });
});
