/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

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
    viteImagemin({
      // Options de configuration pour vite-plugin-imagemin
      gifsicle: {
        optimizationLevel: 3,
      },
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 5,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
