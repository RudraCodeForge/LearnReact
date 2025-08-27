import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/LearnReact/bharat-clock/',   // 👈 ye sabse important hai GitHub Pages ke liye
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'eebd8687-e1d4-4fbb-9bf5-0b673ea37498-00-365guuefceliv.pike.replit.dev'
    ]
  }
});