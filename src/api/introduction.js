import axios from 'axios'

export function getImage() {
  return axios.get('/api/getMovieImage')
  // return axios.get('http://dianying.nuomi.com/common/ranklist')
}
