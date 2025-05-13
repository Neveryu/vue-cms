import Cookies from 'js-cookie'

import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// 处理/解决浏览器默认样式不一致的问题
import 'normalize.css/normalize.css'
import './assets/style/index.css'
// animate动画库
import 'animate.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局图标
import './icons'
// 国际化
import i18n from './language'

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'small',
  i18n: (key, value) => i18n.t(key, value),
})

// 全局配置，它的作用是禁止 Vue 在启动时生成生产环境提示。
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
