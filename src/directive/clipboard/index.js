import Clipboard from './clipboard'

const install = function(Vue) {
  Vue.directive('Clipboard', Clipboard)
}

if (window.Vue) {
  window.clipboard = Clipboard
  // eslint-disable-next-line
  Vue.use(install)
}

Clipboard.install = install
export default Clipboard