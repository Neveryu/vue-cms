import axios from 'axios'
import jsonp from '@/common/jsonp'
// import { isDev } from '@/utils'

// 获取当前运行环境
// const isDev = getEnviroument()

// 不是jsonp接口
export function getImage(params) {
  // 正在热映
  return axios({
    method: 'get',
    url: '/introduction/getVertical',
    params
  })
}

// jsonp
// export function getImage() {
//   console.log(11, '------')
//   // 正在热映
//   let url = 'http://service.picasso.adesk.com/v1/vertical/vertical'
//   let option = {
//     param: 'callback'
//   }
//   let data = {
//     limit: 30, // 数据的开始项
//     adult: 'false',
//     first: 0,
//     order: 'hot' // 城市
//   }
//   return Promise.all([jsonp(url, data, option)])
// }
