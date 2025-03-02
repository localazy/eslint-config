import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  sourcemap: true,
  entry: {
    index: 'src/main.ts',
  },
  format: ['esm', 'cjs'],
  target: 'node20',
});
