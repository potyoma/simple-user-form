import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      // TODO: Add production url
      "/api/": {
        target:
          mode === "development"
            ? "http://localhost:3000"
            : "https://simple-user-form-production.up.railway.app",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
}));
