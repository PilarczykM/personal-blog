import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://marcinpilarczyk.netlify.app',
  integrations: [mdx(), prefetch(), tailwind(), sitemap(), partytown()]
});