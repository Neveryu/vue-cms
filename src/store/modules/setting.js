/**
 * 布局配置
 * 修改配置时：
 * 1、需要每次都清理 `window.localStorage` 浏览器永久缓存
 * 2、或者点击布局配置最底部 `一键恢复默认` 按钮即可看到效果
 */

const getDefaultState = () => ({
  /**
   * 界面设置
   */
  // 是否开启侧边栏菜单水平折叠效果
  isCollapse: false,
  // 是否打开系统设置面板抽屉
  showSettingPanel: false,

  /**
   * 布局切换
   * 可选值: defaults(默认) | classic(经典) | transverse(横向) | columns(分栏)
   */
  layout: 'defaults',

  /**
   * 面包屑设置
   */
  // 是否开启面包屑
  isBreadcrumb: true,
  // 是否开启面包屑图标
  isBreadcrumbIcon: true,

  /**
   * 主题设置
   */
  // 主题颜色
  primary: '#409EFF',
  // 是否开启深色模式
  isDark: false,

  /**
   * 菜单设置
   */
  // 是否开启菜单手风琴效果（只展开一个）
  isUniqueOpened: false,

  /**
   * 标签页设置
   */
  // 是否开启标签页
  isTagsview: true,
  // 是否开启标签页图标
  isTagsviewIcon: true,
  // 是否缓存标签页
  isCacheTagsView: true,
  // 标签页样式
  tagsStyle: 'tags-style-one',
  // 页面切换动画
  animation: 'slide-right',

  /**
   * 其他设置
   */
  // 是否显示Logo
  isShowLogo: true,
  // 是否显示页脚
  isFooter: false,
})

const state = getDefaultState()

const mutations = {
  TOGGLE_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
  },
  SET_COLLAPSE(state, value) {
    state.isCollapse = value
  },
  TOGGLE_SETTING_PANEL(state) {
    state.showSettingPanel = !state.showSettingPanel
  },
  SET_LAYOUT(state, layout) {
    state.layout = layout
  },
  SET_BREADCRUMB(state, value) {
    state.isBreadcrumb = value
  },
  SET_BREADCRUMB_ICON(state, value) {
    state.isBreadcrumbIcon = value
  },
  SET_PRIMARY(state, color) {
    state.primary = color
  },
  SET_DARK(state, value) {
    state.isDark = value
  },
  SET_UNIQUE_OPENED(state, value) {
    state.isUniqueOpened = value
  },
  SET_TAGSVIEW(state, value) {
    state.isTagsview = value
  },
  SET_TAGSVIEW_ICON(state, value) {
    state.isTagsviewIcon = value
  },
  SET_CACHE_TAGSVIEW(state, value) {
    state.isCacheTagsView = value
  },
  SET_TAGS_STYLE(state, value) {
    state.tagsStyle = value
  },
  SET_ANIMATION(state, value) {
    state.animation = value
  },
  SET_SHOW_LOGO(state, value) {
    state.isShowLogo = value
  },
  SET_FOOTER(state, value) {
    state.isFooter = value
  },
  RESET_SETTING(state) {
    Object.assign(state, getDefaultState())
  },
}

const actions = {
  // 修改 isCollapse
  toggleCollapse({ commit }) {
    commit('TOGGLE_COLLAPSE')
  },
  setCollapse({ commit }, value) {
    commit('SET_COLLAPSE', value)
  },
  // 修改 showSettingPanel
  toggleSettingPanel({ commit }) {
    commit('TOGGLE_SETTING_PANEL')
  },
  // 设置布局
  setLayout({ commit }, layout) {
    commit('SET_LAYOUT', layout)
  },
  // 设置面包屑
  setBreadcrumb({ commit }, value) {
    commit('SET_BREADCRUMB', value)
  },
  setBreadcrumbIcon({ commit }, value) {
    commit('SET_BREADCRUMB_ICON', value)
  },
  // 设置主题色
  setPrimary({ commit }, color) {
    commit('SET_PRIMARY', color)
  },
  // 设置深色模式
  setDark({ commit }, value) {
    commit('SET_DARK', value)
  },
  // 设置菜单手风琴
  setUniqueOpened({ commit }, value) {
    commit('SET_UNIQUE_OPENED', value)
  },
  // 设置标签页
  setTagsview({ commit }, value) {
    commit('SET_TAGSVIEW', value)
  },
  setTagsviewIcon({ commit }, value) {
    commit('SET_TAGSVIEW_ICON', value)
  },
  setCacheTagsView({ commit }, value) {
    commit('SET_CACHE_TAGSVIEW', value)
  },
  setTagsStyle({ commit }, value) {
    commit('SET_TAGS_STYLE', value)
  },
  setAnimation({ commit }, value) {
    commit('SET_ANIMATION', value)
  },
  // 设置Logo显示
  setShowLogo({ commit }, value) {
    commit('SET_SHOW_LOGO', value)
  },
  // 设置页脚显示
  setFooter({ commit }, value) {
    commit('SET_FOOTER', value)
  },
  // 重置设置
  resetSetting({ commit }) {
    commit('RESET_SETTING')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
