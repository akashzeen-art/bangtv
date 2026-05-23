import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path per host:
// - GitHub Actions (project site): /bangtv/
// - Vercel, demo.bangtv.world, local: /  (override with VITE_BASE_PATH if needed)
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const base =
  process.env.VITE_BASE_PATH ||
  (isGitHubPages ? '/bangtv/' : '/')

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

