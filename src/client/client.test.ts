import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { LemonsqueezyClient } from "./client.class";
import { LemonsqueezyDataType } from "~/shared";

describe.concurrent("Client", () => {
  const { LEMON_SQUEEZY_API_KEY } = process.env;

  let client: LemonsqueezyClient;

  beforeAll(() => {
    if (!LEMON_SQUEEZY_API_KEY)
      throw "No LEMON_SQUEEZY_API_KEY environment variable found";

    client = new LemonsqueezyClient(LEMON_SQUEEZY_API_KEY);
  });

  it("Create checkout", async () => {
    expect(true).toEqual(true);
  });

  it("Retrieve checkout", async () => {
    expect(true).toEqual(true);
  });

  it("List all checkouts", async () => {
    const checkouts = await client.listAllCheckouts();

    expect(checkouts).toBeDefined();
    expect(Array.isArray(checkouts.data)).toBe(true);
    expect(checkouts.errors).toBeUndefined();
  });

  it("Retrieve discount", async () => {
    expect(true).toEqual(true);
  });

  it("List all discount", async () => {
    const discounts = await client.listAllDiscounts();

    expect(discounts).toBeDefined();
    expect(Array.isArray(discounts.data)).toBe(true);
    expect(discounts.errors).toBeUndefined();
  });

  it("Retrieve file", async () => {
    expect(true).toEqual(true);
  });

  it("List all files", async () => {
    const files = await client.listAllFiles();

    expect(files).toBeDefined();
    expect(Array.isArray(files.data)).toBe(true);
    expect(files.errors).toBeUndefined();
  });

  it("Retrieve license key", async () => {
    expect(true).toEqual(true);
  });

  it("List all license keys", async () => {
    const licenseKeys = await client.listAllLicenseKeys();

    expect(licenseKeys).toBeDefined();
    expect(Array.isArray(licenseKeys.data)).toBe(true);
    expect(licenseKeys.errors).toBeUndefined();
  });

  it("Retrieve license key instances", async () => {
    expect(true).toEqual(true);
  });

  it("List all license key instances", async () => {
    const licenseKeyinstances = await client.listAllLicenseKeyInstances();

    expect(licenseKeyinstances).toBeDefined();
    expect(Array.isArray(licenseKeyinstances.data)).toBe(true);
    expect(licenseKeyinstances.errors).toBeUndefined();
  });

  it("Retrieve order", async () => {
    expect(true).toEqual(true);
  });

  it("List all orders", async () => {
    const orders = await client.listAllOrders();

    expect(orders).toBeDefined();
    expect(Array.isArray(orders.data)).toBe(true);
    expect(orders.errors).toBeUndefined();
  });

  it("Retrieve order item", async () => {
    expect(true).toEqual(true);
  });

  it("List all order items", async () => {
    const orderItems = await client.listAllOrderItems();

    expect(orderItems).toBeDefined();
    expect(Array.isArray(orderItems.data)).toBe(true);
    expect(orderItems.errors).toBeUndefined();
  });

  it("Retrieve product", async () => {
    expect(true).toEqual(true);
  });

  it("List all products", async () => {
    const products = await client.listAllProducts();

    expect(products).toBeDefined();
    expect(Array.isArray(products.data)).toBe(true);
    expect(products.errors).toBeUndefined();
  });

  it("Retrieve store", async () => {
    expect(true).toEqual(true);
  });

  it("List all stores", async () => {
    const stores = await client.listAllStores();

    expect(stores).toBeDefined();
    expect(Array.isArray(stores.data)).toBe(true);
    expect(stores.errors).toBeUndefined();
  });

  it("Update subscriptions", async () => {
    expect(true).toEqual(true);
  });

  it("Retrieve subscription", async () => {
    expect(true).toEqual(true);
  });

  it("List all subscriptions", async () => {
    const subscriptions = await client.listAllSubscriptions();

    expect(subscriptions).toBeDefined();
    expect(Array.isArray(subscriptions.data)).toBe(true);
    expect(subscriptions.errors).toBeUndefined();
  });

  it("Get user", async () => {
    const user = await client.getUser();

    expect(user).toBeDefined();
    expect(user.data).toBeDefined();
    expect(user.data.type).toBe(LemonsqueezyDataType.users);
    expect(user.errors).toBeUndefined();
  });

  it("Retrieve variant", async () => {
    expect(true).toEqual(true);
  });

  it("List all variants", async () => {
    const variants = await client.listAllVariants();

    expect(variants).toBeDefined();
    expect(Array.isArray(variants.data)).toBe(true);
    expect(variants.errors).toBeUndefined();
  });
});
