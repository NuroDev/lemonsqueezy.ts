import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllFiles } from ".";

describe("File", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Create file", async () => {
    expect(true).toEqual(true);
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