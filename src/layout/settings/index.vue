<template>
  <div class="layout-breadcrumb-seting">
    <el-drawer :title="$t('settings.title')" :visible.sync="showSettingPanel" direction="rtl" destroy-on-close size="280px" @close="onDrawerClose">
      <el-scrollbar class="layout-breadcrumb-seting-bar" wrap-style="overflow-x: hidden;">
        <!-- 全局主题 -->
        <el-divider content-position="left">{{ $t('settings.globalTheme') }}</el-divider>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.primaryColor') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker v-model="themeConfig.primary" :predefine="predefineColors" @change="onPrimaryChange"></el-color-picker>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.darkMode') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isDark" @change="onDarkChange"></el-switch>
          </div>
        </div>

        <!-- 界面设置 -->
        <el-divider content-position="left">{{ $t('settings.interfaceSettings') }}</el-divider>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.sidebarCollapse') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isCollapse" @change="onCollapseChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.menuAccordion') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isUniqueOpened" @change="onUniqueOpenedChange"></el-switch>
          </div>
        </div>

        <!-- 面包屑设置 -->
        <el-divider content-position="left">{{ $t('settings.breadcrumbSettings') }}</el-divider>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.enableBreadcrumb') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isBreadcrumb" @change="onBreadcrumbChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.breadcrumbIcon') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isBreadcrumbIcon" @change="onBreadcrumbIconChange"></el-switch>
          </div>
        </div>

        <!-- 标签页设置 -->
        <el-divider content-position="left">{{ $t('settings.tabsSettings') }}</el-divider>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.enableTabs') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isTagsview" @change="onTagsviewChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.tabsIcon') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isTagsviewIcon" @change="onTagsviewIconChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.cacheTabs') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isCacheTagsView" @change="onCacheTagsViewChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.tabsStyle') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-select v-model="themeConfig.tagsStyle" :placeholder="$t('settings.pleaseSelect')" style="width: 110px" @change="onTagsStyleChange">
              <el-option :label="$t('settings.cardStyle')" value="tags-style-one"></el-option>
              <el-option :label="$t('settings.simpleStyle')" value="tags-style-four"></el-option>
              <el-option :label="$t('settings.smoothStyle')" value="tags-style-five"></el-option>
            </el-select>
          </div>
        </div>

        <!-- 其他设置 -->
        <el-divider content-position="left">{{ $t('settings.otherSettings') }}</el-divider>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.showLogo') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isShowLogo" @change="onShowLogoChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.showFooter') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="themeConfig.isFooter" @change="onFooterChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('settings.pageAnimation') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-select v-model="themeConfig.animation" :placeholder="$t('settings.pleaseSelect')" style="width: 110px" @change="onAnimationChange">
              <el-option :label="$t('settings.slideRight')" value="slide-right"></el-option>
              <el-option :label="$t('settings.slideLeft')" value="slide-left"></el-option>
              <el-option :label="$t('settings.fadeInOut')" value="opacitys"></el-option>
            </el-select>
          </div>
        </div>

        <!-- 布局切换 -->
        <el-divider content-position="left">{{ $t('settings.layoutSwitch') }}</el-divider>
        <div class="layout-drawer-content-flex">
          <div
            class="layout-drawer-content-item"
            :class="{ 'drawer-layout-active': themeConfig.layout === 'defaults' }"
            @click="onLayoutChange('defaults')">
            <el-container class="el-circular">
              <el-aside width="40px" class="el-aside-dark"></el-aside>
              <el-container>
                <el-header height="20px"></el-header>
                <el-main></el-main>
              </el-container>
            </el-container>
            <div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': themeConfig.layout === 'defaults' }">
              <div class="layout-tips-box">
                <div class="layout-tips-txt">{{ $t('settings.defaultLayout') }}</div>
              </div>
            </div>
          </div>
          <div
            class="layout-drawer-content-item"
            :class="{ 'drawer-layout-active': themeConfig.layout === 'classic' }"
            @click="onLayoutChange('classic')">
            <el-container class="el-circular">
              <el-header height="20px"></el-header>
              <el-container>
                <el-aside width="40px" class="el-aside-dark"></el-aside>
                <el-main></el-main>
              </el-container>
            </el-container>
            <div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': themeConfig.layout === 'classic' }">
              <div class="layout-tips-box">
                <div class="layout-tips-txt">{{ $t('settings.classicLayout') }}</div>
              </div>
            </div>
          </div>
          <div
            class="layout-drawer-content-item"
            :class="{ 'drawer-layout-active': themeConfig.layout === 'transverse' }"
            @click="onLayoutChange('transverse')">
            <el-container class="el-circular">
              <el-header height="20px" class="el-aside-dark"></el-header>
              <el-main></el-main>
            </el-container>
            <div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': themeConfig.layout === 'transverse' }">
              <div class="layout-tips-box">
                <div class="layout-tips-txt">{{ $t('settings.transverseLayout') }}</div>
              </div>
            </div>
          </div>
          <div
            class="layout-drawer-content-item"
            :class="{ 'drawer-layout-active': themeConfig.layout === 'columns' }"
            @click="onLayoutChange('columns')">
            <el-container class="el-circular">
              <el-aside width="16px" class="el-aside-dark"></el-aside>
              <el-aside width="24px"></el-aside>
              <el-container>
                <el-header height="20px"></el-header>
                <el-main></el-main>
              </el-container>
            </el-container>
            <div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': themeConfig.layout === 'columns' }">
              <div class="layout-tips-box">
                <div class="layout-tips-txt">{{ $t('settings.columnsLayout') }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 重置按钮 -->
        <div class="copy-config">
          <el-button class="copy-config-btn-reset" type="danger" @click="onResetClick">
            <i class="el-icon-refresh-right mr5"></i>
            {{ $t('settings.restoreDefault') }}
          </el-button>
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      showSettingPanelGetter: 'showSettingPanel',
    }),
    // 使用 getter/setter 来支持 .sync 修饰符
    showSettingPanel: {
      get() {
        return this.showSettingPanelGetter
      },
      set(value) {
        // 只有当值发生变化时才切换
        if (value !== this.showSettingPanelGetter) {
          this.toggleSettingPanel()
        }
      },
    },
    themeConfig() {
      return this.$store.state.setting
    },
  },
  data() {
    return {
      predefineColors: ['#409EFF', '#1890ff', '#304156', '#212121', '#11a983', '#13c2c2', '#6959CD', '#f5222d'],
    }
  },
  methods: {
    ...mapActions({
      toggleSettingPanel: 'setting/toggleSettingPanel',
      setCollapse: 'setting/setCollapse',
      setLayout: 'setting/setLayout',
      setBreadcrumb: 'setting/setBreadcrumb',
      setBreadcrumbIcon: 'setting/setBreadcrumbIcon',
      setPrimary: 'setting/setPrimary',
      setDark: 'setting/setDark',
      setUniqueOpened: 'setting/setUniqueOpened',
      setTagsview: 'setting/setTagsview',
      setTagsviewIcon: 'setting/setTagsviewIcon',
      setCacheTagsView: 'setting/setCacheTagsView',
      setTagsStyle: 'setting/setTagsStyle',
      setAnimation: 'setting/setAnimation',
      setShowLogo: 'setting/setShowLogo',
      setFooter: 'setting/setFooter',
      resetSetting: 'setting/resetSetting',
    }),
    onDrawerClose() {
      // 由 setter 处理关闭逻辑，这里不需要再调用 toggle
    },
    // 主题色变更
    onPrimaryChange(color) {
      this.setPrimary(color)
      this.setThemeColor(color)
    },
    // 设置主题色
    setThemeColor(color) {
      if (!color) return
      document.documentElement.style.setProperty('--primary', color)
    },
    // 深色模式变更
    onDarkChange(value) {
      this.setDark(value)
      if (value) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
    },
    // 侧边栏折叠变更
    onCollapseChange(value) {
      this.setCollapse(value)
    },
    // 菜单手风琴变更
    onUniqueOpenedChange(value) {
      this.setUniqueOpened(value)
    },
    // 面包屑开关变更
    onBreadcrumbChange(value) {
      this.setBreadcrumb(value)
    },
    // 面包屑图标变更
    onBreadcrumbIconChange(value) {
      this.setBreadcrumbIcon(value)
    },
    // 标签页开关变更
    onTagsviewChange(value) {
      this.setTagsview(value)
    },
    // 标签页图标变更
    onTagsviewIconChange(value) {
      this.setTagsviewIcon(value)
    },
    // 缓存标签页变更
    onCacheTagsViewChange(value) {
      this.setCacheTagsView(value)
    },
    // 标签页样式变更
    onTagsStyleChange(value) {
      this.setTagsStyle(value)
    },
    // Logo显示变更
    onShowLogoChange(value) {
      this.setShowLogo(value)
    },
    // 页脚显示变更
    onFooterChange(value) {
      this.setFooter(value)
    },
    // 页面动画变更
    onAnimationChange(value) {
      this.setAnimation(value)
    },
    // 布局切换
    onLayoutChange(layout) {
      this.setLayout(layout)
    },
    // 重置设置
    onResetClick() {
      this.resetSetting()
      // 重置主题色
      this.setThemeColor('#409EFF')
      // 移除深色模式
      document.documentElement.removeAttribute('data-theme')
      this.$message.success('已恢复默认设置')
    },
  },
}
</script>

