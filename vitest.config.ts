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
    setupFiles: "./setupTests.ts",
  },
})
