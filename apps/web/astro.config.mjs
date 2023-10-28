import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8080,
  },
  site: "https://jurica-montel.cz",
  integrations: [react(), tailwind(), sitemap(), prefetch()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
