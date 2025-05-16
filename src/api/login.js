import request from '@/utils/request'

export function login(userInfo) {
  return request({
    url: '/login/login',
    method: 'post',
    data: userInfo,
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post',
  })
}

export function userInfo() {
  return request({
    url: '/user/getInfo',
    method: 'get',
  })
}
