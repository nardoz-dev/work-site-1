// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  output: 'static',
  
  // Configurazioni per GitHub Pages
  site: 'https://nardoz-dev.github.io', 
  base: '/',
  // base: '/work-site-1',
  
  integrations: [react(), sitemap(), partytown()],
  vite: {
    plugins: [tailwindcss()]
  }
});