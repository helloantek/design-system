import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const dir = import.meta.dirname;

export default defineConfig({
  root: resolve(dir, 'harness'),
  plugins: [react()],
  // Test the component sources, not a possibly stale package build.
  resolve: { alias: { '@helloantek/ds-react': resolve(dir, '../../packages/react/src/index.ts') } },
  build: { outDir: resolve(dir, 'harness-dist'), emptyOutDir: true },
});
