import Cookies from 'js-cookie'

const key = process.env.VUE_APP_Cookie_Key

function getToken() {
  return Cookies.get(key)
}

function setToken(token) {
  return Cookies.set(key, token)
}

function removeToken() {
  return Cookies.remove(key)
}

export { getToken, setToken, removeToken }
