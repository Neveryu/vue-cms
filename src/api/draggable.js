import jsonp from '@/common/jsonp'

function getFileList() {
  // 【没有代理的话】
  let url = 'https://douban.uieee.com/v2/movie/in_theaters'
  let option = {
    param: 'callback'
  }
  let data = {
    start: 0, // 数据的开始项
    count: 20, // 单页条数
    city: '深圳' // 城市
  }
  return jsonp(url, data, option)
}

export { getFileList }