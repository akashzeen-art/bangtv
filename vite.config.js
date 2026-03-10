import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use different base paths depending on where we deploy:
// - GitHub Actions (GitHub Pages project site): /bangtv/
// - Vercel / local dev / other hosts: /
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/bangtv/' : '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

