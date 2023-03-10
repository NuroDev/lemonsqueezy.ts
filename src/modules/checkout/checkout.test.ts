import { describe, it, expect, beforeAll } from "vitest";
import { email, firstName, name, zipCode } from "minifaker";
import "minifaker/locales/en";

import { createCheckout, listAllCheckouts, retrieveCheckout } from ".";
import { listAllStores, listAllVariants } from "..";

import type { CreateCheckoutResult } from ".";

describe("Checkout", () => {
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY as string;
  let newCheckout: CreateCheckoutResult;

  beforeAll(() => {
    if (!apiKey) throw "No LEMON_SQUEEZY_API_KEY environment variable found";
  });

  it.concurrent("List all checkouts", async () => {
    const checkouts = await listAllCheckouts({
      apiKey,
    });

    expect(checkouts).toBeDefined();
    expect(Array.isArray(checkouts.data)).toBe(true);
    expect(checkouts.errors).toBeUndefined();
  });

  it("Create a checkout", async () => {
    if (newCheckout)
      throw new Error(
        "`newCheckout` is already initialised before a new checkout has been created."
      );

    const [stores, variants] = await Promise.all([
      listAllStores({
        apiKey,
      }),
      listAllVariants({
        apiKey,
      }),
    ]);

    newCheckout = await createCheckout({
      apiKey,
      checkout_data: {
        billing_address: {
          country: "US",
          zip: zipCode(),
        },
        email: email(),
        name: name(),
      },
      custom_price: 100000,
      product_options: {
        description: "Hello World",
        name: firstName(),
        receipt_button_text: "Buy now",
        receipt_link_url: "https://lemonsqueezy.com",
        receipt_thank_you_note: "Thank you for your purchase",
        redirect_url: "https://lemonsqueezy.com",
      },
      store: stores.data.at(0)!.id,
      variant: variants.data.at(0)!.id,
    });

    expect(newCheckout).toBeDefined();
    expect(newCheckout.data).toBeDefined();
    expect(newCheckout.data).not.toBeNull();
    expect(newCheckout.errors).toBeUndefined();
  });

  it("Retrieve checkout", async () => {
    if (!newCheckout)
      throw new Error(
        "`newCheckout` is not defined. Check the `Create a checkout` test has run first."
      );

    const checkout = await retrieveCheckout({
      apiKey,
      id: newCheckout.data.id,
    });

    expect(checkout).toBeDefined();
    expect(checkout.data).toBeDefined();
    expect(checkout.data).not.toBeNull();
    expect(checkout.errors).toBeUndefined();
  });
});
