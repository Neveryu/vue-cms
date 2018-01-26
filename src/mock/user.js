import { getToken } from '@/common/auth'

const userMap = {
  admin: {
    token: 'admin',
    name: 'Admin',
    age: 10,
    avatar: '/static/avatar/0.jpg'
  },
  lucy: {
    token: 'lucy',
    name: 'Lucy',
    age: 12,
    avatar: '/static/avatar/1.jpg'
  }
}

function pullUserInfo() {
  return userMap[getToken()]
}

export { userMap, pullUserInfo }
