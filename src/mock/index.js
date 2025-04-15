import Mock from 'mockjs'
import * as loginAPI from './login'
import * as userAPI from './user'
import * as homepageAPI from './homepage'
import * as excel from './excel'
import * as echarts from './echarts'
import * as draggable from './draggable'
import * as introductionAPI from './introduction'

Mock.setup({
  timeout: '300-600'
})

// 登录相关接口
Mock.mock('/login/login', 'post', loginAPI.login)
Mock.mock('/login/logout', 'post', loginAPI.logout)

// 用户信息相关接口
Mock.mock('/user/getInfo', 'post', userAPI.pullUserInfo)

// 首页 homepage 相关的接口
Mock.mock('/homepage/hometotal', 'post', homepageAPI.getHomeTotal)
// 首页 homepageDetailItem 接口
Mock.mock('/homepage/detailItem', 'post', homepageAPI.getHomeDetailItem)
// 首页 investmentRank 接口
Mock.mock('/homepage/investmentRank', 'post', homepageAPI.getHomeInvestmentRank)

// 简述 图片 相关的接口
// 通配符语法，可以匹配带有参数的 GET 请求（如 '/introduction/getVertical?page=1'）
Mock.mock(RegExp('/introduction/getVertical.*'), 'get', introductionAPI.getVerticalList)

// 表格部分【导出表格中的票房数据】
Mock.mock('/api/getmoviepiaofang-mock', 'post', excel.piaofang)
Mock.mock('/excel/getMergeTableData', 'post', excel.mergeTableData)
// 自定义表格
Mock.mock('/excel/getFiles', 'post', excel.getFileList)
Mock.mock('/excel/delFiles', 'post', excel.delFiles)

// echarts菜单
Mock.mock('/echarts/getCateData', 'get', echarts.getCateData)
Mock.mock('/echarts/getDepartTop', 'post', echarts.getDepartTop)

// 拖拽
Mock.mock('/draggable/getFiles', 'post', draggable.getFileList)

export default Mock
