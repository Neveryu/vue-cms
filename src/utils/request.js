import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/common/auth'
import { getLang } from '@/common/lang'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // 在发送请求之前做些什么，例如添加token等
    const token = getToken() // 获取token的方法，你需要自己实现或使用Vuex等状态管理库

    if (token) {
      // let each request carry token
      // ['Authorization'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = `Bearer getToken()`
      config.headers['Cache-Control'] = 'no-cache'
      // 在请求头中告诉后端，当前系统的语言，这样后端可以根据前端的系统语言，给出对应语言的提示信息
      config.headers['Accept-Language'] = getLang()
    }

    // 如果get  请求有缓存，可以加这段代码
    if (config.method === 'get') {
      const now = `${Date.now()}`
      if (config.params) {
        config.params[now] = now
      } else {
        const hasParams = config.url.includes('?')
        config.url = config.url + (hasParams ? '&' : '?') + `now=${now}`
      }
    }

    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code * 通过自定义代码确定请求状态
   * Here is just an example * 以下只是一个示例
   * You can also judge the status by HTTP Status Code * 也可以通过 HTTP 状态代码判断状态
   */
  (response) => {
    const res = response.data
    console.log(response, '---http请求的返回')

    // 下载文件就直接通过
    if (res instanceof Blob || res instanceof ArrayBuffer) {
      return response
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200 && res.code !== 'B0001') {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else if (res.code === 'B0001') {
      // 后端自定义的有特殊用途的code
      Message({
        message: res.msg,
        type: 'warning',
        duration: 3 * 1000,
      })
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      // Message.closeAll()
      Message({
        message: '异常：请求超时！',
        type: 'error',
        duration: 3 * 1000,
      })
      return Promise.reject('异常：请求超时！')
    }

    if (error.message.indexOf('Network Error') !== -1) {
      Message({
        message: '异常：与网络有关的请求失败！',
        type: 'error',
        duration: 3 * 1000,
      })
      return Promise.reject('异常：请求失败！')
    }

    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error.response?.data?.msg ?? error.message)
  }
)

export default service
