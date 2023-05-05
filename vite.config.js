/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
  
});
