import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        services: resolve(process.cwd(), 'services.html'),
        portfolio: resolve(process.cwd(), 'portfolio.html'),
        contact: resolve(process.cwd(), 'contact.html'),
        privacyPolicy: resolve(process.cwd(), 'privacy-policy.html'),
        refundPolicy: resolve(process.cwd(), 'refund-policy.html'),
        termsAndConditions: resolve(process.cwd(), 'terms-and-conditions.html'),
      },
    },
  },
})
