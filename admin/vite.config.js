import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Local: http://localhost:3003  |  Production (same domain as site): VITE_BASE=/admin/
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: {
    host: true,
    port: 3003,
    strictPort: true,
    allowedHosts: true,
    proxy: {
      "/api": "http://localhost:5050",
      "/uploads": "http://localhost:5050",
    },
  },
});
