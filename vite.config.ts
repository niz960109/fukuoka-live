// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 設置基礎路徑為您的 GitHub 倉庫名稱
  base: '/fukuoka-live/', 
});
