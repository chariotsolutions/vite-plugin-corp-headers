import { defineConfig } from "vite";
import { pluginCORPHeaders } from "../src/index";

export default defineConfig({
  plugins: [
    pluginCORPHeaders(),
  ],
});

