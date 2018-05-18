import axios from 'axios'

export function getTable() {
  return axios.post('/api/getmoviepiaofang')
}
