// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  
  // Configurazioni per GitHub Pages
  site: 'https://nardoz-dev.github.io', 
  base: '/work-site-1',
  
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});