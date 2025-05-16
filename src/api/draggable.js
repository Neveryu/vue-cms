import axios from 'axios'
// import jsonp from '@/common/jsonp'

// function getFileListOld() {
//   // 【没有代理的话】
//   // 正在热映
//   let url = 'http://piaofang.maoyan.com/dashboard-ajax?orderType=0&uuid=1752bd5fe85c8-065bd543895d11-c781f38-1fa400-1752bd5fe85c8&riskLevel=71&optimusCode=10&_token=eJxdTssKgzAQ%2FJc9h5hYnwEPQqFY6KFiexEPqdooRSMxlJbSf%2B8KeiksOw9mYD5gsgYEI%2FBsDQjglNEACNgZBA947Eec%2Bfg4gfrP89G7meseRBmFnMS7sFqMHHXJY5cRziJWkY17yF0Pb0llGILO2kk4ztRLfZejooPUbznSWg9OI%2BfupqVpcApgYSiwgPhYUa5oN33C7ZidezUia4%2Bv4qKyND2oND8nCXx%2F5%2BM96w%3D%3D'
//   // 即将上映
//   let url2 = 'http://piaofang.maoyan.com/dashboard-ajax?orderType=0&uuid=1752bd5fe85c8-065bd543895d11-c781f38-1fa400-1752bd5fe85c8&riskLevel=71&optimusCode=10&_token=eJxdTssKgzAQ%2FJc9h5hYnwEPQqFY6KFiexEPqdooRSMxlJbSf%2B8KeiksOw9mYD5gsgYEI%2FBsDQjglNEACNgZBA947Eec%2Bfg4gfrP89G7meseRBmFnMS7sFqMHHXJY5cRziJWkY17yF0Pb0llGILO2kk4ztRLfZejooPUbznSWg9OI%2BfupqVpcApgYSiwgPhYUa5oN33C7ZidezUia4%2Bv4qKyND2oND8nCXx%2F5%2BM96w%3D%3D'
//   let option = {
//     param: 'callback'
//   }
//   let data = {
//     start: 0, // 数据的开始项
//     count: 20, // 单页条数
//     city: '' // 城市
//   }
//   return Promise.all([jsonp(url, data, option), jsonp(url2, data, option)])
// }

/**
 * 获取电影资料
 * 已失效，无法使用
 * @Author   Author
 * @DateTime 2020-10-23T15:42:19+0800
 */
function getFileList() {
  return axios({
    method: 'post',
    url: '/draggable/getFile',
  })
}

export { getFileList }
