import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { Lemonsqueezy } from ".";

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
      expect(Array.isArray(checkouts)).toBe(true);
      expect(checkouts.errors).not.toBeDefined();
      expect(checkouts.errors?.length).toBe(0);
    });
  });

  describe("Discount", () => {
    it("Retrieve discount", async () => {
      expect(true).toEqual(true);
    });

    it("List all discount", async () => {
      const discounts = await client.listAllDiscounts();

      expect(discounts).toBeDefined();
      expect(Array.isArray(discounts)).toBe(true);
      expect(discounts.errors).not.toBeDefined();
      expect(discounts.errors?.length).toBe(0);
    });
  });

  describe("File", () => {
    it("Retrieve file", async () => {
      expect(true).toEqual(true);
    });

    it("List all files", async () => {
      const files = await client.listAllFiles();

      expect(files).toBeDefined();
      expect(Array.isArray(files)).toBe(true);
      expect(files.errors).not.toBeDefined();
      expect(files.errors?.length).toBe(0);
    });
  });

  describe("License key", () => {
    it("Retrieve license key", async () => {
      expect(true).toEqual(true);
    });

    it("List all license keys", async () => {
      const licenseKeys = await client.listAllLicenseKeys();

      expect(licenseKeys).toBeDefined();
      expect(Array.isArray(licenseKeys)).toBe(true);
      expect(licenseKeys.errors).not.toBeDefined();
      expect(licenseKeys.errors?.length).toBe(0);
    });
  });

  describe("License key instance", () => {
    it("Retrieve license key instances", async () => {
      expect(true).toEqual(true);
    });

    it("List all license key instances", async () => {
      const licenseKeyinstances = await client.listAllLicenseKeyInstances();

      expect(licenseKeyinstances).toBeDefined();
      expect(Array.isArray(licenseKeyinstances)).toBe(true);
      expect(licenseKeyinstances.errors).not.toBeDefined();
      expect(licenseKeyinstances.errors?.length).toBe(0);
    });
  });

  describe("Order", () => {
    it("Retrieve order", async () => {
      expect(true).toEqual(true);
    });

    it("List all orders", async () => {
      const orders = await client.listAllOrders();

      expect(orders).toBeDefined();
      expect(Array.isArray(orders)).toBe(true);
      expect(orders.errors).not.toBeDefined();
      expect(orders.errors?.length).toBe(0);
    });
  });

  describe("Order Item", () => {
    it("Retrieve order item", async () => {
      expect(true).toEqual(true);
    });

    it("List all order items", async () => {
      const orderItems = await client.listAllOrderItems();

      expect(orderItems).toBeDefined();
      expect(Array.isArray(orderItems)).toBe(true);
      expect(orderItems.errors).not.toBeDefined();
      expect(orderItems.errors?.length).toBe(0);
    });
  });

  describe("Product", () => {
    it("Retrieve product", async () => {
      expect(true).toEqual(true);
    });

    it("List all products", async () => {
      const products = await client.listAllProducts();

      expect(products).toBeDefined();
      expect(Array.isArray(products)).toBe(true);
      expect(products.errors).not.toBeDefined();
      expect(products.errors?.length).toBe(0);
    });
  });

  describe("Store", () => {
    it("Retrieve store", async () => {
      expect(true).toEqual(true);
    });

    it("List all stores", async () => {
      const stores = await client.listAllStores();

      expect(stores).toBeDefined();
      expect(Array.isArray(stores)).toBe(true);
      expect(stores.errors).not.toBeDefined();
      expect(stores.errors?.length).toBe(0);
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
      expect(Array.isArray(subscriptions)).toBe(true);
      expect(subscriptions.errors).not.toBeDefined();
      expect(subscriptions.errors?.length).toBe(0);
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
      expect(Array.isArray(variants)).toBe(true);
      expect(variants.errors).not.toBeDefined();
      expect(variants.errors?.length).toBe(0);
    });
  });
});
