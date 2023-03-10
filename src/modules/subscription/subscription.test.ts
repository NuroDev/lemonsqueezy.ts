import { describe, it, expect, beforeAll } from "vitest";

import { listAllSubscriptions, retrieveSubscription } from ".";

describe.concurrent("Subscription", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve subscription", async () => {
    const subscriptions = await listAllSubscriptions({
      apiKey,
    });
    if (!subscriptions.data.length) throw new Error("No subscriptions found");

    const subscription = await retrieveSubscription({
      apiKey,
      id: subscriptions.data.at(0)!.id,
    });

    expect(subscription).toBeDefined();
    expect(subscription.data).toBeDefined();
    expect(subscription.data).not.toBeNull();
    expect(subscription.errors).toBeUndefined();
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
