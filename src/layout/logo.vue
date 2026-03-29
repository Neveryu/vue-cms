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
  data() {
    return {
      logoMini: '/static/image/logo/logo.png',
      globalTitle: 'vue-cms',
    }
  },
  computed: {
    ...mapGetters({
      // routers: 'routers',
      themeConfig: 'setting',
    }),
    // 设置 logo 的显示。classic 经典布局默认显示 logo
    setShowLogo() {
      let { isCollapse, layout } = this.themeConfig
      return !isCollapse || layout === 'classic'
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
  // width: 220px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
  color: var(--primary);
  font-size: 16px;
  cursor: pointer;
  // animation: logoAnimation 0.3s ease-in-out;
  span {
    white-space: nowrap;
    display: inline-block;
  }
  &:hover {
    span {
      color: var(--primary-light-2);
    }
  }
  &-medium-img {
    width: 20px;
    margin-right: 5px;
  }
}
.layout-logo-size {
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  // animation: logoAnimation 0.3s ease-in-out;
  &-img {
    width: 20px;
    margin: auto;
  }
  // &:hover {
  //   img {
  //     animation: logoAnimation 0.3s ease-in-out;
  //   }
  // }
}
</style>
