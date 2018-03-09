const SET_TABSVIEW = 'SET_TABSVIEW'

const tabsview = {
  state: {
    visitedTabsView: []
  },
  mutations: {
    [SET_TABSVIEW](state, view) {
      if (state.visitedTabsView.find((n) => n.path === view.path)) {
        return
      }
      state.visitedTabsView.push({ name: view.name, path: view.path })
    }
  },
  actions: {
    // 添加一个新的tabsView
    addVisitedTabsView({ commit }, view) {
      commit(SET_TABSVIEW, view)
    }
  },
  getters: {
    visitedTabsView: state => state.visitedTabsView
  }
}

export default tabsview