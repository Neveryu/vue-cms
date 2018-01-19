import Mock from 'mockjs'
import * as loginAPI from './login'

Mock.setup({
  timeout: '300-600'
})

// 登录相关接口
Mock.mock('/login/login', 'post', loginAPI.login)