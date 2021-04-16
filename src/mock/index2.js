import Mock from 'mockjs'

Mock.setup({
  timeout: '300-600'
})

const modulesFiles = require.context('./modules', true, /\.js$/)
const mockList = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules.push(value.default)
  return modules
}, [])

mockList.forEach(b => {
  for (let key in b) {
    let { state, url, method, result } = b[key]
    if (state) {
      Mock.mock(RegExp(url + '??.*'), method, result)
    }
  }
})

export default Mock
