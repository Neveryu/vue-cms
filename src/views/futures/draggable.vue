<template>
  <div class="mode-wrapper">
    <!-- content -->
    <draggable tag="div" class="content my_scrollbar"
      :list="dataList"
      handle=".handle"
      @end="onEnd">
    <!-- <div class="content my_scrollbar"> -->
      <div class="one-item" v-for="(file, index) of dataList" :key="file.id">
        <!-- <el-image class="img" src="">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image> -->

        <div class="img handle" @click.stop="showViewer(index)" :style="{ backgroundImage: 'url(' + file.images.large + ')' }">
          <div class="black-cover"></div>
        </div>

        <!-- <div class="img" @click.stop="showViewer" :style="{ backgroundImage: 'url(https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg)' }"></div> -->

        <div class="item-control">
          <!-- 原始的文件信息 -->
          <div class="origin">
            <!-- `checked` 为 true 或 false -->
            <el-checkbox class="checkbox" v-model="file.isChecked" @change="handleCheckbox"></el-checkbox>
            <span class="file-name" :title="file.title">{{file.title}}</span>
          </div>

          <!-- 文件大小 -->
          <div class="size-wrapper">
            <span class="size-value">时长： {{file.durations[0]}}</span>
          </div>
          <!-- 导演 -->
          <div class="size-wrapper">
            <span class="size-value">导演： {{file.directors[0].name}}</span>
          </div>
          <!-- 上映日期 -->
          <div class="date-wrapper">
            <span class="date-value">上映日期： {{file.mainland_pubdate}}</span>
          </div>

        </div>
      </div>
    <!-- </div> -->
    </draggable>

    <!-- 播放图片 -->
    <div class="image-viewer-wrapper" v-show="isShowViewer">
      <div class="viewer-mark"></div>
      <span class="viewer-close" @click.stop="hideViewer">
        <i class="el-icon-circle-close"></i>
      </span>
      <div class="viewer-actions">
        <div class="viewer-actions-inner">
          <span class="icon-wrapper" @click.stop="prevImg">
            <i class="el-icon-arrow-left"></i>  
          </span>
          <i class="el-icon-video-play" v-if="!isPlay" @click.stop="doPlay"></i>
          <i class="el-icon-video-pause" v-if="isPlay" @click.stop="doPause"></i>
          <span class="icon-wrapper" @click.stop="nextImg">
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
      </div>
      <div class="viewer__canvas">
        <img id="imgViewWrapper" :src="currentViewerImg" class="image-viewer__img">
      </div>
    </div>
  </div>
</template>

<script>
// import { mixin } from './_mixin'
import { getFileList } from '@/api/draggable'
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data() {
    return {
      // 总数量限制
      moduleMax: 100,
      dataList: [],
      isShowViewer: false,
      isPlay: false,
      currentViewerIndex: '',
      currentViewerImg: '',
      // 播放
      timer: null,
      // 预加载
      preloadTimer: null
    }
  },
  watch: {
    currentViewerIndex(index) {
      index = index || 0
      let _data = this.dataList[index]
      this.currentViewerImg = _data.images.large
    }
  },
  methods: {
    handleCheckbox() {},
    onEnd(e) {
      let params = []
      if(this.dataList.length > 1) {
        this.dataList.forEach(item => {
          params.push(item.id)
        })
        console.log('拖拽完成后的序列：', params)
      }
    },
    showViewer(index) {
      this.currentViewerIndex = index
      this.isShowViewer = true
    },
    hideViewer() {
      this.currentViewerIndex = ''
      this.currentViewerImg = ''
      this.doPause()
      this.isShowViewer = false
    },
    doPlay() {
      this.isPlay = true
      // 播放，2.5s一张
      this.timer = window.setInterval(() => {
        this.nextImg()
      }, 2500)
    },
    doPause() {
      this.isPlay = false
      window.clearInterval(this.timer)
    },
    // 前一张
    prevImg() {
      if(this.currentViewerIndex > 0) {
        this.currentViewerIndex--
      } else {
        this.currentViewerIndex = this.dataList.length - 1
      }
    },
    // 后一张
    nextImg() {
      if(this.currentViewerIndex < this.dataList.length - 1) {
        this.currentViewerIndex++
      } else {
        this.currentViewerIndex = 0
      }
    },
    // 预加载
    imgPreload(url) {
      let img = new Image()
      img.onload = function() {
        img.onload = null
      }
      img.src = url
    },
    handlerPreload() {
      if(this.dataList.length > 20) {
        for(let i = 0; i < 20; i++) {
          this.imgPreload(this.dataList[i].fileUrl)
        }
      } else {
        for(let i = 0; i < this.dataList.length; i++) {
          this.imgPreload(this.dataList[i].fileUrl)
        }
      }
      // this.dataList.forEach(item => {
      //   this.imgPreload(item.fileUrl)
      // })
    },
    // 获取数据列表
    getDataList() {
      const folderLoading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.3)'
      })
      getFileList().then(res => {
        let respData = [...res[0].subjects, ...res[1].subjects]
        this.dataList = respData
        // 执行预加载(延迟3s再预加载，以免影响主屏的缩略图加载)
        if(respData.length > 0) {
          this.preloadTimer = setTimeout(() => {
            this.handlerPreload()
            folderLoading.close()
          }, 1000)
        } else {
          folderLoading.close()
        }
      }).catch(() => {
        folderLoading.close()
      })
    },
    /* eslint-disable no-unused-vars */
    scrollFunc() {
      let contentDiv = document.querySelector('.content')
      let scrollTop = contentDiv.scrollTop || contentDiv.pageYOffset || contentDiv.scrollTop
    }
  },
  mounted() {
    this.imgView = document.getElementById('imgViewWrapper')
    // 滚动监听
    // document.addEventListener('DOMMouseScroll', this.scrollFunc, false)
    // window.onmousewheel = document.onmousewheel = this.scrollFunc
  },
  created() {
    this.getDataList()
    // 提示
    this.$message({
      message: '鼠标移动到图片上，即可拖拽',
      type: 'success',
      duration: 0,
      showClose: true
    })
  },
  deactivated() {
    this.$message.closeAll()
  },
  beforeDestroy() {
    this.doPause()
    if(this.preloadTimer) {
      clearTimeout(this.preloadTimer)
    }
  }
}
</script>

