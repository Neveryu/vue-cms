<template>
  <div class="components-container main-container">
    
    <div class="tips">
      <el-link class="font" type="primary" href="https://quilljs.com/docs/configuration/" target="_blank">quill</el-link>
      算是现在一个常见富文本器的选择，它支持 CDN，也支持 npm 的方式；
      <p>1、工具栏可以自定义配置</p>
      <p>2、功能可以自己修改（重新定义图片上传功能，上传到服务器）</p>
      <p>3、简约实用（多了也麻烦）</p>
    </div>

    <h2>新增文章</h2>
    
    <el-upload
      id="img-upload"
      action="https://httpbin.org/post"
      :multiple="false"
      :show-file-list="false"
      :on-success="richUploadSuccess"
      style="height: 10px;">
    </el-upload>
    <div id="quill-editor" ref="quill-editor"></div>
    <!-- quill字数统计 -->
    <div class="quill-count">
      <span class="number">{{richCurrentLength}}/{{richMaxLength}}</span>
    </div>

    <el-divider content-position="left">富文本内容</el-divider>

    <div class="ql-editor" v-html="content"></div>

    <el-divider content-position="center">End</el-divider>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import ImageResize from 'quill-image-resize-module'
import { ImageDrop } from 'quill-image-drop-module'

Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/imageDrop', ImageDrop)

export default {
  // 富文本工具栏配置
  toolbarOptions: [
    [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     // 几级标题
    ['bold', 'italic', 'underline', 'strike'],    // 加粗，斜体，下划线，删除线
    [{ 'indent': '-1' }, { 'indent': '+1' }],     // 缩进
    [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
    [{ 'align': [] }],    // 对齐方式
    ['clean'],    // 清除字体样式
    ['image'],
    ['custom']  // 添加一个自定义功能
  ],
  // 自定义富文本的图片上传
  imageFunction(val) {
    if(val) {
      document.querySelector('#img-upload input').click()
    } else {
      this.quill.format('image', false)
    }
  },
  data() {
    return {
      // 富文本内容
      content: '',
      richMaxLength: 800,
      richCurrentLength: 0
    }
  },
  watch: {
    content() {
      // 富文本内容长度
      this.richCurrentLength = this.quill.getLength() - 1
      let numWrapper = document.querySelector('.quill-count')
      if(this.richCurrentLength > this.richMaxLength) {
        numWrapper.style.color = 'red'
      } else {
        numWrapper.style.color = '#666'
      }
    }
  },
  methods: {
    // 富文本中的图片上传
    richUploadSuccess(response, file, fileList) {
      /**
       * 如果上传成功
       * ps：不同的上传接口，判断是否成功的标志也不一样，需要看后端的返回
       * 通常情况下，应该有返回上传的结果状态（是否上传成功）
       * 以及，图片上传成功后的路径
       * 将路径赋值给 imgUrl
       */
      if(response.files.file) {
        let imgUrl = response.files.file
        // 获取光标所在位置
        let length = this.quill.getSelection().index
        // 插入图片，res为服务器返回的图片链接地址
        this.quill.insertEmbed(length, 'image', imgUrl)
        // 调整光标到最后
        this.quill.setSelection(length + 1)
      } else {
        // 提示信息，需引入Message
        this.$message.error('图片插入失败')
      }
    },
    onEditorChange(eventName, ...args) {
      if(eventName === 'text-change') {
        // args[0] will be delta
        // 获取富文本内容
        this.content = document.querySelector('#quill-editor').children[0].innerHTML
      } else if (eventName === 'selection-change') {
        // args[0] will be old range
      }
    },
    // 初始化自定义的quill工具栏
    // 拿到quill实例以后，在执行自定义toolbar的操作
    initCustomQullToolbar() {
      const timeButton = document.querySelector('.ql-custom')
      timeButton.style.cssText = 'width: 80px; outline: none;'
      timeButton.innerText = '自定义'
    },
    // 给自定义的按钮功能加上方法
    quillCustomFunction() {
      const h = this.$createElement
      this.$notify({
        type: 'success',
        title: '自定义一个quill功能',
        message: h('i', {style: 'color: teal'}, '可不可以让我自定义一个 Quill 的功能？可不可以让我自定义一个 Quill 的功能？')
      })
    },
    initQuill() {
      const quill = new Quill('#quill-editor', {
        // 编辑器配置选项
        theme: 'snow',
        placeholder: 'Compose an epic...',
        debug: 'error',
        modules: {
          toolbar: {
            container: this.$options.toolbarOptions,
            handlers: {  // 自定义功能
              'image': this.$options.imageFunction,
              'custom': this.quillCustomFunction
            }
          },
          imageDrop: true,
          imageResize: {
            modules: ['Resize', 'DisplaySize', 'Toolbar'],
            handleStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            toolbarStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            toolbarButtonStyles: {},
            toolbarButtonSvgStyles: {}
          }
        }
      })
      this.quill = quill
      // 拿到quill实例以后，在执行自定义toolbar的操作
      this.initCustomQullToolbar()
      /**
       * 监听富文本变化
       * editor-change 包括 text-change、selection-change
       * 你也可以分别监听 text-change 和 selection-change
       * 文档：https://quilljs.com/docs/api/#text-change
       */
      quill.on('editor-change', this.onEditorChange)
    }
  },
  mounted() {
    this.initQuill()
  },
  beforeDestroy() {
    this.quill = null
    delete this.quill
  }
}
</script>

<style scoped>
.main-container {
  max-width: 80%;
  min-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.tips {
  width: 600px;
  padding: 15px 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  line-height: 2;
}
.font {
  font-size: 18px;
}
#quill-editor {
  /*width: 80%;*/
  height: 300px;
}
/*字数统计*/
.quill-count {
  border: 1px solid #ccc;
  border-top: none;
  height: 30px;
  line-height: 30px;
  text-align: right;
  padding-right: 10px;
  font-size: 14px;
  color: #666;
}
/* 内容返显 */
.ql-editor {
  margin-bottom: 50px;
}
</style>
