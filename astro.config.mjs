import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://gronka.pl', // Adres strony
  integrations: [react()],
  build: {
    assets: 'assets' // CRITICAL: Avoids underscore folder issues on GitHub Pages
  }
});