<style scoped>
.mode-wrapper {
  height: 100%;
}
.toolbar {
  /*border: 1px solid green;*/
  height: 8vh;
  min-height: 70px;
}
.btn-wrapper {
  display: inline-block;
  width: 7.5vh;
  min-width: 60px;
  height: 32%;
  background: transparent;
  border: 1px solid #7eb5f4;
  /*box-shadow: inset 0.3vh 0.3vh 10px 0 #7eb5f4, inset -0.3vh -0.3vh 10px 0 #7eb5f4;*/
  border-radius: 4px;
}
.btn-wrapper.del {
  margin-left: 1vh;
}
.btn {
  display: flex;/*设置为弹性容器*/
  width: 100%;
  height: 100%;
  align-items: center; /*定义div1的元素垂直居中*/
  justify-content: center; /*定义div1的里的元素水平居中*/
  color: #fff;
  text-align: center;
  font-size: 1.6vh;
  cursor: pointer;
}
.btn .el-icon {
  margin-top: 2px;
  transform: scale(1.05);
}
.btn.upload {
  background-color: rgba(0, 184, 236, 0.9);
  /*background-color: #00b8ec;*/
}
.btn.upload:hover {
  background-color: rgba(0, 184, 236, 1);
}
.btn.del {
  background-color: rgba(126, 181, 244, 0.15);
}
.btn.del:hover {
  background-color: rgba(126, 181, 244, 0.3);
}

.btn.upload.disabled {
  cursor: not-allowed;
}
.btn.upload.disabled:hover {
  background-color: rgba(0, 184, 236, 0.9);
}


/* 内容 */
.content {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  /*justify-content: space-between;*/
  padding-right: 1%;
  height: 72vh;
  margin-left: -15px;
  margin-right: -15px;
}
/*每一项*/
.one-item {
  box-sizing: border-box;
  display: inline-block;
  width: 12vw;
  min-width: 160px;
  height: 22vw;
  min-height: 280px;
  margin-bottom: 3vh;
  color: #fff;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
}
/*每一个图片*/
.one-item .img {
  position: relative;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  padding-top: 120%;
  background-repeat: no-repeat;
  background-origin: border-box;
  background-position: center;
  background-size: cover;
  /*transition: transform .1s;*/
}
.one-item .img:hover > .black-cover {
  /*transform: scale(1.01);*/
  background-color: rgba(0, 0, 0, 0);
}
.one-item .img .black-cover {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.06);
}


/*操作部分*/
.item-control {
  margin-top: 1vh;
  line-height: 1.4;
}
.item-control .checkbox {
  margin-right: 0.5vh;
  transform: scale(1.1);
  vertical-align: middle;
}
.item-control .origin {
  font-size: 0;
}
.item-control .origin .file-name {
  display: inline-block;
  max-width: 55%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 2.2vh;
  line-height: 2.2vh;
  text-align: right;
  color: #333;
  font-size: 1.6vh;
  vertical-align: bottom;
}

.item-control .size-value,
.item-control .date-value,
.item-control .detail-link{
  color: #a6c4df;
  font-size: 1.6vh;
}

