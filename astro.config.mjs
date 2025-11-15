// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  
  // Configurazioni per GitHub Pages
  site: 'https://nardoz-dev.github.io', 
  base: '/work-site-1',
  // base: '/',
  
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
