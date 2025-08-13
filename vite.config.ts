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
  base: mode === 'production' ? 'https://ki2use.de/' : '/',
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
    assetsDir: '',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: 'index.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        manualChunks: undefined,
        inlineDynamicImports: true
      }
    },
    sourcemap: false,
    minify: 'esbuild',
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': JSON.stringify(mode === 'production' ? 'production' : 'development')
  },
  assetsInclude: ['**/*.wasm']
}));