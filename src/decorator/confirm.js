import { MessageBox } from 'element-ui'
/**
 * 确认提示框装饰器
 * @param {*} message 提示信息
 * @param {*} title 标题
 * @param {*} cancelFn 取消回调函数
 */
export function confirm(
  message,
  title = '提示',
  cancelFn = () => {},
  determineFn = () => {}
) {
  return function(target, name, descriptor) {
    const originFn = descriptor.value
    descriptor.value = async function(...rest) {
      MessageBox.confirm(message, title, {
        confirmButtonText: '确 定',
        cancelButtonText: '取 消',
        cancelButtonClass: 'el-button--primary is-plain',
        type: 'warning'
      })
        .then(() => {
          originFn.apply(this, rest)
          determineFn && determineFn.apply(this, rest)
        })
        .catch(error => {
          cancelFn && cancelFn(error)
        })
    }
  }
}
