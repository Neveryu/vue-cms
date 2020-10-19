import Mock from 'mockjs'

const fileTypesArr = ['', 'pdf', 'code']
const count = 15
const fileList = []
for(let i = 0; i < count; i++) {
  fileList.push(Mock.mock({
    'id|+1': 1,
    materialType: '@natural(0, 4)',
    'fileType|1': fileTypesArr,
    name: '@ctitle(4, 8)',
    nameEdit: false,
    thumbnailUrl: '',
    size: '@natural(10, 400)k',
    createdTime: '@datetime()',
    createdUserName: '@cname()',
    createdOrgName: '@cword("文化宣传教育体育", 2, 4)部',
    updateTime: '@datetime()',
    updateUserName: '@cname()',
    downloadCount: '@natural(10, 100)'
  }))
}

function getFileList() {
  return fileList
}

export { getFileList }
