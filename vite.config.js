import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    allowedHosts: ['apaportal.sanbi.ac.za', 'agari.africacdc.org', 'agari.sanbi.ac.za'],
    hmr: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});

