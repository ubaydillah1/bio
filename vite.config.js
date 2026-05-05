import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.ubaydillah.tech/',
      dynamicRoutes: [
        '/',
        '/straight-deal',
        '/ravine-coffee',
        '/madura-kita',
        '/linea',
        '/stora'
      ]
    })
  ],
})
