// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkMdx from "remark-mdx";
import { remarkModifiedTime } from "./src/plugins/remark-modified-time.mjs";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

import og from "astro-og";

// https://astro.build/config
export default defineConfig({
  site: "https://melihdarcan.dev",
  output: "static",
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), mdx(), og()],

  markdown: {
    remarkPlugins: [
      remarkMdx,
      remarkReadingTime,
      remarkModifiedTime,
      remarkMath,
    ],

    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
      rehypeMathjax,
    ],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "JetBrains Mono",
        cssVariable: "--main-font",
      },
    ],
  },
});
