<template>
  <div class="container">
    <!-- 功能，工具栏 -->
    <div class="btns-group">
      <el-button type="primary" plain size="mini" icon="el-icon-download" @click="handlerDown">下载</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-edit" @click="handlerEdit">编辑</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-delete" @click="handlerDel">删除</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-rank" @click="handlerMove">移动</el-button>

      <el-button-group style="float: right;">
        <el-button class="model-change" plain size="mini" :class="{ active: showModel === 'list' }" icon="el-icon-tickets" @click="changeModel('list')">列表</el-button>
        <el-button class="model-change" plain size="mini" :class="{ active: showModel === 'expand' }" icon="el-icon-menu" @click="changeModel('expand')">精简</el-button>
      </el-button-group>
    </div>

    <!-- 列表模式 -->
    <list-model v-if="showModel === 'list'" ref="listModel" :tableDatas="fileList"
      :selectionArr="checkList"
      @downloadOne="downloadFunc"
      @delOne="delFunc"></list-model>
    <!-- 精简模式 -->
    <expand-model v-if="showModel === 'expand'" ref="expandModel" :tableDatas="fileList"></expand-model>
  </div>
</template>

<script>
import { getFiles } from '@/api/test'
import ListModel from './children/list-model'
import ExpandModel from './children/expand-model'
export default {
  components: {
    ListModel,
    ExpandModel
  },
  data() {
    return {
      // 展示模式
      showModel: 'list',
      fileList: [],
      // 当前勾选中的
      checkList: []
    }
  },
  methods: {
    changeModel(model) {
      this.showModel = model
    },
    handlerDown() {

    },
    handlerEdit() {},
    handlerMove() {},
    handlerDel() {},
    // 下载功能
    downloadFunc(id) {
      console.log(`你要下载的文件id是：${id}`)
    },
    delFunc(id) {
      console.log(id)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let index
        for(var i=0; i<this.fileList.length; i++) {
          if(this.fileList[i].id === id) {
            index = i
            break
          }
        }
        this.fileList.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.checkList = []
      })
    }
  },
  created() {
    getFiles().then(res => {
      this.fileList = res.data
    })
  }
}
</script>

<style scoped>
.btns-group {
  padding: 6px 20px 6px 0;
}
.tool-bar .txt {
  font-size: 15px;
  font-weight: 500;
}
.tool-bar {
  margin-bottom: 2px;
}
.overflow-bar {
  margin-top: 5px;
}
.file-path {
  padding: 0 20px 0 15px;
  font-size: 14px;
}
.model-change.active {
  color: #3a8ee6;
  font-weight: bold;
  border-color: #3a8ee6;
  z-index: 1;
}

/* 移动时的弹窗*/
.move-dialog /deep/ .el-dialog {
  max-width: 500px;
  border-radius: 4px;
}
.move-dialog /deep/ .el-dialog__header {
  padding: 5px 10px;
  background: -moz-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -webkit-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -o-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -ms-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  border-radius: 4px;
}
.move-dialog /deep/ .el-dialog__body {
  padding: 15px 15px;
}
.move-dialog /deep/ .el-dialog__title {
  font-size: 14px;
  font-weight: bold;
}
.move-dialog /deep/ .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}
.move-dialog /deep/ .el-dialog__footer {
  height: 50px;
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.tree-body {
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 5px;
  height: 250px;
  overflow-y: auto;
}
.tree-body /deep/ .el-tree-node__label {
  padding-left: 20px;
  background-image: url('/static/img/xc/img_folder.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 15px 15px;
}
.tree-body /deep/ .el-tree-node:focus>.el-tree-node__content {
  background-color: #e3f2fd;
}
.tree-body /deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background-color: #e3f2fd; 
}


/*删除时的弹窗*/
.del-dialog /deep/ .el-dialog {
  max-width: 500px;
  border-radius: 4px;
}
.del-dialog /deep/ .el-dialog__header {
  padding: 10px;
  background: -moz-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -webkit-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -o-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -ms-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  border-radius: 4px;
}
.del-dialog /deep/ .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.del-dialog /deep/ .el-dialog__title {
  font-size: 15px;
  font-weight: bold;
}
.del-dialog /deep/ .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}
.del-dialog .del-tips {
  text-align: center;
  font-size: 15px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 25px;
}

.phone-code /deep/ .el-dialog {
  max-width: 500px;
  border-radius: 4px;
}
.phone-code /deep/ .el-dialog__header {
  padding: 5px 10px;
  background: -moz-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -webkit-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -o-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -ms-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  border-radius: 4px;
}
.phone-code /deep/ .el-dialog__body {
  padding: 15px 15px;
}
.phone-code /deep/ .el-dialog__title {
  font-size: 14px;
  font-weight: bold;
}
.phone-code /deep/ .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}
.phone-code /deep/ .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.phone-code .del-tips {
  text-align: center;
  font-size: 15px;
  color: #999;
  margin-bottom: 15px;
}

/* 编辑 */
.edit-dialog /deep/ .el-dialog {
  min-width: 750px;
  max-width: 900px;
  border-radius: 4px;
}
.edit-dialog /deep/ .el-dialog__header {
  padding: 10px;
  background: -moz-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -webkit-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -o-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -ms-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  border-radius: 4px;
}
.edit-dialog /deep/ .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.edit-dialog /deep/ .el-dialog__title {
  font-size: 15px;
  font-weight: bold;
}
.edit-dialog /deep/ .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}
.edit-dialog .del-tips {
  text-align: center;
  font-size: 15px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 25px;
}

/*批量编辑*/
.share-theme {
  max-height: 150px;
  overflow-x: hidden;
  overflow-y: auto;
}
.share-org {
  display: flex;
  margin-top: 8px;
}
.share-org .left {
  display: inline-block;
  width: 280px;
  padding: 8px 0px;
  border: 1px solid #eee;
  border-radius: 4px;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}
.share-org .right {
  display: inline-block;
  width: 180px;
  padding: 8px 0px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-left: 15px;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}
.select-tag {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 180px;
  border-bottom: 1px solid #eee;
  padding: 0 30px 0 15px;
  color: #333;
  /*margin-bottom: 5px;*/
}
.select-tag .el-icon-close {
  position: absolute;
  left: 150px;
  top: 7px;
  cursor: pointer;
  font-size: 18px;
  color: red;
}
.el-icon-close:hover {
  border: 1px solid red;
  border-radius: 50%;
}
.topnav_box::-webkit-scrollbar {
  width: 5px;
  height:10px;
  background-color: #fff;
}  
.topnav_box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #eee;
}
.topnav_box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #a5d6a7;
}

/*tree 新建文件夹*/
.tree-body /deep/ .el-input__inner {
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
}
.tree-body /deep/ .btns {
  width: 22px;
  height: 25px;
  border-color: #409EFF;
  color: #409EFF;
  padding: 0 !important;
  margin-left: 4px;
}
.btns.cancel {
  margin-left: 4px;
}

/*tree 新建文件夹*/
.tree-body /deep/ .el-input__inner {
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
}
.tree-body /deep/ .btns {
  width: 22px;
  height: 25px;
  border-color: #409EFF;
  color: #409EFF;
  padding: 0 !important;
  margin-left: 5px;
}
.btns.cancel {
  margin-left: 5px;
}
</style>