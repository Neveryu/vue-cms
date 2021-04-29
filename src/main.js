import Cookies from 'js-cookie'

import Vue from 'vue'

import 'normalize.css/normalize.css'
// animate动画库
import 'animate.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import store from './store'
import router from './router'


// 全局图标
import './icons'
// 国际化
import i18n from './lang'
// 全局权限检查
import './permission'
// 全局 Mock 接口
import './mock/index2'

Vue.use(ElementUI, {
	size: Cookies.get('size') || 'small',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
