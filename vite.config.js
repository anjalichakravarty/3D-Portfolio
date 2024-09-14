import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: true,
    //hmr: process.env.NODE_ENV !== 'production',
    hmr: {
      overlay: false, // Disable HMR errors overlay
    }
  }
})
