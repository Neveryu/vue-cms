import Mock from 'mockjs'

export function getHomeTotal() {
  return [
    {
      title: '平台交易总额',
      value: Mock.mock('@natural(0, 9999999)'),
      color: Mock.mock('@hex'),
      data: [Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)')]
    },
    {
      title: '已为投资人赚取',
      value: Mock.mock('@natural(0, 9999999)'),
      color: Mock.mock('@hex'),
      data: [Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)')]
    },
    {
      title: '待回收金额',
      value: Mock.mock('@natural(0, 9999999)'),
      color: Mock.mock('@hex'),
      data: [Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)')]
    },
    {
      title: '已回收金额',
      value: Mock.mock('@natural(0, 9999999)'),
      color: Mock.mock('@hex'),
      data: [Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)'), Mock.mock('@integer(1, 120)')]
    }
  ]
}

export function getHomeDetailItem() {
  return [
    {
      name: '注册用户数',
      value: Mock.mock('@natural(0, 999999)'),
      color: '#8499b6'
    },
    {
      name: '活跃用户数',
      value: Mock.mock('@natural(0, 999999)'),
      color: '#6976a2'
    },
    {
      name: '人均投资金额',
      value: Mock.mock('@natural(0, 999999)'),
      color: '#7e8ec2'
    },
    {
      name: '网站日均访问量',
      value: Mock.mock('@natural(0, 999999)'),
      color: '#837e9e'
    }
  ]
}

const rankList = []
const count = 30
for (let i = 0; i < count; i++) {
  rankList.push(Mock.mock({
    name: '@cname',
    value: '@natural(0, 9999999)',
    avatar: 'https://avatars.githubusercontent.com/u/' + '@natural(1000000, 9999999)'
  }))
}
export function getHomeInvestmentRank() {
  return rankList
}