import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ayanciktaksi.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: { tr: 'tr-TR', en: 'en-GB', de: 'de-DE' },
      },
      filter: (page) => !page.includes('/tesekkurler'),
    }),
  ],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
