import Mock from 'mockjs'

const images = [
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
]
const count = 30
const fileList = []
for (let i = 0; i < count; i++) {
  fileList.push(
    Mock.mock({
      id: i + 1,
      title: '@ctitle(4, 8)',
      'images|1': images,
      durations: formatDuration(Mock.Random.natural(4000, 7000)),
      directors: '@cname()',
      mainland_pubdate: '@date()'
    })
  )
}

function formatDuration(second) {
  return `${Math.floor(second / 3600)}时${Math.ceil((second % 3600) % 60)}分`
}

export default {
  getFileList: {
    state: true,
    url: '/homepage/hometotal',
    method: 'post',
    result: () => {
      return fileList
    }
  }
}
