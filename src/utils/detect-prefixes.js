/**
 * Detecting prefixes for saving time and bytes
 * css 兼容性前缀
 * @Author   Author
 * @DateTime 2020-10-16T13:19:44+0800
 * @return   {[type]}                 [description]
 */
export default function detectPrefixes () {
  let transform
  let transition
  let transitionEnd
  let hasTranslate3d
  (function () {
    let el = document.createElement('_')
    let style = el.style
    let prop
    if (style[prop = 'webkitTransition'] === '') {
      transitionEnd = 'webkitTransitionEnd'
      transition = prop
    }
    if (style[prop = 'transition'] === '') {
      transitionEnd = 'transitionend'
      transition = prop
    }
    if (style[prop = 'webkitTransform'] === '') {
      transform = prop
    }
    if (style[prop = 'msTransform'] === '') {
      transform = prop
    }
    if (style[prop = 'transform'] === '') {
      transform = prop
    }
    document.body.insertBefore(el, null)
    style[transform] = 'translate3d(0, 0, 0)'
    hasTranslate3d = !!global.getComputedStyle(el).getPropertyValue(transform)
    document.body.removeChild(el)
  }())
  return {
    transform,
    transition,
    transitionEnd,
    hasTranslate3d
  }
}
