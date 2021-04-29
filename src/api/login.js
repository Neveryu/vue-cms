import axios from 'axios'

export function login(userInfo) {
  return axios.post('/login/login', userInfo)
}

export function logout() {
  return axios.post('/login/logout')
}

export function userInfo() {
  return axios.post('/user/getInfo')
}
