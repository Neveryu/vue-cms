import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
/**
 * 引入less后缀的样式文件，方便后续更改主题颜色
 * 如果你要引入使用less文件的话，按照antd-vue的文档
 * 你需要使用 modifyVars 的方式来进行覆盖变量（官方文档中提供了webpack,vue-cli2,vue-cli3的示例代码）
 * vite中类似，主要就是提供一些颜色的变量值
 * 具体看vite.config.ts中的写法
 * -----------
 * Vite 为 Sass 和 Less 改进了 @import 解析，以保证 Vite 别名也能被使用。
 * 另外，url() 中的相对路径引用的，与根文件不同目录中的 Sass/Less 文件会自动变基以保证正确性。
 */
import('ant-design-vue/dist/antd.less')

const app = createApp(App)
app.use(Antd)
app.mount('#app')
