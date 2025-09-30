/**
 * 布局配置
 * 修改配置时：
 * 1、需要每次都清理 `window.localStorage` 浏览器永久缓存
 * 2、或者点击布局配置最底部 `一键恢复默认` 按钮即可看到效果
 * todo: 20250702：上面这段话需要验证？？？？？？？？？？？？？？？
 */

const state = {
  /**
   * 界面设置
   */
  // 是否开启侧边栏菜单水平折叠效果
  isCollapse: false,
  // 是否打开系统设置面板抽屉
  showSettingPanel: false,

  /**
   * 布局切换
   * 注意：为了演示，切换布局时，颜色会被还原成默认，代码位置：/@/layout/navBars/topBar/setings.vue
   * 中的 `initSetLayoutChange(设置布局切换，重置主题样式)` 方法
   */
  // 布局切换：可选值"<默认 defaults | 经典 classic | 横向 transverse | 分栏 columns>"，默认 defaults
  layout: 'defaults',
}

const mutations = {
  TOGGLE_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
  },
  TOGGLE_SETTING_PANEL(state) {
    state.showSettingPanel = !state.showSettingPanel
  },
}

const actions = {
  // 修改 isCollapse
  toggleCollapse({ commit }) {
    commit('TOGGLE_COLLAPSE')
  },
  // 修改 showSettingPanel
  toggleSettingPanel({ commit }) {
    commit('TOGGLE_SETTING_PANEL')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
