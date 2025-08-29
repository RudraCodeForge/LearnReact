import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      'eebd8687-e1d4-4fbb-9bf5-0b673ea37498-00-365guuefceliv.pike.replit.dev'
    ]
  }
});