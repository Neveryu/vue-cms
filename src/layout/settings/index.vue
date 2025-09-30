<template>
  <div class="layout-breadcrumb-seting">
    <el-drawer title="布局配置" :visible.sync="showSettingPanel" direction="rtl" destroy-on-close size="280px" @close="onDrawerClose">
      <el-scrollbar class="layout-breadcrumb-seting-bar">
        <!-- 全局主题 -->
        <el-divider content-position="left">全局主题</el-divider>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">主题颜色</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <!-- <el-color-picker v-model="getThemeConfig.primary" :predefine="predefinePrimaryColors" @change="onColorPickerChange"></el-color-picker> -->
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">深色模式</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <!-- <el-switch v-model="getThemeConfig.isDark" @change="onAddDarkChange"></el-switch> -->
          </div>
        </div>

        <!-- 顶栏设置 -->
        <el-divider content-position="left">顶栏设置</el-divider>
        <!-- <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoTopBar') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker
              v-model="getThemeConfig.topBar"
              :predefine="predefineTopBarBgColors"
              @change="onBgColorPickerChange('topBar')"></el-color-picker>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoTopBarColor') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker
              v-model="getThemeConfig.topBarColor"
              :predefine="predefineFontColors"
              @change="onBgColorPickerChange('topBarColor')"></el-color-picker>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt10">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsTopBarColorGradual') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isTopBarColorGradual" @change="onTopBarGradualChange"></el-switch>
          </div>
        </div> -->

        <!-- 菜单设置 -->
        <el-divider content-position="left">菜单设置</el-divider>
        <!-- <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoMenuBar') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker
              v-model="getThemeConfig.menuBar"
              :predefine="predefineMenuBarBgColors"
              @change="onBgColorPickerChange('menuBar')"></el-color-picker>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoMenuBarColor') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker
              v-model="getThemeConfig.menuBarColor"
              :predefine="predefineFontColors"
              @change="onBgColorPickerChange('menuBarColor')"></el-color-picker>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoMenuBarActiveColor') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker
              v-model="getThemeConfig.menuBarActiveColor"
              show-alpha
              :predefine="predefineActiveBgColors"
              @change="onBgColorPickerChange('menuBarActiveColor')" />
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt14">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsMenuBarColorGradual') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isMenuBarColorGradual" @change="onMenuBarGradualChange"></el-switch>
          </div>
        </div> -->

        <!-- 分栏设置 -->
        <el-divider content-position="left">分栏设置</el-divider>
        <!-- <div class="layout-breadcrumb-seting-bar-flex" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoColumnsMenuBar') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker
              v-model="getThemeConfig.columnsMenuBar"
              :predefine="predefineColumnsMenuBarBgColors"
              @change="onBgColorPickerChange('columnsMenuBar')"
              :disabled="getThemeConfig.layout !== 'columns'"></el-color-picker>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoColumnsMenuBarColor') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-color-picker
              v-model="getThemeConfig.columnsMenuBarColor"
              :predefine="predefineFontColors"
              @change="onBgColorPickerChange('columnsMenuBarColor')"
              :disabled="getThemeConfig.layout !== 'columns'"></el-color-picker>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt14" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsColumnsMenuBarColorGradual') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch
              v-model="getThemeConfig.isColumnsMenuBarColorGradual"
              @change="onColumnsMenuBarGradualChange"
              :disabled="getThemeConfig.layout !== 'columns'"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt14" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsColumnsMenuHoverPreload') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch
              v-model="getThemeConfig.isColumnsMenuHoverPreload"
              @change="onColumnsMenuHoverPreloadChange"
              :disabled="getThemeConfig.layout !== 'columns'"></el-switch>
          </div>
        </div> -->

        <!-- 界面设置 -->
        <el-divider content-position="left">界面设置</el-divider>
        <!-- <div class="layout-breadcrumb-seting-bar-flex" :style="{ opacity: getThemeConfig.layout === 'transverse' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsCollapse') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch
              v-model="getThemeConfig.isCollapse"
              :disabled="getThemeConfig.layout === 'transverse'"
              @change="onThemeConfigChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: getThemeConfig.layout === 'transverse' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsUniqueOpened') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch
              v-model="getThemeConfig.isUniqueOpened"
              :disabled="getThemeConfig.layout === 'transverse'"
              @change="setLocalThemeConfig"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsFixedHeader') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isFixedHeader" @change="onIsFixedHeaderChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: getThemeConfig.layout !== 'classic' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsClassicSplitMenu') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch
              v-model="getThemeConfig.isClassicSplitMenu"
              :disabled="getThemeConfig.layout !== 'classic'"
              @change="onClassicSplitMenuChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsLockScreen') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isLockScreen" @change="setLocalThemeConfig"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt11">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeLockScreenTime') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-input-number
              v-model="getThemeConfig.lockScreenTime"
              controls-position="right"
              :min="1"
              :max="9999"
              @change="setLocalThemeConfig"
              style="width: 110px"></el-input-number>
          </div>
        </div> -->

        <!-- 界面显示 -->
        <el-divider content-position="left">界面设置</el-divider>
        <!-- <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsShowLogo') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isShowLogo" @change="onIsShowLogoChange"></el-switch>
          </div>
        </div>
        <div
          class="layout-breadcrumb-seting-bar-flex mt15"
          :style="{ opacity: getThemeConfig.layout === 'classic' || getThemeConfig.layout === 'transverse' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsBreadcrumb') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch
              v-model="getThemeConfig.isBreadcrumb"
              :disabled="getThemeConfig.layout === 'classic' || getThemeConfig.layout === 'transverse'"
              @change="onIsBreadcrumbChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsBreadcrumbIcon') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isBreadcrumbIcon" @change="setLocalThemeConfig"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsTagsview') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isTagsview" @change="setLocalThemeConfig"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsTagsviewIcon') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isTagsviewIcon" @change="setLocalThemeConfig"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsCacheTagsView') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isCacheTagsView" @change="setLocalThemeConfig"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: state.isMobile ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsSortableTagsView') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch
              v-model="getThemeConfig.isSortableTagsView"
              :disabled="state.isMobile ? true : false"
              @change="onSortableTagsViewChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsShareTagsView') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isShareTagsView" @change="onShareTagsViewChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsFooter') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isFooter" @change="setLocalThemeConfig"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsGrayscale') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isGrayscale" @change="onAddFilterChange('grayscale')"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsInvert') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isInvert" @change="onAddFilterChange('invert')"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsWatermark') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-switch v-model="getThemeConfig.isWatermark" @change="onWatermarkChange"></el-switch>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt14">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourWatermarkText') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-input v-model="getThemeConfig.watermarkText" style="width: 110px" @input="onWatermarkTextInput"></el-input>
          </div>
        </div> -->

        <!-- 其它设置 -->
        <el-divider content-position="left">其他设置</el-divider>
        <!-- <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveTagsStyle') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-select v-model="getThemeConfig.tagsStyle" placeholder="请选择" style="width: 110px" @change="setLocalThemeConfig">
              <el-option label="卡片" value="tags-style-one"></el-option>
              <el-option label="简约" value="tags-style-four"></el-option>
              <el-option label="圆滑" value="tags-style-five"></el-option>
            </el-select>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveAnimation') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-select
              v-model="getThemeConfig.animation"
              placeholder="请选择"
              placement="bottom-end"
              style="width: 110px"
              @change="setLocalThemeConfig">
              <el-option label="右滑动" value="slide-right"></el-option>
              <el-option label="左滑动" value="slide-left"></el-option>
              <el-option label="淡入淡出" value="opacitys"></el-option>
            </el-select>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveColumnsAsideStyle') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-select
              v-model="getThemeConfig.columnsAsideStyle"
              placeholder="请选择"
              style="width: 110px"
              :disabled="getThemeConfig.layout !== 'columns' ? true : false"
              @change="setLocalThemeConfig">
              <el-option label="圆角" value="columns-round"></el-option>
              <el-option label="卡片" value="columns-card"></el-option>
            </el-select>
          </div>
        </div>
        <div class="layout-breadcrumb-seting-bar-flex mt15 mb27" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
          <div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveColumnsAsideLayout') }}</div>
          <div class="layout-breadcrumb-seting-bar-flex-value">
            <el-select
              v-model="getThemeConfig.columnsAsideLayout"
              placeholder="请选择"
              style="width: 110px"
              :disabled="getThemeConfig.layout !== 'columns' ? true : false"
              @change="setLocalThemeConfig">
              <el-option label="水平" value="columns-horizontal"></el-option>
              <el-option label="垂直" value="columns-vertical"></el-option>
            </el-select>
          </div>
        </div> -->

        <!-- 布局切换 -->
        <el-divider content-position="left">布局切换</el-divider>

        <!-- <div class="copy-config">
          <el-alert :title="$t('message.layout.tipText')" type="warning" :closable="false"></el-alert>
          <el-button class="copy-config-btn" type="primary" ref="copyConfigBtnRef" @click="onCopyConfigClick">
            <el-icon class="mr5">
              <ele-CopyDocument />
            </el-icon>
            {{ $t('message.layout.copyText') }}
          </el-button>
          <el-button class="copy-config-btn-reset" type="info" @click="onResetConfigClick">
            <el-icon class="mr5">
              <ele-RefreshRight />
            </el-icon>
            {{ $t('message.layout.resetText') }}
          </el-button>
        </div> -->
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      showSettingPanel: 'showSettingPanel',
    }),
  },
  data() {
    return {
      // theme: this.$store.state.settings.theme,
      // sideTheme: this.$store.state.settings.sideTheme,
      themeConfig: {
        isDrawer: true,
      },
    }
  },
  methods: {
    onDrawerClose() {
      this.$store.dispatch('setting/toggleSettingPanel')
    },
  },
}
</script>

<style lang="scss" scoped></style>
