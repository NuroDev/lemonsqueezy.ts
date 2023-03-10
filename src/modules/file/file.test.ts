import { describe, it, expect, beforeAll } from "vitest";

import { listAllFiles, retrieveFile } from ".";

describe.concurrent("File", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve file", async () => {
    const files = await listAllFiles({
      apiKey,
    });
    if (!files.data.length) throw new Error("No files found");

    const file = await retrieveFile({
      apiKey,
      id: files.data.at(0)!.id,
    });

    expect(file).toBeDefined();
    expect(file.data).toBeDefined();
    expect(file.data).not.toBeNull();
    expect(file.errors).toBeUndefined();
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
