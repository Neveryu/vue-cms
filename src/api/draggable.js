import axios from 'axios'
import jsonp from '@/common/jsonp'

/**
 * 获取电影资料
 * 已失效，无法使用
 * @Author   Author
 * @DateTime 2020-10-23T15:42:19+0800
 * @return   {[type]}                 [description]
 */
function getFileListOld() {
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

function getFileList() {
  return axios({
    method: 'post',
    url: '/draggable/getFiles'
  })
}

export { getFileListOld, getFileList }
