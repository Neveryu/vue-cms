import request from '@/utils/request'

export function getHomeTotal() {
  return request({
    url: '/homepage/hometotal',
    method: 'post',
  })
}

export function getHomeDetailItem() {
  return request({
    url: '/homepage/detailItem',
    method: 'post',
  })
}

export function getRank() {
  return request({
    url: '/homepage/investmentRank',
    method: 'post',
  })
}
