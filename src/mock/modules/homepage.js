import Mock from 'mockjs'

const homeTotalData = [
  {
    title: '平台交易总额',
    value: Mock.mock('@natural(0, 9999999)'),
    color: Mock.mock('@hex'),
    data: [
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
    ],
  },
  {
    title: '已为投资人赚取',
    value: Mock.mock('@natural(0, 9999999)'),
    color: Mock.mock('@hex'),
    data: [
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
    ],
  },
  {
    title: '待回收金额',
    value: Mock.mock('@natural(0, 9999999)'),
    color: Mock.mock('@hex'),
    data: [
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
    ],
  },
  {
    title: '已回收金额',
    value: Mock.mock('@natural(0, 9999999)'),
    color: Mock.mock('@hex'),
    data: [
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
      Mock.mock('@integer(1, 120)'),
    ],
  },
]

const rankList = []
const count = 30
for (let i = 0; i < count; i++) {
  rankList.push(
    Mock.mock({
      name: '@cname',
      value: '@natural(0, 9999999)',
      avatar: 'https://avatars.githubusercontent.com/u/' + '@natural(1000000, 9999999)',
    }),
  )
}

export default {
  getHomeTotal: {
    state: true,
    url: '/homepage/hometotal',
    method: 'post',
    result: () => {
      return homeTotalData
    },
  },
  getHomeDetailItem: {
    state: true,
    url: '/homepage/detailItem',
    method: 'post',
    result: () => {
      return [
        {
          name: '注册用户数',
          value: Mock.mock('@natural(0, 999999)'),
          color: '#ec407a',
        },
        {
          name: '活跃用户数',
          value: Mock.mock('@natural(0, 999999)'),
          color: '#ab47bc',
        },
        {
          name: '人均投资金额',
          value: Mock.mock('@natural(0, 999999)'),
          color: '#2196f3',
        },
        {
          name: '网站日均访问量',
          value: Mock.mock('@natural(0, 999999)'),
          color: '#009688',
        },
      ]
    },
  },
  normalRecycleInfo: {
    state: true,
    url: '/homepage/investmentRank',
    method: 'post',
    result: () => rankList,
  },
}
