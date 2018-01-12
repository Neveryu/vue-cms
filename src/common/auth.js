import Cookies from 'js-cookie'
import Mock from 'mockjs'

const TokenKey = Mock.Random.id()

export function getToken() {
  return Cookies.get(TokenKey)
}