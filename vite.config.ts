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
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    historyApiFallback: true,
  },
  optimizeDeps: {
    include: ['@11labs/react'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  define: {
    global: 'globalThis',
  }
}));