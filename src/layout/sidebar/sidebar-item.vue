<template>
  <div v-if="!item.hidden">
    <template>
      <!-- 这个路由对象 item 只有一个子路由的时候，会把子路由放到一级菜单来 -->
      <!-- 除非这个路由对象有属性 alwaysShow: true 这个属性 -->
      <!-- 所以这里的意思是：这个只有一个子路由，子路由没有children，这个路由没有属性 alwaysShow: true -->
      <!-- 那么就将他的唯一子路由放到一级菜单来 -->
      <!-- 20190707 note: 那么这里的icon和title就用子路由的吧 -->
      <router-link
        v-if="hasOneShowingChildren(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChild) && !item.alwaysShow"
        :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="item.path">
          <item :icon="item.children[0].meta.icon" :title="item.children[0].meta.title"></item>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.path">
        <template slot="title">
          <item :icon="item.meta.icon" :title="item.meta.title"></item>
        </template>

        <template v-for="child of item.children">
          <sidebar-item
            v-if="!child.hidden && child.children && child.children.length > 0"
            :item="child"
            :base-path="resolvePath(child.path)"
            :key="child.path + '-item'" />
          <!-- 虽然 child.path 本身可能是唯一的，但 Vue 要求相邻的条件分支必须使用完全不同的 key，即使它们位于 v-for 循环中 -->
          <router-link v-else :to="resolvePath(child.path)" :key="child.path + '-link'">
            <el-menu-item :index="child.path">
              <item :icon="child.meta.icon" :title="child.meta.title"></item>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
// @vue/cli@5.x默认使用的是Webpack 5，Webpack 5不再自动包含Node.js核心模块，而path模块是Node.js的核心模块，不能在浏览器中直接使用。
// import path from 'path'
import Item from './item'
export default {
  name: 'sidebar-item',
  components: {
    Item,
  },
  props: {
    // 一级路由对象
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      onlyOneChild: null,
    }
  },
  methods: {
    hasOneShowingChildren(children, parent) {
      console.log(children, parent, 111)
      // 把 children 里面没有 hidden 属性的元素，收集起来，看看有哪些
      // 1、后面要来判断，children 里面是不是只有一个
      // 2、亦或者没有 【比如 '/login' 这个 route 就没有 children】
      // 3、亦或者 children 里面的子路由大于1个
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          // 这个地方就一直循环下去，至于是不是只有一个child，在后面会判断
          this.onlyOneChild = item
          return true
        }
      })
      // 只有 1 个，符合我们这个函数的目的，返回 true
      if (showingChildren.length === 1) {
        return true
      }

      // 如果最终没有任何结果的话，就显示父元素路由
      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: '',
          noShowingChild: true,
        }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      // return path.resolve(this.basePath, routePath)
      // return this.basePath == '/' ? this.basePath + routePath : this.basePath + '/' + routePath
      return routePath
    },
  },
  created() {
    // console.log(this.basePath)
  },
  mounted() {},
}
</script>
