import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
// 引入less后缀的样式文件，方便后续更改主题颜色
import 'ant-design-vue/dist/antd.less'

const app = createApp(App)
app.use(Antd)
app.mount('#app')
