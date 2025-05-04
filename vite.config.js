import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.lottie'],
  build: {
    chunkSizeWarningLimit: 1000, // Optional: raises warning limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react', 'react-icons'],
        },
      },
    },
  },
});
