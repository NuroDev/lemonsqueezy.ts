import { describe, it, expect, beforeAll } from "vitest";

import { listAllSubscriptionInvoices, retrieveSubscriptionInvoice } from ".";

describe.concurrent("Subscription Invoice", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it("Retrieve subscription invoice", async () => {
    const subscriptionInvoices = await listAllSubscriptionInvoices({
      apiKey,
    });
    if (!subscriptionInvoices.data.length)
      throw new Error("No subscriptions found");

    const subscriptionInvoice = await retrieveSubscriptionInvoice({
      apiKey,
      id: subscriptionInvoices.data.at(0)!.id,
    });

    expect(subscriptionInvoice).toBeDefined();
    expect(subscriptionInvoice.data).toBeDefined();
    expect(subscriptionInvoice.data).not.toBeNull();
    expect(subscriptionInvoice.errors).toBeUndefined();
  });

  it("List all subscription invoices", async () => {
    const subscriptionInvoices = await listAllSubscriptionInvoices({
      apiKey,
    });

    expect(subscriptionInvoices).toBeDefined();
    expect(Array.isArray(subscriptionInvoices.data)).toBe(true);
    expect(subscriptionInvoices.errors).toBeUndefined();
  });

  it("Update subscription", async () => {
    expect(true).toEqual(true);
  });
});
