/*
 * @Author: yu
 * @Date: 2020-11-24 23:37:25
 * @Description: 函数防抖
 */
import { throttle } from 'lodash'

/**
 * 函数节流装饰器
 * @param {number} wait 节流的毫秒
 * @param {Object} options 节流选项对象
 * [options.leading=true] (boolean): 指定调用在节流开始前。
 * [options.trailing=true] (boolean): 指定调用在节流结束后。
 */
export default function (wait, options = {}) {
  return function (target, name, descriptor) {
    descriptor.value = throttle(descriptor.value, wait, options)
  }
}
