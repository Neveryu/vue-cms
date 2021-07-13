<template>
  <div class="components-container main-container">
    <h2>新增内容</h2>
    <div>
      <textarea id="tinymceId" :value="content" class="tinymce-textarea"/>
    </div>

    <el-divider content-position="left">富文本内容</el-divider>

    <div class="editor-content" v-html="content" />

    <div style="height: 50px;"></div>

    <el-divider content-position="center">End</el-divider>
  </div>
</template>

<script>
import load from './tinymce-components/dynamicLoadScript'
import toolbar from './tinymce-components/toolbar'
import plugins from './tinymce-components/plugins'

// why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'

export default {
  name: 'Tinymce',
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: 'tinymceId',
      height: 360,
      toolbar: [],
      menubar: 'file edit insert view format table',
      languageTypeList: {
        'en': 'en',
        'zh': 'zh_CN'
      },
      // 富文本内容
      content: '<h1 style="text-align: center;">TinyMCE</h1><p style="text-align: center; font-size: 15px;"><a href="//shang.qq.com/wpa/qunwpa?idkey=32da7a18744756b0d8ffdd05b84999afecb5265dbad0fb119033e122abe803f3" target="_blank" rel="noopener"><img title="TinyMCE Logo" src="https://raw.githubusercontent.com/Neveryu/prerender-website/master/src/assets/logo1.png" alt="TinyMCE Logo" width="120" /></a></p><p>请书写你的内容</p>'
    }
  },
  watch: {
    content(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() => window.tinymce.get(this.tinymceId).setContent(val || ''))
      }
    }
  },
  methods: {
    init() {
      // dynamic load tinymce from cdn
      load(tinymceCDN, (err) => {
        if (err) {
          this.$message.error(err.message)
          return
        }
        this.initTinymce()
      })
    },
    initTinymce() {
      const _this = this
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        language: this.languageTypeList['zh'],
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        plugins,
        menubar: this.menubar,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: editor => {
          if (_this.content) {
            editor.setContent(_this.content)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.content = editor.getContent()
          })
        },
        setup(editor) {
          editor.on('FullscreenStateChanged', (e) => {
            _this.fullscreen = e.state
          })
        }
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId)
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen')
      }
      if (tinymce) {
        tinymce.destroy()
      }
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroyTinymce()
  },
  activated() {
    if(window.tinymce) {
      this.initTinymce()
    }
  },
  deactivated() {
    this.destroyTinymce()
  }
}
</script>

<style scoped>
.main-container {
  max-width: 80%;
  min-width: 800px;
}
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container>>>.mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
</style>
