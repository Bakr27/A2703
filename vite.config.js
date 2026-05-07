import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/A2703/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
      assetsInclude: ['**/*.pdf'],

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
        }
      }
    }
  }
})
