import axios from 'axios'
// import jsonp from '@/common/jsonp'
import { isDev } from '@/utils'

// 获取当前运行环境
// const isDev = getEnviroument()

export function getTable() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, axios.post('/api/getmoviepiaofang-mock'))
  })
}

// 合并&统计 - 表格内容
export function getMergeTable() {
  return axios({
    method: 'post',
    url: '/excel/getMergeTableData'
  })
}

/**
 * 自定义表格
 */
// 获取文件列表
export function getFiles() {
  return axios({
    method: 'post',
    url: '/excel/getFiles'
  })
}

// 删除选择的文件
export function delFiles(ids) {
  return axios({
    method: 'post',
    url: '/excel/delFiles'
  })
}
