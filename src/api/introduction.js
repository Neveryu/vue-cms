import axios from 'axios'

export function getImage() {
  return axios.post('/homepage/hometotal')
}
