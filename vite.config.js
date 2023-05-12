/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    // ...
    jsx: {
      factory: "React.createElement",
      fragment: "React.Fragment",
    },
  },
  esbuild: {
    // Désactiver la transformation ESBuild pour react-image-compressor.js
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  plugins: [react()],
  server: {
    port: 3000,
  },
});
