import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
      '@tests': resolve(import.meta.dirname, 'tests'),
    },
  },

  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: 'src/main.ts',
      fileName: 'eslint-config',
      formats: ['es', 'cjs'],
    },
  },

  plugins: [
    // Externalize everything
    externalizeDeps(),
    // Rollup types into a single file
    dts({ rollupTypes: true }),
  ],
});
