import { defineConfig } from "vite";

export default defineConfig({
    root: 'src',
    base: './',
    build: {
        outDir: '../dist',
        assetsDir: 'assets', // copy all folders from assets folder and paste in dist/assets
        emptyOutDir: true,
    },
})