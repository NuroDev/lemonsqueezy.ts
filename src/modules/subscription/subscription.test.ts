import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listAllSubscriptions } from ".";

describe.concurrent("Subscription", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve subscription", async () => {
    expect(true).toEqual(true);
  });

  it("List all subscriptions", async () => {
    const subscriptions = await listAllSubscriptions({
      apiKey,
    });

    expect(subscriptions).toBeDefined();
    expect(Array.isArray(subscriptions.data)).toBe(true);
    expect(subscriptions.errors).toBeUndefined();
  });

  it("Update subscription", async () => {
    expect(true).toEqual(true);
  });
});
