import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      // TODO: Add production url
      "/api":
        mode === "development" ? "http://localhost:3000/api" : "production", // the address that u serve in the backend
    },
  },
}));
