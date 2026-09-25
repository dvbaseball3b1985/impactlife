import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with the real domain before deploying
  site: 'https://impactlife.example.com',
  integrations: [sitemap()],
});
