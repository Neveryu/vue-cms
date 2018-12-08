import axios from 'axios'
import jsonp from '@/common/jsonp'
import { isDev } from '@/utils'

// 获取当前运行环境
// const isDev = getEnviroument()

export function getImage() {
  if(isDev) {
    // 【使用代理的话】
    return axios.get('/api/getMovieImage')
    // return axios.get('http://dianying.nuomi.com/common/ranklist')
  } else {
    // 【没有代理的话】
    let url = 'https://api.douban.com/v2/movie/in_theaters'
    let option = {
      param: 'callback'
    }
    let data = {
      start: 0, // 数据的开始项
      count: 10, // 单页条数
      city: '深圳' // 城市
    }
    return jsonp(url, data, option)
  }
}
