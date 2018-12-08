import axios from 'axios'
// import jsonp from '@/common/jsonp'
import { isDev } from '@/utils'

// 获取当前运行环境
// const isDev = getEnviroument()

export function getTable() {
  if(isDev) {
    // 开发环境有代理
    return axios.post('/api/getmoviepiaofang')
  } else {
    // 使用 mock 拦截请求来造数据
    // setTimeout(function() {
    //   return axios.post('/api/getmoviepiaofang-mock')
    // }, 2000)
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000, axios.post('/api/getmoviepiaofang-mock'))
    })
    // return axios.post('/api/getmoviepiaofang-mock')
  }
}
