import { MessageBox } from 'element-ui'

/**
 * 确认提示框装饰器
 * @param {*} message 提示信息
 * @param {*} title 标题
 * @param {*} cancelFn 取消回调函数
 */
export function confirm(message, title = '提示', cancelFn = () => {
  console.log('取消操作')
}) {
  return function(target, name, descriptor) {
    const originFn = descriptor.value
    descriptor.value = async function(...rest) {
      MessageBox.confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        originFn.apply(this, rest)
      }).catch(error => {
        cancelFn && cancelFn(error)
      })
    }
  }
}
