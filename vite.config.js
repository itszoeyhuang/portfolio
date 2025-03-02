import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "@theme-toggles/react/css/Classic.css"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
