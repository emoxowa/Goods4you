import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  esbuild: {
    jsxInject: `
import React from 'react';
`,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
})
