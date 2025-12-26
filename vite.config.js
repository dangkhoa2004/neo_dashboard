import { fileURLToPath, URL } from 'node:url' // 1. Thêm dòng này để xử lý đường dẫn
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 2. Cấu hình alias '@' trỏ về thư mục './src'
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0', // QUAN TRỌNG: Cho phép truy cập từ IP công khai
    port: 5173,      // Cố định cổng 5173
  }
})