<style scoped lang="scss">
.layout-breadcrumb-seting {
  :deep(.el-drawer) {
    .el-drawer__header {
      padding: 0 15px !important;
      height: 50px;
      display: flex;
      align-items: center;
      margin-bottom: 0 !important;
      border-bottom: 1px solid #ebeef5;
      color: #303133;
    }
    .el-drawer__body {
      padding: 0;
      overflow: hidden !important;
      height: calc(100vh - 50px);
    }
  }
}

.layout-breadcrumb-seting-bar {
  height: 100%;

  // 隐藏水平滚动条，美化垂直滚动条
  :deep(.el-scrollbar__wrap) {
    overflow-x: hidden !important;
    scrollbar-width: thin;
    scrollbar-color: #c0c4cc transparent;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c0c4cc;
      border-radius: 3px;

      &:hover {
        background-color: #909399;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  // 防止内容溢出导致水平滚动条
  :deep(.el-scrollbar__view) {
    overflow-x: hidden;
    padding: 0 15px;
  }

  .layout-breadcrumb-seting-bar-flex {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    &-label {
      flex: 1;
      color: #606266;
      font-size: 14px;
    }
  }

  .layout-drawer-content-flex {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;

    .layout-drawer-content-item {
      width: calc(50% - 5px);
      height: 70px;
      cursor: pointer;
      border: 1px solid transparent;
      position: relative;
      padding: 5px;

      .el-container {
        height: 100%;

        .el-aside-dark {
          background-color: #191a23;
        }

        .el-aside {
          background-color: #e9eef3;
        }

        .el-header {
          background-color: #fff;
          border-bottom: 1px solid #ebeef5;
        }

        .el-main {
          background-color: #f5f7fa;
        }
      }

      .el-circular {
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid transparent;
        transition: all 0.3s ease-in-out;
      }

      .drawer-layout-active {
        border: 1px solid #409eff;
      }

      .layout-tips-warp,
      .layout-tips-warp-active {
        transition: all 0.3s ease-in-out;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid #409eff;
        border-radius: 100%;
        padding: 4px;

        .layout-tips-box {
          transition: inherit;
          width: 30px;
          height: 30px;
          z-index: 9;
          border: 1px solid #409eff;
          border-radius: 100%;

          .layout-tips-txt {
            transition: inherit;
            position: relative;
            top: 5px;
            font-size: 12px;
            line-height: 1;
            letter-spacing: 2px;
            white-space: nowrap;
            color: #409eff;
            text-align: center;
            transform: rotate(30deg);
            left: -1px;
            background-color: #f5f7fa;
            width: 32px;
            height: 17px;
            line-height: 17px;
          }
        }
      }

      .layout-tips-warp-active {
        border-color: #409eff;

        .layout-tips-box {
          border-color: #409eff;

          .layout-tips-txt {
            color: #409eff !important;
            background-color: #f5f7fa !important;
          }
        }
      }

      &:hover {
        .el-circular {
          border-color: #409eff;
        }

        .layout-tips-warp {
          border-color: #409eff;

          .layout-tips-box {
            border-color: #409eff;

            .layout-tips-txt {
              color: #409eff !important;
              background-color: #f5f7fa !important;
            }
          }
        }
      }
    }
  }

  .copy-config {
    margin: 20px 0;
    padding-bottom: 20px;

    .copy-config-btn-reset {
      width: 100%;
    }
  }
}

.mt15 {
  margin-top: 15px;
}

.mr5 {
  margin-right: 5px;
}
</style>
