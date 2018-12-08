import { login, userInfo, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/common/auth'

const SET_TOKEN = 'SET_TOKEN'
const SET_NAME = 'SET_NAME'
const SET_AGE = 'SET_AGE'
const SET_AVATAR = 'SET_AVATAR'
const SET_PERMISSIONS = 'SET_PERMISSIONS'

const user = {
  state: {
    token: getToken(),
    name: '',
    age: 0,
    avatar: '',
    permissions: ''
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token
    },
    [SET_NAME](state, name) {
      state.name = name
    },
    [SET_AGE](state, age) {
      state.age = age
    },
    [SET_AVATAR](state, avatar) {
      state.avatar = avatar
    },
    [SET_PERMISSIONS](state, permissions) {
      state.permissions = permissions
    }
  },
  actions: {
    // 用户登录
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(resp => {
          let data = resp.data
          setToken(data.token)
          commit(SET_TOKEN, data.token)
          // commit(SET_NAME, data.name)
          // commit(SET_AGE, data.age)
          // commit(SET_AVATAR, data.avatar)
          // commit(SET_PERMISSIONS, data.permissions)
          return resolve()
        }).catch(err => {
          return reject(err)
        })
      })
    },
    // 拉取用户信息
    pullUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        userInfo().then(resp => {
          let data = resp.data
          commit(SET_NAME, data.name)
          commit(SET_AGE, data.age)
          commit(SET_AVATAR, data.avatar)
          commit(SET_PERMISSIONS, data.permissions)
          return resolve(data)
        }).catch(err => {
          return reject(err)
        })
      })
    },
    // 用户退出登录
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(resp => {
          removeToken()
          commit(SET_TOKEN, '')
          commit(SET_NAME, '')
          return resolve()
        }).catch(err => {
          return reject(err)
        })
      })
    }
  },
  getters: {
    token: state => state.token,
    name: state => state.name,
    age: state => state.age,
    avatar: state => state.avatar,
    permissions: state => state.permissions
  }
}

export default user
