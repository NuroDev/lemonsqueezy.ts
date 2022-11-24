import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { Lemonsqueezy } from "./client.class";

describe("Client", () => {
  const { LEMON_SQUEEZY_API_KEY } = process.env;

  let client: Lemonsqueezy;

  beforeAll(() => {
    if (!LEMON_SQUEEZY_API_KEY)
      throw "No LEMON_SQUEEZY_API_KEY environment variable found";

    client = new Lemonsqueezy(LEMON_SQUEEZY_API_KEY);
  });

  describe("Checkout", () => {
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
  });

  describe("Discount", () => {
    it("Retrieve discount", async () => {
      expect(true).toEqual(true);
    });

    it("List all discount", async () => {
      const discounts = await client.listAllDiscounts();

      expect(discounts).toBeDefined();
      expect(Array.isArray(discounts.data)).toBe(true);
      expect(discounts.errors).toBeUndefined();
    });
  });

  describe("File", () => {
    it("Retrieve file", async () => {
      expect(true).toEqual(true);
    });

    it("List all files", async () => {
      const files = await client.listAllFiles();

      expect(files).toBeDefined();
      expect(Array.isArray(files.data)).toBe(true);
      expect(files.errors).toBeUndefined();
    });
  });

  describe("License key", () => {
    it("Retrieve license key", async () => {
      expect(true).toEqual(true);
    });

    it("List all license keys", async () => {
      const licenseKeys = await client.listAllLicenseKeys();

      expect(licenseKeys).toBeDefined();
      expect(Array.isArray(licenseKeys.data)).toBe(true);
      expect(licenseKeys.errors).toBeUndefined();
    });
  });

  describe("License key instance", () => {
    it("Retrieve license key instances", async () => {
      expect(true).toEqual(true);
    });

    it("List all license key instances", async () => {
      const licenseKeyinstances = await client.listAllLicenseKeyInstances();

      expect(licenseKeyinstances).toBeDefined();
      expect(Array.isArray(licenseKeyinstances.data)).toBe(true);
      expect(licenseKeyinstances.errors).toBeUndefined();
    });
  });

  describe("Order", () => {
    it("Retrieve order", async () => {
      expect(true).toEqual(true);
    });

    it("List all orders", async () => {
      const orders = await client.listAllOrders();

      expect(orders).toBeDefined();
      expect(Array.isArray(orders.data)).toBe(true);
      expect(orders.errors).toBeUndefined();
    });
  });

  describe("Order Item", () => {
    it("Retrieve order item", async () => {
      expect(true).toEqual(true);
    });

    it("List all order items", async () => {
      const orderItems = await client.listAllOrderItems();

      expect(orderItems).toBeDefined();
      expect(Array.isArray(orderItems.data)).toBe(true);
      expect(orderItems.errors).toBeUndefined();
    });
  });

  describe("Product", () => {
    it("Retrieve product", async () => {
      expect(true).toEqual(true);
    });

    it("List all products", async () => {
      const products = await client.listAllProducts();

      expect(products).toBeDefined();
      expect(Array.isArray(products.data)).toBe(true);
      expect(products.errors).toBeUndefined();
    });
  });

  describe("Store", () => {
    it("Retrieve store", async () => {
      expect(true).toEqual(true);
    });

    it("List all stores", async () => {
      const stores = await client.listAllStores();

      expect(stores).toBeDefined();
      expect(Array.isArray(stores.data)).toBe(true);
      expect(stores.errors).toBeUndefined();
    });
  });

  describe("Subscription", () => {
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
  });

  describe("User", () => {
    it("Get user", async () => {
      expect(true).toEqual(true);
    });
  });

  describe("Variant", () => {
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
});
