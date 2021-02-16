import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/example-component/example-component.ts',
      formats: ['es']
    },
    target: 'esnext',
    rollupOptions: {
      external: /^lit-element/
    }
  }
})
