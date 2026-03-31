<template>
  <div v-if="!item.hidden" class="sidebar-item-wrapper">
    <!-- 没有 children 或 children 为空数组，直接渲染为 menu-item -->
    <router-link v-if="!item.children || item.children.length === 0" :to="resolvePath(item.path)">
      <el-menu-item :index="item.path">
        <item :icon="item.meta && item.meta.icon" :title="item.meta && item.meta.title"></item>
      </el-menu-item>
    </router-link>

    <!-- 有 alwaysShow 属性，必须渲染为 submenu -->
    <el-submenu v-else-if="item.alwaysShow" :index="item.path" :popper-class="'transverse-menu-popper'">
      <template slot="title">
        <item :icon="item.meta && item.meta.icon" :title="item.meta && item.meta.title"></item>
      </template>
      <sidebar-item
        v-for="child in getVisibleChildren(item)"
        :key="child.path + '-item'"
        :item="child"
        :base-path="resolvePath(child.path)" />
    </el-submenu>

    <!-- 有多个子路由，渲染为 submenu -->
    <el-submenu v-else-if="getVisibleChildren(item).length > 1" :index="item.path" :popper-class="'transverse-menu-popper'">
      <template slot="title">
        <item :icon="item.meta && item.meta.icon" :title="item.meta && item.meta.title"></item>
      </template>
      <sidebar-item v-for="child in getVisibleChildren(item)" :key="child.path + '-item'" :item="child" :base-path="resolvePath(child.path)" />
    </el-submenu>

    <!-- 只有一个可见的子路由，透传渲染为 menu-item -->
    <router-link v-else-if="getVisibleChildren(item).length === 1" :to="resolvePath(getVisibleChildren(item)[0].path)">
      <el-menu-item :index="item.path">
        <item
          :icon="getVisibleChildren(item)[0].meta && getVisibleChildren(item)[0].meta.icon"
          :title="getVisibleChildren(item)[0].meta && getVisibleChildren(item)[0].meta.title"></item>
      </el-menu-item>
    </router-link>
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
    return {}
  },
  methods: {
    // 获取可见的子路由
    getVisibleChildren(route) {
      if (!route.children || route.children.length === 0) {
        return []
      }
      return route.children.filter((child) => !child.hidden)
    },
    resolvePath(routePath) {
      return routePath
    },
  },
  created() {
    // console.log(this.basePath)
  },
  mounted() {},
}
</script>

<style scoped>
/* 使用 display: contents 使 wrapper 不产生实际布局盒子 */
/* 这样 el-menu 的子元素结构不会被破坏 */
.sidebar-item-wrapper {
  display: contents;
}
</style>
