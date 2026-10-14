import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeBase from './src/plugins/rehype-base.mjs';

// BASE_PATH lets the site preview at tangdru.github.io/andrewdesigns before the
// custom domain is pointed here; with the custom domain it is "/".
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://www.andrewdesigns.info';
const to = (path) => base.replace(/\/$/, '') + path;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [[rehypeBase, { base }]],
  },
  redirects: {
    '/new-page': to('/publications'),
    '/new-page-1': to('/'),
    '/ux-design': to('/'),
    '/foldersux': to('/'),
    '/missioncontrol-1': to('/missioncontrol'),
  },
});
