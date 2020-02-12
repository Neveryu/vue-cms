import jsonp from '@/common/jsonp'

function getFileList() {
  // 【没有代理的话】
  // 正在热映
  let url = 'https://douban.uieee.com/v2/movie/in_theaters'
  // 即将上映
  let url2 = 'https://douban.uieee.com/v2/movie/coming_soon'
  let option = {
    param: 'callback'
  }
  let data = {
    start: 0, // 数据的开始项
    count: 20, // 单页条数
    city: '' // 城市
  }
  return Promise.all([jsonp(url, data, option), jsonp(url2, data, option)])
}

export { getFileList }