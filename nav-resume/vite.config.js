import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Add this line to set the root directory to the project root
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