/*修改文件名*/
.edit-wrapper {
  margin-top: 1.6vh;
  line-height: 1.4;
}
.edit-filename-input {
  background-color: transparent;
  width: 65%;
  height: 3.2vh;
}
.edit-filename-input /deep/ .el-input__inner {
  background-color: transparent;
  border-color: #4be1d8;
  height: 2.8vh;
  line-height: 2.85vh;
  color: #fff;
  padding: 0 4px;
  font-size: 1.6vh;
}
.edit-ok {
  background-color: #167998;
  border-color: #167998;
  width: 2.7vh;
  height: 2.7vh;
  padding: 0px;
  font-size: 1.8vh;
}
.edit-cancel {
  background-color: #1d7ac2;
  border-color: #1d7ac2;
  width: 2.7vh;
  height: 2.7vh;
  padding: 0px;
  font-size: 1.8vh;
  margin-left: 3px;
}


/* 上传弹窗 */
.upload-dialog /deep/ .el-dialog {
  background-color: #123877;
  color: #fff;
  width: 40%;
  min-width: 500px;
}
.upload-dialog /deep/ .el-dialog__header .el-dialog__headerbtn {
  font-size: 2.6vh;
}
.upload-dialog /deep/ .el-dialog__header .el-dialog__headerbtn .el-dialog__close {
  background-color: rgb(245, 108, 108);
  padding: 2px;
  border-radius: 50%;
  color: #fff;
}
.upload-dialog /deep/ .el-dialog__header .el-dialog__headerbtn .el-dialog__close:hover {
  padding: 3px;
}

.upload-dialog /deep/ .el-dialog__body {
  padding-top: 10px;
  color: #a6c4df;
  font-size: 1.8vh;
  min-height: 200px;
}
/*弹窗底部*/
.upload-dialog /deep/ .el-dialog__footer {
  text-align: center;
}
.upload-dialog /deep/ .el-dialog__footer .btn-submit {
  background-color: #167998;
  border-color: #167998;
  color: #fff;
  font-size: 1.8vh;
}
.upload-dialog /deep/ .el-dialog__footer .btn-cancel {
  margin-left: 50px;
  background-color: #1d7ac2;
  border-color: #1d7ac2;
  color: #fff;
  font-size: 1.8vh;
}


/*上传按钮*/
.uploader /deep/ .el-button--primary {
  margin-top: 10px;
  background-color: #167998;
  border-color: #167998;
  font-size: 1.7vh;
  padding: 8px 12px;
}
/*上传list*/
.uploader /deep/ .el-upload-list {
  width: 70%;
}
.uploader /deep/ .el-upload-list .el-icon-document {
  color: #a6c4df;
}
.uploader /deep/ .el-icon-upload-success {
  font-size: 2.4vh;
}
.uploader /deep/ .el-upload-list .el-icon-close {
  color: #F56C6C;
  font-size: 2.4vh;
}
.uploader /deep/ .el-upload-list .el-icon-close:hover {
  transform: scale(1.08);
}
.uploader /deep/ .el-upload-list .el-upload-list__item-name {
  color: #a6c4df;
  font-size: 1.6vh;
}
.uploader /deep/ .el-upload-list .el-upload-list__item {
  padding: 4px 0;
}
.uploader /deep/ .el-upload-list .el-upload-list__item,
.uploader /deep/ .el-upload-list .el-upload-list__item:hover {
  background-color: #1b427b;
  cursor: pointer;
}

/* 图片播放 */
.image-viewer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
}
.viewer-mark {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5)
}
.viewer__canvas {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-viewer__img {
  transform: scale(1) rotate(0deg);
  margin-left: 0px;
  margin-top: 0px;
  max-height: 100%;
  max-width: 100%;
}
.viewer-close {
  position: absolute;
  top: 40px;
  right: 60px;
  width: 40px;
  height: 40px;
  font-size: 40px;
  cursor: pointer;
  color: #fff;
  z-index: 1;
}
.viewer-actions {
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  width: 250px;
  height: 46px;
  padding: 0 25px;
  background-color: rgba(96, 98, 102, 0.8);
  border-color: #fff;
  border-radius: 23px;
  user-select: none;
}
.viewer-actions .viewer-actions-inner {
  width: 100%;
  height: 100%;
  text-align: justify;
  cursor: default;
  font-size: 23px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  font-size: 24px;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
}
.el-icon-arrow-left, .el-icon-arrow-right {
  font-weight: bold;
}
.el-icon-video-play, .el-icon-video-pause {
  font-size: 40px;
  cursor: pointer;
}


/*滚动条*/
.my_scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 10px;
  background-color: transparent;
}  
.my_scrollbar::-webkit-scrollbar-track {
  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
  border-radius: 10px;
  background-color: transparent;
}
.my_scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);*/
  background-color: rgba(144,147,153,.7);
  transition: background-color .3s;
}
</style>
