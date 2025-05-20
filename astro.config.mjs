// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMdx from 'remark-mdx';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { remarkModifiedTime } from './src/plugins/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://melihdarcan.dev",
  output: 'static',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), mdx()],

  markdown: {

    remarkPlugins: [
      remarkMdx,
      remarkReadingTime,
      remarkModifiedTime,
    ],

    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, {
        behavior: 'wrap',
      }],
    ],
  },

  experimental: {
    fonts: [{
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--main-font",
    }]
  }
});