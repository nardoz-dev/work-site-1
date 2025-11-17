// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import cookieconsent from '@jop-software/astro-cookieconsent';

export default defineConfig({
  output: 'static',
  
  // Configurazioni per GitHub Pages
  site: 'https://nardoz-dev.github.io', 
  base: '/',
  // base: '/work-site-1',
  
  integrations: [react(), sitemap(), partytown(), 
    cookieconsent({
      dev: true,
      categories: {
        necessary: {
          enabled: true, 
          readOnly: true  
        },
        analytics: {
          enabled: false 
        }
      },
      
      // Personalizza i testi (in italiano)
      guiOptions: {
        consentModal: {
          layout: 'box', // 'box', 'cloud', 'bar'
          position: 'bottom right', // 'bottom', 'top', 'middle', ecc.
          title: 'Questo sito utilizza i cookie',
          description: 'Utilizziamo i cookie per analizzare il traffico e migliorare la tua esperienza. Accetta per aiutarci a migliorare.',
          acceptAllBtn: 'Accetta Tutti',
          acceptNecessaryBtn: 'Rifiuta',
          showCategoriesBtn: 'Personalizza'
        },
        preferencesModal: {
          title: 'Impostazioni Cookie',
          acceptAllBtn: 'Accetta Tutti',
          acceptNecessaryBtn: 'Rifiuta',
          savePreferencesBtn: 'Salva Preferenze',
          sections: [
            {
              title: 'Cookie Necessari',
              description: 'Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Cookie di Analisi (Google Analytics)',
              description: 'Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma anonima.',
              linkedCategory: 'analytics' 
            }
          ]
        }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
