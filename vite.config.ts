import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';

const variablePath = normalizePath(path.resolve('./src/variable.scss'));
const isProduction = process.env.NODE_ENV === 'production';
const CDN_URL = 'xxxxxx';
// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : '/',
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    },
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  plugins: [
    windi(),
    react(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules|src\/index.css/
    }),
    svgr()
  ]
});
