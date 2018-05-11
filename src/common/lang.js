import Cookies from 'js-cookie'

const LangKey = 'lang'

function getLang() {
  return Cookies.get(LangKey)
}

function setLang(language) {
  return Cookies.set(LangKey, language)
}

function removeLang() {
  return Cookies.remove(LangKey)
}

export { getLang, setLang, removeLang }