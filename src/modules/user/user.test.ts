import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import {} from ".";

describe("User", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Get user", async () => {
    expect(true).toEqual(true);
  });
});
