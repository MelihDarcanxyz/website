import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://github.com/shishkin/astro-pagefind
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: "https://melihdarcan.xyz",
  integrations: [mdx(), robotsTxt(), sitemap(), pagefind()],
  markdown: {
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'rose-pine-moon',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});