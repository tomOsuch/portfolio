import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // domena własna (CNAME), nie /<repo>/
  server: {
    open: true,
  },
});