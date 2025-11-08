// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  // Sostituisci con il tuo URL
  site: ' https://nardoz-dev.github.io',
  
  // Sostituisci con il nome della tua repository
  base: '/work-site-1',
  
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});