/**
 * 注册全局的自定义图标组件
 */
import Vue from 'vue'
import IconSvg from '@/components/icon-svg'

Vue.component('svg-icon', IconSvg)

const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
