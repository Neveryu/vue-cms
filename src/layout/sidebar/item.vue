<script>
  export default {
    name: 'menuItem',
    functional: true,
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    render(h, context) {
      const { icon, title } = context.props
      const vnodes = []
      if(icon) {
        // 在路由中，如果 `icon` 是以 `svg-` 开头的话，就加载 svg 图标
        // 否则就默认使用 `Element-UI` 图标
        if(icon.startsWith('svg-')) {
          const _icon = icon.substr(4)
          vnodes.push(<svg-icon class="sidebar-icon" icon-class={_icon}/>)
        } else {
          vnodes.push(<i class={'el-icon-' + icon}></i>)
        }
      }
      if(title) {
        vnodes.push(<span slot="title">{(title)}</span>)
      }
      return vnodes
    }
  }
</script>

<style scoped lang="stylus">
.sidebar-icon
  font-size 1.1em
  margin-right 8px
  margin-left 4px
  vertical-align -.3em
</style>
