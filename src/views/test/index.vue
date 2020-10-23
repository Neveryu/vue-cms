<template>
  <div class="container">
    <!-- 功能，工具栏 -->
    <div class="btns-group">
      <el-button type="primary" plain size="mini" icon="el-icon-download" @click="handlerDown">下载</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-edit" @click="handlerEdit">编辑</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-delete" @click="handlerDel">删除</el-button>

      <el-button-group style="float: right;">
        <el-button class="model-change" plain size="mini" :class="{ active: showModel === 'list' }" icon="el-icon-tickets" @click="changeModel('list')">列表</el-button>
        <el-button class="model-change" plain size="mini" :class="{ active: showModel === 'expand' }" icon="el-icon-menu" @click="changeModel('expand')">精简</el-button>
      </el-button-group>
    </div>

    <!-- 列表模式 -->
    <list-model v-if="showModel === 'list'" ref="listModel"
      :tableDatas="fileList"
      :selectionArr="checkList"
      @downloadOne="downloadFunc"
      @delOne="delFunc">
    </list-model>

    <!-- 精简模式 -->
    <expand-model v-if="showModel === 'expand'" ref="expandModel"
      :tableDatas="fileList">
    </expand-model>

    <!-- 删除素材时的弹窗 -->
    <el-dialog title="删除"
      class="del-dialog"
      :visible.sync="showDelDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
      <p class="del-tips">确认删除选中的素材？</p>
      <div slot="footer" class="">
        <el-button type="primary" @click="submitDel">确 定</el-button>
        <el-button @click="cancelDel">取 消</el-button>
      </div>
    </el-dialog>
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
      checkList: [],
      // 删除弹窗是否显示
      showDelDialog: false
    }
  },
  methods: {
    changeModel(model) {
      this.showModel = model
    },
    handlerDown() {
      if(this.checkList.length < 1) {
        this.$message.warning('请勾选你要下载的内容')
      }
    },
    handlerEdit() {},
    /* 顶部删除按钮 */
    handlerDel() {
      if(this.checkList.length <= 0) {
        this.$message.closeAll()
        this.$message.info('请选择你要删除的素材')
        return
      }
      this.showDelDialog = true
    },
    // 确定删除
    submitDel() {
      let _ids = []
      if(this.checkList.length > 0) {
        this.checkList.forEach(item => {
          _ids.push(item.id)
        })
      }
      delMaterial(_ids).then(res => {
        this.$message.success('删除成功')
        this.showLeftTime = false
        this.phoneDialogForm.code = ''
        this.isCheckPhoneCode = false
        this.getDataList()
      }).catch(err => {
        console.log('删除', err)
      })
    },
    // 取消删除
    cancelDel() {
      this.showDelDialog = false
    },
    // 下载功能
    downloadFunc(id) {
      console.log(`你要下载的文件id是：${id}`)
    },
    delFunc(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let index
        for(let i = 0; i < this.fileList.length; i++) {
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

<style scoped lang="stylus">
.btns-group
  padding 5px 20px 5px 0
.tool-bar
  margin-bottom: 2px
  .txt
    font-size 15px
    font-weight 500
.overflow-bar
  margin-top 5px
.file-path
  padding 0 20px 0 15px
  font-size 14px
.model-change.active
  color #3a8ee6
  font-weight bold
  border-color #3a8ee6
  z-index 1

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
</style>
