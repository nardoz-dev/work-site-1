// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  output: 'static',
  site: ' https://nardoz-dev.github.io',
  base: '/work-site-1',
  
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});