import axios from 'axios'

export function getHomeTotal() {
  return axios.post('/homepage/hometotal')
}

export function getHomeDetailItem() {
  return axios.post('/homepage/detailItem')
}

export function getRank() {
  return axios.post('/homepage/investmentRank')
}