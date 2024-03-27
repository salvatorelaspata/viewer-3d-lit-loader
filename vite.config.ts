import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vite-3d-lit-loader/',
    build: {
        lib: {
            entry: 'src/viewer-3d-lit-loader.ts',
            formats: ['es'],
        },
        rollupOptions: {
            external: /^lit/,
        },
    },
})
