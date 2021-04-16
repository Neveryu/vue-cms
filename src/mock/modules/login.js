// import Mock from 'mockjs'
import { userMap } from './user'

export default {
  login: {
    state: true,
    url: '/login/login',
    method: 'post',
    result: userInfo => {
      let { username } = JSON.parse(userInfo.body)
      return userMap[username]
    }
  },
  logout: {
    state: true,
    url: '/login/logout',
    method: 'post',
    result: () => {
      return 'success'
    }
  }
}
