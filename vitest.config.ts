/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  test: {
    deps: {
      inline: ["minifaker"],
    },
    setupFiles: ["dotenv/config"],
  },
});
