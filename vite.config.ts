import { defineConfig } from "vite";
import { vitePlugin as remix } from "@tanstack/router-vite-plugin";
import { vitePlugin as tanstackStart } from "@tanstack/start-vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      adapter: "vercel",
    }),
    remix(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
