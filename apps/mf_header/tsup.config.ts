import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.tsx'],
  format: ['esm'],
  dts: true,
  clean: true,
  outDir: './dist',
  sourcemap: true,
})
