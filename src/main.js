import Cookies from 'js-cookie'

import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// 处理/解决浏览器默认样式不一致的问题
import 'normalize.css/normalize.css'
// 自定义的全局样式（主要是全局变量，全局格式化样式）
import '@/assets/style/index.scss'
// animate动画库
import 'animate.css'

import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'

// 全局图标
import './icons'
// 国际化
import i18n from './language'

import './permission' // permission control

// 自定义的全局组件
import Notification from '@/components/notification'

/**
 * 引入 mock 数据（开发和生产环境都使用）
 * 如需连接真实后端接口，注释掉下面一行即可
 */
require('@/mock/index.js')

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium',
  zIndex: 2000,
  i18n: (key, value) => i18n.t(key, value),
})

Vue.use(Notification)

// 全局配置，它的作用是禁止 Vue 在启动时生成生产环境提示。
Vue.config.productionTip = false

// 初始化主题设置（深色模式、主题色）
const initTheme = () => {
  const setting = store.state.setting
  if (setting) {
    // 应用深色模式
    if (setting.isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    // 应用主题色
    if (setting.primary) {
      document.documentElement.style.setProperty('--primary', setting.primary)
    }
  }
}

new Vue({
  router,
  store,
  i18n,
  created() {
    initTheme()
  },
  render: (h) => h(App),
}).$mount('#app')
