import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/spinner-zilla/',
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'syntax-highlighter': ['react-syntax-highlighter'],
          'spinners': ['spinner-zilla']
        }
      }
    }
  },
  resolve: {
    alias: {
      'spinner-zilla': resolve(__dirname, '../src')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-syntax-highlighter']
  }
});
