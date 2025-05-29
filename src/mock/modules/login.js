// import Mock from 'mockjs'
import { responseFormat } from '@/mock/index2'
import { userMap } from './user'

export default {
  login: {
    state: true,
    url: '/login/login',
    method: 'post',
    result: (userInfo) => {
      let { username } = JSON.parse(userInfo.body)
      return responseFormat(userMap[username])
    },
  },
  logout: {
    state: true,
    url: '/login/logout',
    method: 'post',
    result: () => {
      return responseFormat()
    },
  },
}
