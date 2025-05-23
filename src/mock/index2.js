/**
 * index2.js文件使用的是modules文件夹中的文件
 * 本项目使用的就是这种形式
 */
import Mock from 'mockjs'

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
      Mock.mock(RegExp(url + '??.*'), method, {
        code: 200,
        message: 'success',
        data: result,
      })
      // Mock.mock(RegExp(url + '??.*'), method, result)
    }
  }
})

export default Mock
