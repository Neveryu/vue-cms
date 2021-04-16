/**
 * 存储内容到localStorage中，__vue_cms__
 * 为了数据安全隔离，单独建了一个变量 “__vue_cms__”
 * @Author   Author
 * @DateTime 2020-11-24T19:48:27+0800
 * @param    {[string]}                 key   [description]
 * @param    {[string]}                 value [description]
 */
function saveToLocal(key, value) {
  let vue_cms = window.localStorage.__vue_cms__
  if (!vue_cms) {
    vue_cms = {}
  } else {
    vue_cms = JSON.parse(vue_cms)
  }
  vue_cms[key] = value
  window.localStorage.__vue_cms__ = JSON.stringify(vue_cms)
}

function loadFromLocal(key, def) {
  let vue_cms = window.localStorage.__vue_cms__
  if (!vue_cms) {
    return def
  }
  vue_cms = JSON.parse(vue_cms)
  if (!vue_cms) {
    return def
  }
  let result = vue_cms[key]
  return result || def
}

export { saveToLocal, loadFromLocal }
