import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175
  },
  optimizeDeps: {
    include: [
      'react-github-calendar',
      'react-fast-marquee',
      'react-simple-typewriter',
      'react-tsparticles',
      'tsparticles-slim'
    ]
  }
})