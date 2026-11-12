import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abhiitsolutions.in', // change to your real domain
  integrations: [sitemap()],
});
