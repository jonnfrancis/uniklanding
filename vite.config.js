import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': process.env
  }
})