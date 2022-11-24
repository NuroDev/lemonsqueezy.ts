import { defineConfig } from "tsup";

import type { Options } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

const baseConfigOptions: Options = {
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  minify: isProduction,
  sourcemap: true,
  splitting: false,
};

export default defineConfig([
  {
    ...baseConfigOptions,
    entryPoints: {
      index: "src/index.ts",
      types: "src/types.ts",
    },
  },
  {
    ...baseConfigOptions,
    entry: {
      index: "src/modules/index.ts",
      ...Object.fromEntries(
        [
          "checkout",
          "discount",
          "file",
          "licenseKey",
          "licenseKeyInstance",
          "order",
          "orderItem",
          "product",
          "store",
          "subscription",
          "user",
          "variant",
        ].map((module) => [module, `src/modules/${module}/index.ts`])
      ),
    },
    outDir: "dist/modules",
  },
]);
