import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: mode === 'production' ? '/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.webp'],
  optimizeDeps: {
    include: [],
    exclude: ['@11labs/react'],
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    historyApiFallback: true,
    fs: {
      allow: ['..']
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],
      output: {
        format: 'es',
        manualChunks: {
          vendor: ['react', 'react-dom']
        },
      }
    }
  },
  define: {
    global: 'globalThis',
  }
}));
