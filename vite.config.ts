import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite options tailored for Tauri to prevent timeout on hot reload
  server: {
    strictPort: true,
    watch: {
      // Debounce to prevent excess recompilation
      debounce: 500,
    },
  },
})
