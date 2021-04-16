import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 自动读取modules文件夹中的vuex模块
 * 不用手动引入和注入
 */
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})


/**
 * 这里getters是单独拿出来的，全局统一用一个，用做取值的便捷手段。【也是官方推荐的】
 * 你也可以直接使用 this.$store.state.[moduleName].[paramName] 来取值
 * （PS：至于state，mutations，actions就由每个modules文件夹里面的文件，自己实现）
 */
const getters = {
  // add_routes 是动态遍历出来的的路由
  add_routes: state => state.permission.addRoutes,
  // 用户的路由菜单权限
  permissions: state => state.user.permissions
}

export default new Vuex.Store({
  modules,
  getters
})
