import request from '@/utils/request'
// import jsonp from '@/common/jsonp'
// import { isDev } from '@/utils'

export function getTable() {
  return request({
    method: 'post',
    url: '/excel/getmoviepiaofang-mock',
  })
}

// 合并&统计 - 表格内容
export function getMergeTable() {
  return request({
    method: 'post',
    url: '/excel/getMergeTableData',
  })
}

/**
 * 自定义表格
 */
// 获取文件列表
export function getFiles() {
  return request({
    method: 'post',
    url: '/excel/getFiles',
  })
}

// 删除选择的文件
export function delFiles() {
  return request({
    method: 'post',
    url: '/excel/delFiles',
  })
}
