import jsonp from '@/common/jsonp'

export function getImage() {
  // let url = 'https://movie.douban.com/j/new_search_subjects'
  let url = 'https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=&start=0'

  let option = {
    // param: 'callback'
  }

  let data = {
    // sort: 'U',
    // // range: '0,10',
    // tags: '',
    // start: 0
  }

  console.log([jsonp(url, data, option)], 9999)
  return Promise.all([jsonp(url, data, option)])
}
