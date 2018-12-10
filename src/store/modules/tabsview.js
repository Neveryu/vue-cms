const SET_TABSVIEW = 'SET_TABSVIEW'
const DEL_TABSVIEW = 'DEL_TABSVIEW'

const tabsview = {
  state: {
    visitedTabsView: []
  },
  mutations: {
    [SET_TABSVIEW](state, view) {
      if (state.visitedTabsView.find((n) => n.path === view.path)) {
        return
      }
      state.visitedTabsView.push({ name: view.meta.title, path: view.path })
    },
    [DEL_TABSVIEW](state, view) {
      for (let [i, v] of state.visitedTabsView.entries()) {
        if (v.path === view.path || v.name === view.name) {
          state.visitedTabsView.splice(i, 1)
        }
      }
    }
  },
  actions: {
    // 添加一个新的tabsView
    addVisitedTabsView({ commit }, view) {
      commit(SET_TABSVIEW, view)
    },
    // 关闭一个tabsView
    delVisitedTabsView({ commit, state }, view) {
      return new Promise((resolve, reject) => {
        commit(DEL_TABSVIEW, view)
        resolve([...state.visitedTabsView])
      })
    }
  },
  getters: {
    visitedTabsView: state => state.visitedTabsView
  }
}

export default tabsview