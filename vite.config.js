import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true, // This allows access from network (mobile devices)
    open: true
  },
  preview: {
    port: 8080,
    host: true
  }
})
