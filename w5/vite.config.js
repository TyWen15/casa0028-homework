import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 这里的路径必须是：/仓库名/子文件夹名/
  base: '/casa0028-homework/w5/', 
  plugins: [react(), tailwindcss()],
})