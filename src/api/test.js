import axios from 'axios'

// 获取文件列表
export function getFiles() {
  return axios({
    method: 'post',
    url: '/test/getFiles'
  })
}
