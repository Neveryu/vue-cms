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
 * （PS：至于state，mutations，actions就由每个modules文件夹里面的文件，自己去管理和实现）
 */
const getters = {
  // tabsview-页面标签
  visitedTabsView: (state) => state.tabsview.visitedTabsView,
  // 用户信息
  userInfo: (state) => state.user.userInfo,
  // 用户名
  userName: (state) => state.user.userInfo.name,
  // 头像
  userAvatar: (state) => state.user.userInfo.avatar,
  // 语言
  language: (state) => state.language.language,
  // addRoutes 是动态遍历出来的，和系统内置的静态路由，组成用户的完整录音
  addRoutes: (state) => state.permission.addRoutes,
  // 用户的原始permissions数据（包含：）
  permissions: (state) => state.user.permissions,
  // 用户的路由菜单权限（完整的）
  routers: (state) => state.permission.routes,
  // 是否开启侧边栏菜单水平折叠效果
  sidebarCollapse: (state) => state.setting.isCollapse,
  // 是否打开系统设置面板抽屉
  showSettingPanel: (state) => state.setting.showSettingPanel,
  // 系统设置
  setting: (state) => state.setting,
}

export default new Vuex.Store({
  modules,
  getters,
})
