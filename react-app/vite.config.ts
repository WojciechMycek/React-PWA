import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sklep z biżuterią',
        short_name: 'Biżuteria',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#bfa37c',
        icons: [
          {
            src: "/logo-apki.jpg",
            sizes: '512x512',
            type: 'image/jpg',
          },
        ],
      },
    }),
  ],
});
