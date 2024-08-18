import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './lib/entry.js'),
      name: 'mylib',
      fileName: 'my-lib',
      formats: ['es', 'umd', 'iife', 'cjs'],
    },
    rollupOptions: {
      external: ['jquery'],
      output: {
        globals: {
          jquery: '$',
        },
        exports: 'named',
      },
    },
  },
});
