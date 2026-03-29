import request from '@/utils/request'
// import jsonp from '@/common/jsonp'
// import { isDev } from '@/utils'

function getData() {
  return request({
    method: 'get',
    url: '/echarts/getCateData',
  })
}

function getDepartTop() {
  return request({
    method: 'post',
    url: '/echarts/getDepartTop',
  })
}

export { getData, getDepartTop }
