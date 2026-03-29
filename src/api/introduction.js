import request from '@/utils/request'

/**
 * 获取电影图片列表
 * 使用 mock 数据，避免豆瓣 API 跨域问题
 */
export function getImage() {
  return request({
    url: '/introduction/getMovieImages',
    method: 'get',
  })
}
