import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import autoprefixer from 'autoprefixer';
import windi from "vite-plugin-windicss";

const variablePath = normalizePath(path.resolve('./src/variable.scss'));
// https://vitejs.dev/config/
export default defineConfig({
  css:{
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    },
    modules:{
      generateScopedName:"[name]__[local]___[hash:base64:5]"
    },
    preprocessorOptions:{
      scss:{
        additionalData:`@import "${variablePath}";`
      }
    }
  },
  plugins: [windi(),react()]
})
