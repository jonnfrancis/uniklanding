import { defineConfig } from 'vite'

export default defineConfig({
  base: '/uniklanding/',
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': process.env
  }
})