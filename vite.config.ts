import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { generateModifyVars } from './build/generate/generateModifyVars'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      // 指定传递给 CSS 预处理器的选项。文件扩展名用作选项的键
      less: {
        modifyVars: {
          'success-color': '#55D187', //  Success color
          'error-color': '#ED6F6F', //  False color
          'warning-color': '#EFBD47', //   Warning color
          'border-color-base': '#EEEEEE',
          'font-size-base': '14px', //  Main font size
          'border-radius-base': '2px', //  Component/float fillet
          'app-content-background': '#fafafa' //   Link color
        },
        javascriptEnabled: true
      }
    }
  }
})
