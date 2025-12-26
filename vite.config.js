import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // QUAN TRỌNG: Cho phép truy cập từ IP công khai
    port: 5173,      // Cố định cổng 5173
  }
})