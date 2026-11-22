import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hosts extras liberados apenas em desenvolvimento (previews por túnel).
// Ex.: VITE_DEV_ALLOWED_HOSTS=abc.preview.example.com npm run dev
const extraAllowedHosts = (process.env.VITE_DEV_ALLOWED_HOSTS ?? '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean)

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    ...(extraAllowedHosts.length > 0 ? { allowedHosts: extraAllowedHosts } : {}),
  },
})
