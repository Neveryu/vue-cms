<template>
  <div class="layout-logo" v-if="setShowLogo" @click="onLogoClick">
    <img :src="logoMini" class="layout-logo-medium-img" />
    <span class="my-line-1">{{ globalTitle }}</span>
  </div>
  <div class="layout-logo-size" v-else @click="onLogoClick">
    <img :src="logoMini" class="layout-logo-size-img" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logoMini: process.env.BASE_URL + 'static/image/logo/logo.svg',
      globalTitle: 'Vue CMS',
    }
  },
  computed: {
    ...mapGetters({
      themeConfig: 'setting',
    }),
    // 设置 logo 的显示
    setShowLogo() {
      let { isCollapse, layout } = this.themeConfig
      // 分栏布局时，只显示图标，不显示标题
      if (layout === 'columns') {
        return false
      }
      // 优先使用传入的 isCollapse prop
      if (this.isCollapse) {
        return false
      }
      return !isCollapse || layout === 'classic' || layout === 'transverse'
    },
  },
  methods: {
    ...mapActions({
      toggleCollapse: 'setting/toggleCollapse',
    }),
    // 点击logo图标实现菜单展开/收起
    onLogoClick() {
      if (this.themeConfig.layout === 'transverse') return false
      this.toggleCollapse()
    },
  },
}
</script>

<style scoped lang="scss">
.layout-logo {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
  color: var(--primary);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  span {
    white-space: nowrap;
    display: inline-block;
    letter-spacing: 0.5px;
  }
  &:hover {
    span {
      color: var(--primary-light-2);
    }
  }
  &-medium-img {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
}
.layout-logo-size {
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  &-img {
    width: 28px;
    height: 28px;
    margin: auto;
  }
}
</style>
