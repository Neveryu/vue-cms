import axios from 'axios'
// import jsonp from '@/common/jsonp'
// import { isDev } from '@/utils'

function getData() {
  return axios({
    method: 'get',
    url: '/echarts/getCateData'
  })
}

function getDepartTop() {
  return axios({
    method: 'post',
    url: '/echarts/getDepartTop'
  })
}

export { getData, getDepartTop }
