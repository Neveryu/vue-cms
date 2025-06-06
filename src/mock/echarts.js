// import Mock from 'mockjs'

// let cateDataLength = 10
// let cateData = Mock.mock({
//   'list|1-6': [{
//     'id|+1': 1
//   }]
// })

/* eslint-disable */
const cateData = {
  data: [
    {
      all: 484,
      children: [
        { all: 120, pid: 10000, quesId: 10001, quesName: '武汉' },
        { all: 100, pid: 10000, quesId: 10002, quesName: '鄂州' },
        { all: 90, pid: 10000, quesId: 10003, quesName: '咸宁' },
        { all: 66, pid: 10000, quesId: 10004, quesName: '黄冈' },
        { all: 88, pid: 10000, quesId: 10005, quesName: '荆州' },
      ],
      pid: 1,
      quesId: 10000,
      quesName: '湖北',
    },
    {
      all: 450,
      children: [
        { all: 100, pid: 11000, quesId: 11001, quesName: '广州' },
        { all: 200, pid: 11000, quesId: 11002, quesName: '惠州' },
        { all: 70, pid: 11000, quesId: 11003, quesName: '珠海' },
        { all: 80, pid: 11000, quesId: 11004, quesName: '佛山' },
      ],
      pid: 1,
      quesId: 11000,
      quesName: '广东',
    },
    {
      all: 243,
      children: [
        { all: 88, pid: 12000, quesId: 12001, quesName: '杭州' },
        { all: 100, pid: 12000, quesId: 12002, quesName: '宁波' },
        { all: 20, pid: 12000, quesId: 12003, quesName: '温州' },
        { all: 35, pid: 12000, quesId: 12004, quesName: '嘉兴' },
      ],
      pid: 1,
      quesId: 12000,
      quesName: '浙江',
    },
    {
      all: 285,
      children: [
        { all: 220, pid: 13000, quesId: 13001, quesName: '成都' },
        { all: 20, pid: 13000, quesId: 13002, quesName: '雅安' },
        { all: 45, pid: 13000, quesId: 13003, quesName: '绵阳' },
      ],
      pid: 1,
      quesId: 13000,
      quesName: '四川',
    },
    {
      all: 235,
      children: [
        { all: 75, pid: 14000, quesId: 14001, quesName: '济南' },
        { all: 90, pid: 14000, quesId: 14002, quesName: '青岛' },
        { all: 40, pid: 14000, quesId: 14003, quesName: '烟台' },
        { all: 30, pid: 14000, quesId: 14004, quesName: '威海' },
      ],
      pid: 1,
      quesId: 14000,
      quesName: '山东',
    },
    {
      all: 285,
      children: [
        { all: 120, pid: 15000, quesId: 15001, quesName: '台北' },
        { all: 60, pid: 15000, quesId: 15002, quesName: '桃园' },
        { all: 50, pid: 15000, quesId: 15003, quesName: '高雄' },
        { all: 55, pid: 15000, quesId: 15004, quesName: '新竹' },
      ],
      pid: 1,
      quesId: 15000,
      quesName: '台湾',
    },
    {
      all: 595,
      children: [
        { all: 220, pid: 16000, quesId: 16001, quesName: '南京' },
        { all: 110, pid: 16000, quesId: 16002, quesName: '无锡' },
        { all: 150, pid: 16000, quesId: 16003, quesName: '苏州' },
        { all: 80, pid: 16000, quesId: 16004, quesName: '连云港' },
        { all: 35, pid: 16000, quesId: 16005, quesName: '盐城' },
      ],
      pid: 1,
      quesId: 16000,
      quesName: '江苏',
    },
    {
      all: 760,
      children: [
        { all: 150, pid: 17000, quesId: 17001, quesName: '黄埔' },
        { all: 120, pid: 17000, quesId: 17002, quesName: '徐汇' },
        { all: 100, pid: 17000, quesId: 17003, quesName: '静安' },
        { all: 130, pid: 17000, quesId: 17004, quesName: '普陀' },
        { all: 100, pid: 17000, quesId: 17005, quesName: '虹口' },
        { all: 100, pid: 17000, quesId: 17006, quesName: '闵行' },
        { all: 60, pid: 17000, quesId: 17007, quesName: '嘉定' },
      ],
      pid: 1,
      quesId: 17000,
      quesName: '上海',
    },
    {
      all: 900,
      children: [
        { all: 240, pid: 18000, quesId: 18001, quesName: '东城' },
        { all: 220, pid: 18000, quesId: 18002, quesName: '西城' },
        { all: 120, pid: 18000, quesId: 18003, quesName: '朝阳' },
        { all: 120, pid: 18000, quesId: 18004, quesName: '海淀' },
        { all: 100, pid: 18000, quesId: 18005, quesName: '通州' },
      ],
      pid: 1,
      quesId: 18000,
      quesName: '北京',
    },
    {
      all: 840,
      children: [
        { all: 200, pid: 19000, quesId: 19001, quesName: '渝中' },
        { all: 120, pid: 19000, quesId: 19002, quesName: '万州' },
        { all: 160, pid: 19000, quesId: 19003, quesName: '陪陵' },
        { all: 120, pid: 19000, quesId: 19004, quesName: '江北' },
        { all: 80, pid: 19000, quesId: 19005, quesName: '沙坪坝' },
        { all: 120, pid: 19000, quesId: 19006, quesName: '九龙坡' },
        { all: 40, pid: 19000, quesId: 19007, quesName: '渝北' },
      ],
      pid: 1,
      quesId: 19000,
      quesName: '重庆',
    },
    {
      all: 1430,
      children: [
        { all: 200, pid: 20000, quesId: 20001, quesName: '福田' },
        { all: 220, pid: 20000, quesId: 20002, quesName: '罗湖' },
        { all: 360, pid: 20000, quesId: 20003, quesName: '南山' },
        { all: 210, pid: 20000, quesId: 20004, quesName: '盐田' },
        { all: 120, pid: 20000, quesId: 20005, quesName: '宝安' },
        { all: 120, pid: 20000, quesId: 20006, quesName: '龙岗' },
        { all: 120, pid: 20000, quesId: 20007, quesName: '龙华' },
        { all: 80, pid: 20000, quesId: 20008, quesName: '坪山' },
      ],
      pid: 1,
      quesId: 20000,
      quesName: '深圳',
    },
    { all: 600, children: [{ all: 600, pid: 21000, quesId: 21001, quesName: '新加坡' }], pid: 1, quesId: 21000, quesName: '新加坡' },
    { all: 100, children: [{ all: 100, pid: 22000, quesId: 22001, quesName: '东京' }], pid: 1, quesId: 22000, quesName: '东京' },
    { all: 600, children: [{ all: 600, pid: 23000, quesId: 23001, quesName: '莫斯科' }], pid: 1, quesId: 23000, quesName: '莫斯科' },
    { all: 550, children: [{ all: 550, pid: 24000, quesId: 24001, quesName: '梵蒂冈' }], pid: 1, quesId: 24000, quesName: '梵蒂冈' },
    { all: 211, children: [{ all: 211, pid: 25000, quesId: 25001, quesName: '纽约' }], pid: 1, quesId: 25000, quesName: '纽约' },
    { all: 163, children: [{ all: 163, pid: 26000, quesId: 26001, quesName: '尼日利亚' }], pid: 1, quesId: 26000, quesName: '尼日利亚' },
  ],
  message: '请求成功',
  status: 200,
}
function getCateData() {
  return cateData
}

const departData = {
  data: [
    { deptName: '南山', all: 360, done: 300 },
    { deptName: '东城区', all: 240, done: 200 },
    { deptName: '渝中', all: 200, done: 200 },
    { deptName: '黄埔', all: 150, done: 150 },
    { deptName: '新加坡', all: 600, done: 580 },
    { deptName: '莫斯科', all: 600, done: 600 },
    { deptName: '梵蒂冈', all: 550, done: 500 },
    { deptName: '成都', all: 220, done: 220 },
    { deptName: '纽约', all: 211, done: 211 },
    { deptName: '罗湖', all: 220, done: 210 },
  ],
  message: '请求成功',
  status: 200,
}
function getDepartTop() {
  return departData
}

export { getCateData, getDepartTop }
