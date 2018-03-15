import axios from 'axios'

export function getHomeTotal() {
  return axios.post('/homepage/hometotal')
}