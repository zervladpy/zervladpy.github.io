import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://zervladpy.github.io",
  base: "/portfolio/",
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "ru", "pt", "it"]
  },
  integrations: [tailwind()]
});