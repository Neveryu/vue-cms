<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">
      <div slot="header">
        <span>换主题</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">更换主题文档</el-button> -->
        <el-link type="primary" style="float: right;" href="https://blog.csdn.net/csdn_yudong/article/details/97621471" target="_blank">更换文档主题</el-link>
      </div>
      <div class="box-item">
        <!-- <span class="field-label">换肤 : </span> -->
        <!-- <el-switch v-model="theme" /> -->
        <el-radio v-model="themeModel" :label="1" border>默认(可定制)</el-radio>

        <el-radio v-model="themeModel" :label="2" border>夏日心情</el-radio>
        <aside style="margin-top:15px;">Tips: 这里与 navbar 中的更换皮肤有明显的区别，它们是两种不同的换肤方法，各自有不同的应用场景；这里主要是对ElementUI的颜色做一些改变以及自定义，详情请参考文档。</aside>
      </div>

      <el-color-picker
        v-show="showColorPicker"
        class="color-picker"
        popper-class="theme-picker-dropdown"
        v-model="color"
        :predefine="predefineColors">
      </el-color-picker>
    </el-card>

    <div class="block">
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
      <el-button type="primary" icon="el-icon-edit" />
      <el-button type="primary" icon="el-icon-share" />
      <el-button type="primary" icon="el-icon-delete" />
      <el-button type="primary" icon="el-icon-search">
        Search
      </el-button>
      <el-button type="primary">
        Upload
        <i class="el-icon-upload el-icon-right" />
      </el-button>
    </div>

    <div class="block">
      <el-tag v-for="tag in tags" :key="tag.type" :type="tag.type" class="tag-item">
        {{ tag.name }}
      </el-tag>
    </div>

    <div class="block">
      <el-radio-group v-model="radio">
        <el-radio :label="3">
          Option A
        </el-radio>
        <el-radio :label="6">
          Option B
        </el-radio>
        <el-radio :label="9">
          Option C
        </el-radio>
      </el-radio-group>
      <span style="margin-left: 25px;"></span> 
      <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
    </div>

    <div class="block">
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="block">
      <el-slider v-model="slideValue" />
    </div>

    <div class="block">
      <el-alert
        class="item-alert"
        title="成功提示的文案"
        type="success"
        effect="dark">
      </el-alert>
      <el-alert
        class="item-alert"
        title="消息提示的文案"
        type="info"
        effect="dark">
      </el-alert>
      <el-alert
        class="item-alert"
        title="警告提示的文案"
        type="warning"
        effect="dark">
      </el-alert>
      <el-alert
        class="item-alert"
        title="错误提示的文案"
        type="error"
        effect="dark">
      </el-alert>
    </div>
  </div>
</template>

<script>
import { toggleClass } from '@/utils'
import('@/assets/custom-theme/theme-summer.css')
const version = require('element-ui/package.json').version // element-ui version from node_modules
const ORIGINAL_THEME = '#409EFF' // default color (blue)
export default {
  name: 'Theme',
  data() {
    return {
      chalk: '',  // 当前是否已经获取过css样式文件内容，如果获取过，这里会有值，避免多次获取
      showColorPicker: true,
      color: '#409EFF',
      predefineColors: ['#409EFF', '#1890ff', '#304156', '#212121', '#11a983', '#13c2c2', '#6959CD', '#f5222d'],
      themeModel: 1,
      tags: [
        { name: 'Tag One', type: '' },
        { name: 'Tag Two', type: 'info' },
        { name: 'Tag Three', type: 'success' },
        { name: 'Tag Four', type: 'warning' },
        { name: 'Tag Five', type: 'danger' }
      ],
      slideValue: 50,
      radio: 3,
      checked1: true,
      checked2: false
    }
  },
  watch: {
    themeModel(val) {
      toggleClass(document.body, 'theme-summer')
      if(val === 1) {
        this.showColorPicker = true
      } else {
        this.showColorPicker = false
      }
    },
    async color(val) {
      // 如果存在chalk，oldVal就是当前颜色(颜色选择器中选取的就是新颜色)
      // 否则，oldVal就是element-ui默认的蓝色
      const oldVal = this.chalk ? this.color : ORIGINAL_THEME
      if (typeof val !== 'string') return

      const themeCluster = this.getThemeCluster(val.replace('#', ''))
      const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))

      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
          const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)

          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          styleTag.innerText = newStyle
        }
      }

      // 如果没有chalk就是第一次换颜色，需要远程获取css文件
      // 后面的换色，就不用再次远程获取了
      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        await this.getCSSString(url, 'chalk')
      }

      const chalkHandler = getHandler('chalk', 'chalk-style')
      chalkHandler()

      // 过滤当前整个页面的样式文件，找到含有oldVal颜色的样式文件
      const styles = [].slice.call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText
          return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
        })
      // 然后，将其中oldVal的颜色，全部换成我们颜色选择器中选择的新的颜色
      styles.forEach(style => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
      })
    }
  },
  methods: {
    /* 更新样式 - 使用新的颜色变量替换之前的 */
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    },
    // 创建xhr，远程获取css文件，并给chalk赋值
    getCSSString(url, variable) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
            resolve()
          }
        }
        xhr.open('GET', url)
        xhr.send()
      })
    },
    /**
     * 传入一个颜色的HEX，得到这个颜色的深浅颜色数组
     * 我们知道，我们默认的主色调蓝色，在实际使用中，还需要对应的浅蓝和深蓝
     * @param  {[string]]} theme [color]
     * @return {[array]}       [对应的深浅颜色数组]
     */
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        if (tint === 0) { // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))

          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)

          return `#${red}${green}${blue}`
        }
      }

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)

        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)

        return `#${red}${green}${blue}`
      }

      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    }
  }
}
</script>

<style scoped>
.field-label{
  vertical-align: middle;
}
.box-card {
  position: relative;
  width: 400px;
  max-width: 100%;
  margin: 20px auto;
  overflow: unset;
}

.block {
  padding: 30px 24px;
}

.tag-item {
  margin-right: 15px;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
.item-alert {
  margin-bottom: 10px !important;
}

.app-container /deep/ .color-picker {
  position: absolute;
  left: -36px;
  top: 75px;
}
</style>

<style>
.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
