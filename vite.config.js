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
    include: ["react", "react-dom", "image-webpack-loader"],
  },

  plugins: [
    react(),
    {
      name: "compress-image",
      transform: (code, id) => {
        if (/\.(jpe?g|png|gif|svg)$/i.test(id)) {
          return code.replace(/import\s.*from\s.*\;/g, ""); // Supprime les imports inutiles pour les images.
        }
        return code;
      },
    },
  ],
  server: {
    port: 3000,
  },
});
