import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: 'https://JoseMGT-31.github.io',
  base: 'coin-capital',
});