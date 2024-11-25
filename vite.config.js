import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    react(),
    purgecss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"], // Specify your files
    }),
  ],
  base: "/krishi-vikas-udyog/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
