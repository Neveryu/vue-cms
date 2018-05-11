import { getLang, setLang } from '@/common/lang'

const SET_LANG = 'SET_LANG'

const language = {
  state: {
    language: getLang() || 'zh'
  },
  mutations: {
    [SET_LANG](state, language) {
      state.language = language
      setLang(language)
    }
  },
  actions: {
    setLanguage({commit}, language) {
      commit(SET_LANG, language)
    }
  },
  getters: {
    language: state => state.language
  }
}
export default language