import { getLang, setLang } from '@/common/lang'

const SET_LANG = 'SET_LANG'


const state = {
  language: getLang() || 'zh'
}
const mutations = {
  [SET_LANG](state, language) {
    state.language = language
    setLang(language)
  }
}
const actions = {
  setLanguage({ commit }, language) {
    commit(SET_LANG, language)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
