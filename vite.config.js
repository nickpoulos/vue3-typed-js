import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: './src/index.js',
            name: 'Vue3TypedJs',
            fileName: (format) => `vue3-typed-js.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        formats: ['es', 'umd', 'cjs'],
        minify: true,
    },
});
