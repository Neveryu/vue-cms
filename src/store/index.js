import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tabsview from './modules/tabsview'
import language from './modules/language'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    tabsview,
    language
  }
})