import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const siteOrigin = () =>
  (process.env.VITE_SITE_URL || process.env.URL || '').replace(/\/$/, '')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-origin-in-html',
      transformIndexHtml(html) {
        return html.replace(/%SITE_ORIGIN%/g, siteOrigin())
      },
    },
  ],
})
