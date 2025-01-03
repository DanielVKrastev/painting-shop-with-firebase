import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // коренова директория на изходните файлове
  base: './',
  build: {
    outDir: '../dist', // директория за build
    assetsDir: 'assets', // директория за assets
    emptyOutDir: true, // изчиства dist при нов билд
    rollupOptions: {
      input: {
        main: './src/index.html', // основната HTML страница
        admin: './src/admin/index.html', // админ HTML страница
      },
    },
  },
});