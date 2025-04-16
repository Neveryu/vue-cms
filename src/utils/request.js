import axios from 'axios'
import {
  Loading,
  Message,
  MessageBox,
  Notification
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'
import errorCode from '@/utils/errorCode'
import {
  tansParams
} from '@/utils/common'
import {
  saveAs
} from 'file-saver'

let downloadLoadingInstance

axios.defaults.headers['Conntent-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 1000000
})
const limitSize = 200
const pending = [] // 存储每个ajax请求的取消函数和ajax标识

// 自定义唯一标识
function parseConfig(config) {
  let configData = ''
  let configParams = ''
  if (config.data) {
    if (typeof config.data === 'string') configData = config.data
    if (typeof config.data === 'object') configData = JSON.stringify(config.data)
    configData = configData.length > limitSize ? configData.substring(0, limitSize) : configData
  }
  if (config.params && Object.keys(config.params).length > 0) {
    configParams = JSON.stringify(config.params)
    configParams = configParams.length > limitSize ? configParams.substring(0, limitSize) : configParams
  }
  return config.url + '&' + config.method + '&' + configData + '&' + configParams
}
const CancelToken = axios.CancelToken
const removeRepeatUrl = (ever, type = 'request') => {
  for (const p in pending) {
    if (pending[p].u === parseConfig(ever)) { // 当当前请求在数组中存在时执行函数体
      if (type === 'request') pending[p].f() // 执行取消操作,请求过程中中断，响应过程中不进行操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}
let loadingInstance = null
// request拦截器
// 不需要公共loading
const notLoadingRequestUrl = ['/business/schedule/visualizationLargeScreen/project/allScheduleData', '/business/cim/getLocation', '/business/danger/aiCameraDevice/resetPlayStream', '/business/danger/aiCameraDevice/startCameraStream']

service.interceptors.request.use(config => {
  removeRepeatUrl(config)
  if (notLoadingRequestUrl.findIndex(item => item.includes(config.url)) === -1) {
    loadingInstance = Loading.service({ fullscreen: true, text: '系统目前正在提交数据，请耐心等待！', 'background': 'rgba(0,0,0,0)' })
  }
  config.cancelToken = new CancelToken((c) => {
    // 自定义唯一标识
    pending.push({
      u: parseConfig(config),
      f: c
    })
  })
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?' + tansParams(config.params)
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }
  return config
}, error => {
  loadingInstance.close()
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  loadingInstance.close()
  removeRepeatUrl(res.config, 'response') // 当前接口已返回，将当前接口从pedding中移除
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200
  // 获取错误信息
  const msg = errorCode[code] || res.data.msg || errorCode['default']
  if (code === 401) {
    MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      store.dispatch('LogOut').then(() => {
        location.href = '/index'
      })
    }).catch(() => { })
    return Promise.reject(new Error('无效的会话，或者会话已过期，请重新登录。'))
  } else if (code === 500) {
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    Notification.error({
      title: msg
    })
    return Promise.reject('error')
  } else {
    return res.data
  }
}, error => {
  console.log('error：' + error)
  loadingInstance.close()
  let {
    message
  } = error
  if (message) {
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '无法连接到服务器，请稍后再试'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
  }
  return Promise.reject(error)
})

// 通用下载方法
export function download(url, params, filename) {
  downloadLoadingInstance = Loading.service({
    text: '正在下载数据，请稍后',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  return service.post(url, params, {
    transformRequest: [(params) => {
      return tansParams(params)
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType: 'blob'
  }).then((data) => {
    const content = data
    const blob = new Blob([content])
    saveAs(blob, filename)
    downloadLoadingInstance.close()
  }).catch((r) => {
    console.error(r)
    Message.error('下载文件出现错误，请联系管理员！')
    downloadLoadingInstance.close()
  })
}

export default service
