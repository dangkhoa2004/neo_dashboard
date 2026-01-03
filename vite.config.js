import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  // --- ADD THIS SECTION BELOW ---
  build: {
    sourcemap: false,       // Disabling this saves a massive amount of RAM
    cssCodeSplit: true,    // Split CSS to keep individual file processing small
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      maxParallelFileOps: 2, // Force Vite to process fewer files at once to save memory
      output: {
        manualChunks: undefined, // Let Vite handle chunks normally
      }
    }
  }
})