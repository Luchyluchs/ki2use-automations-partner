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
    exclude: [],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        bigint: true
      }
    }
  },
  build: {
    outDir: 'dist',
    target: 'es2015',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: undefined
      }
    },
    sourcemap: false,
    minify: 'terser',
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': JSON.stringify(mode === 'production' ? 'production' : 'development')
  },
  assetsInclude: ['**/*.wasm']
}));