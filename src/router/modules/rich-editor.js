// 富文本
import Layout from '@/layout/layout'

const richEditor = {
	path: '/rich-editor',
  alwaysShow: true,
  meta: {
    icon: 's-order',
    title: '富文本'
  },
  redirect: '/rich-editor/quill',
  component: Layout,
  children: [
    {
      path: '/rich-editor/quill',
      name: 'QuillEditor',
      meta: {icon: 's-order', title: 'quill'},
      component: () => import('@/views/rich-editor/quill')
    },
    {
      path: '/rich-editor/tinymce',
      name: 'TinyMCE',
      meta: {icon: 'svg-type', title: 'tinymce'},
      component: () => import('@/views/rich-editor/tinymce')
    }
  ]
}

export default richEditor