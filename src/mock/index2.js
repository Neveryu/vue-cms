/**
 * index2.js文件使用的是modules文件夹中的文件
 * 本项目使用的就是这种形式
 */
import Mock from 'mockjs'

// 定义一个通用的响应格式
const responseFormat = (data) => {
  return {
    code: 200,
    message: 'success',
    data: data,
  }
}

Mock.setup({
  timeout: '300-600', // 响应延时
})

const modulesFiles = require.context('./modules', true, /\.js$/)
const mockList = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules.push(value.default)
  return modules
}, [])

mockList.forEach((b) => {
  for (let key in b) {
    let { state, url, method, result } = b[key]
    if (state) {
      // 将 result 包装为统一的响应格式
      Mock.mock(RegExp(url + '??.*'), method, {
        data: result(),
      })
    }
  }
})

export default Mock
