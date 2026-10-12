import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ayanciktaksi.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/tesekkurler') }),
  ],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
