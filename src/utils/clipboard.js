import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {
  Vue.prototype.$notify({
    title: 'success',
    message: 'copy成功',
    type: 'success'
  })
}

function clipboardError() {
  Vue.prototype.$notify.error({
    title: 'error',
    message: 'copy失败'
  })
}

export default function(text, e) {
  const clipboard = new Clipboard(e.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(e)
}