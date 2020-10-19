<template>
  <div>
    <el-table
      ref="multipleTable"
      class="my-table"
      :data="tableData"
      style="width: 100%"
      @sort-change="doSortChange"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="30"></el-table-column>
      <!-- 文件图标 -->
      <el-table-column property="name" align="left" width="190" label="文件名" show-overflow-tooltip>
        <template slot-scope="scope">
          <div class="file-img folder" v-if="scope.row.materialType === 0"></div>
          <div class="file-img video" v-if="scope.row.materialType === 1"></div>
          <div class="file-img word" v-if="scope.row.materialType === 2"
            :class="{ pdf: scope.row.fileType === 'pdf',
                      code: scope.row.fileType === 'code'}">
          </div>
          <div class="file-img img" v-if="scope.row.materialType === 3">
            <img :src="scope.row.thumbnailUrl" alt="" width="20" height="20">
          </div>
          <div class="file-img news" v-if="scope.row.materialType === 4"></div>
          <template v-if="scope.row.nameEdit === true">
            <el-input class="edit-input" v-model.trim="scope.row.fileName" size="mini" style="width: 90px;" maxlength="50"></el-input>
            <el-button plain class="btns ok" icon="el-icon-check" @click="submitAddFolder"></el-button>
            <el-button plain class="btns cancel" icon="el-icon-close" @click="cancelAddFolder"></el-button>
          </template>
          <el-link :underline="false" class="file-name" v-else @click="clickFileName(scope.row)">{{scope.row.name}}</el-link>
        </template>
      </el-table-column>
      <el-table-column property="size" align="center" label="大小" sortable="custom" width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.size">{{scope.row.size}}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="createdTime" align="center" label="上传时间" sortable="custom" width="170">
      </el-table-column>
      <el-table-column property="createdUserName" align="center" label="上传人员" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.createdUserName">{{scope.row.createdUserName}}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="createdOrgName" align="center" width="120" label="上传单位" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.createdOrgName">{{scope.row.createdOrgName}}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="updateTime" align="center" label="修改时间" sortable="custom" width="170">
        <template slot-scope="scope">
          <span v-if="scope.row.updateTime">{{scope.row.updateTime}}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="updateUserName" align="center" label="修改人员" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.updateUserName">{{scope.row.updateUserName}}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="downloadCount" align="center" label="下载量" width="90">
        <template slot="header" slot-scope="scope">
          <el-popover
            placement="top-start"
            width="90"
            trigger="hover"
            content="新闻稿统计为打印量">
            <span slot="reference">下载量 <i class="el-icon-warning" style="font-size: 16px;"></i></span>
          </el-popover>
        </template>
        <template slot-scope="scope">
          <span v-if="scope.row.downloadCount">{{scope.row.downloadCount}}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <!-- 共享素材只有下载/查看 -->
      <el-table-column v-if="this.$parent.$options.moduleType === 3" align="center" width="120" label="操作">
        <template slot-scope="scope" v-if="scope.row.operate !== 'no'">
          <el-button plain v-if="scope.row.materialType === 4" @click="clickFileName(scope.row)">查看</el-button>
          <el-button plain v-else @click="downloadOne(scope.row.id)">下载</el-button>
        </template>
      </el-table-column>
      <el-table-column v-else align="center" width="180" label="操作">
        <template slot-scope="scope" v-if="scope.row.operate !== 'no'">
          <el-button plain size="mini" @click="delOne(scope.row)">删除</el-button>
          <el-button plain size="mini" v-if="scope.row.materialType === 4" @click="clickFileName(scope.row)">查看</el-button>
          <el-button plain size="mini" v-else @click="downloadOne(scope.row.id)">下载</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 素材详情时的弹窗 -->
    <el-dialog title="素材详情"
      class="detail-dialog"
      :visible.sync="showDetailDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
      <el-form class="detail-form" :model="detailForm">
        <el-form-item label="名称：" prop="name" label-width="100px">
          <span>{{detailForm.name}}</span>
        </el-form-item>
        <el-form-item label="主题：" prop="theme" label-width="100px">
          <span>{{detailForm.theme}}</span>
        </el-form-item>
        <el-form-item label="类型：" prop="materialType" label-width="100px">
          <span>{{
            detailForm.materialType === 0 ? '文件夹'
            : detailForm.materialType === 1 ? '视频'
            : detailForm.materialType === 2 ? '文档'
            : detailForm.materialType === 3 ? '图片' : '新闻稿'
          }}</span>
        </el-form-item>
        <el-form-item label="大小：" prop="size" label-width="100px">
          <span>{{detailForm.size}}</span>
        </el-form-item>
        <el-form-item label="创建时间：" prop="createdTime" label-width="100px">
          <span>{{detailForm.createdTime || '--'}}</span>
        </el-form-item>
        <el-form-item label="创建人员：" prop="createdUserName" label-width="100px">
          <span>{{detailForm.createdUserName || '--'}}</span>
        </el-form-item>
        <el-form-item label="修改时间：" prop="updateTime" label-width="100px">
          <span>{{detailForm.updateTime || '--'}}</span>
        </el-form-item>
        <el-form-item label="修改人员：" prop="updateUserName" label-width="100px">
          <span>{{detailForm.updateUserName || '--'}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="">
        <el-button type="primary">编 辑</el-button>
        <el-button @click="">下 载</el-button>
        <el-button @click="">删 除</el-button>
      </div>
    </el-dialog>

    <!-- 编辑单个 -->
    <el-dialog title="编辑素材"
      class="edit-dialog"
      :visible.sync="showEditDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
        <el-form class="" label-width="130px" :model="editFormData" ref="editFormData" :rules="editFormrules">
          <el-form-item label="素材名称：" prop="name">
            <el-input v-model.trim="editFormData.name" maxlength="50" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="素材主题：" prop="checkList">
            <div class="share-theme topnav_box">
              <el-checkbox-group v-model="editFormData.checkList">
                <el-checkbox :label="item.id" v-for="item of themeArr" :key="item.id">{{item.name}}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-form-item label="">
            <span style="color: red;">*所有上传素材将默认共享至管理员</span>
          </el-form-item>
        </el-form>
      <div slot="footer" class="">
        <el-button type="primary" @click="submitEditList('editFormData')">确 定</el-button>
        <el-button @click="showEditDialog = !showEditDialog">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 编辑单个文件夹名称 -->
    <el-dialog title="编辑文件夹"
      class="edit-dialog edit-folder-dialog"
      :visible.sync="showEditFolderDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
      <el-form class="" label-width="130px" :model="editFolder" ref="editFolderDialog" :rules="editFolderRules">
        <el-form-item label="文件夹名称：" prop="name">
          <el-input v-model.trim="editFolder.name" maxlength="50" show-word-limit></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="">
        <el-button type="primary" @click="updateFolderName('editFolderDialog')">确 定</el-button>
        <el-button @click="showEditFolderDialog = !showEditFolderDialog">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 图片大图弹窗 -->
    <el-dialog
      class="img-dialog"
      title="图片详情"
      top="10vh"
      :visible.sync="showImgDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="true">
      <el-image :src="imgDialogSrc" fit="contain">
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline" style="font-size: 100px"></i>
        </div>
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary"
          @click="downloadImg"
          size="mini">下&nbsp;&nbsp;&nbsp;载</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
// import { addFolder, updateFolderName } from '@/api/xc/material-management'
import { mixin } from './_mixin'
export default {
  mixins: [mixin],
  props: {
    nowPid: {},
    nowLevel: {},
    tableDatas: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 勾选情况
    selectionArr: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 素材详情
      showDetailDialog: false,
      // 素材详情里面的内容
      detailForm: {},
      tableData: this.tableDatas,
      multipleSelection: this.selectionArr,
      /* 编辑单个 */
      showEditDialog: false,
      /* 编辑 */
      editFormData: {
        id: 0,
        name: '',
        checkList: [],
        selectedValueIds: [],
        selectedValue: []
      },
      editFormrules: {
        name: [
          { required: true, message: '请输入素材名称', trigger: 'blur' }
        ],
        checkList: [
          { required: true, message: '请选择任务类型', trigger: 'change' }
        ]
      },
      showEditFolderDialog: false,
      editFolder: {
        id: 0,
        name: ''
      },
      editFolderRules: {
        name: [
          { required: true, message: '请输入文件名称', trigger: 'blur' }
        ]
      },
      /* 显示图片弹窗 */
      showImgDialog: false,
      imgIdDialog: 0,
      imgDialogSrc: ''
    }
  },
  watch: {
    tableDatas(val) {
      this.tableData = val
    }
  },
  methods: {
    // 排序
    doSortChange({ column, prop, order }) {
      let _order
      if(order === 'ascending') {
        _order = 0
      } else if(order === 'descending') {
        _order = 1
      } else {
        prop = ''
        _order = ''
      }
      // 如果需要全库数据的一个整体排序
      // 需要调用后台接口
      this.$emit('doSort', {
        prop,
        order: _order
      })
    },
    downloadImg() {
      this.showImgDialog = false
      this.downloadOne(this.imgIdDialog)
    },
    updateFolderName(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          let params = {
            id: this.editFolder.id,
            name: this.editFolder.name
          }
          updateFolderName(params).then(res => {
            this.$message.success('修改成功')
            this.showEditFolderDialog = false
            this.$emit('refresh')
          }).catch(err => {
            this.$message.error('修改失败')
            this.showEditFolderDialog = false
          })
        }
      })
    },
    delOne(row) {
      let _arr = []
      _arr.push(row)
      this.$refs.multipleTable.clearSelection()
      this.toggleSelection(_arr)
      this.$emit('delOne', row.id)
    },
    downloadOne(id) {
      this.$emit('downloadOne', id)
    },
    /* 勾选项同步 */
    toggleSelection(rows) {
      if(rows && rows.length > 0) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row, true)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // 表格勾选项
    handleSelectionChange(val) {
      // this.tableData.forEach(item => {
      //   item.hasChecked = false
      // })
      // if(val.length > 0) {
      //   val.forEach(item => {
      //     this.tableData.forEach((v, i, _this) => {
      //       if(v.id === row.id) {
      //         v.hasChecked = true
      //       }
      //     })
      //   })
      // }
      this.multipleSelection = val
      this.$parent.$data.checkList = val
      console.log(this.$parent.$data.checkList)
      // this.$parent.$data.fileList = this.tableData
    },
    newFolder() {
      if(this.tableData.length > 0) {
        if(this.tableData[0].nameEdit) {
          return
        }
        this.tableData.unshift({
          fileName: '新建文件夹',
          hasChecked: false,
          materialType: 0,
          operate: 'no',
          nameEdit: true
        })
        // this.toggleSelection([])
      } else {
        this.tableData.unshift({
          fileName: '新建文件夹',
          hasChecked: false,
          materialType: 0,
          operate: 'no',
          nameEdit: true
        })
      }
    },
    cancelAddFolder() {
      if(this.tableData[0].nameEdit) {
        this.tableData.shift()
      }
    },
    submitAddFolder() {
      if(this.tableData[0].fileName.length > 0) {
        let params = {
          pid: this.nowPid,
          level: this.nowLevel,
          name: this.tableData[0].fileName
        }
        addFolder(params).then(res => {
          this.$message.success('新建文件夹成功')
          this.$emit('addSuccess')
        }).catch(err => {
          this.$message.error('新建文件夹失败')
        })
      } else {
        this.cancelAddFolder()
      }
    },
    // 点击文件名
    clickFileName(row) {
      // console.log(id, type)
      // 如果是目录
      if(row.materialType === 0) {
        this.$emit('goFolder', row)
      } else if(row.materialType === 3) { // 如果是图片
        let _ext = row.imgUrl.substr(row.imgUrl.lastIndexOf('.') + 1)
        _ext = _ext.toLowerCase()
        if(_ext == 'tif' || _ext == 'tiff' || _ext == 'wbmp') {
          this.imgDialogSrc = row.thumbnailUrl
        } else {
          this.imgDialogSrc = row.imgUrl
        }
        this.imgIdDialog = row.id
        this.showImgDialog = true
      } else if(row.materialType === 4) { // 如果是新闻稿
        let currentUrl = window.location.href.split('#')
        window.open(currentUrl[0] + '#/' + 'xcNewsDetail?m=' + this.$parent.$options.moduleType + '&id=' + row.id)
        // this.$router.push({ path: 'xcNewsDetail', query: { id: `${row.id}` } })
      } else {
        // 显示详情
        // this.detailForm = row
        // this.showDetailDialog = true

      }
    }
  },
  created() {
    this.tableData = this.tableDatas
    this.multipleSelection = this.selectionArr
  },
  mounted() {
    this.toggleSelection(this.multipleSelection)
  }
}
</script>

<style scoped>
.my-table /deep/ th {
  background: transparent !important;
  font-weight: normal;
}
/*新建文件夹*/
.edit-input /deep/ .el-input__inner{
  padding: 0 8px;
}
.file-img {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.file-img.folder {
  background-image: url('../../../assets/images/test/icon_folder_24_35.png');
}
.file-img.video {
  background-image: url('../../../assets/images/test/icon_video_24_94.png');
}
.file-img.word {
  background-image: url('../../../assets/images/test/icon_text.png');
}
.file-img.word.pdf {
  background-position: 0 0;
  background-size: auto 100%;
  background-image: url('../../../assets/images/test/icon_pdf_24_92.png');
}
.file-img.word.code {
  background-position: 0 0;
  background-size: auto 100%;
  background-image: url('../../../assets/images/test/icon_code.png');
}

.file-img.img {
  background-image: url('../../../assets/images/test/icon_picture_24_94.png')
}
.file-img.news {
  background-position: 0 0;
  background-size: auto 100%;
  background-image: url('../../../assets/images/test/icon_misc.png');
}
.btns {
  width: 22px;
  height: 25px;
  border-color: #409EFF;
  color: #409EFF;
  padding: 0 !important;
}
.btns.cancel {
  margin-left: 4px;
}


/* 详情时的弹窗*/
.detail-dialog /deep/ .el-dialog {
  max-width: 550px;
  border-radius: 4px;
}
.detail-dialog /deep/ .el-dialog__header {
  padding: 10px;
  background: -moz-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -webkit-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -o-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -ms-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  border-radius: 4px;
}
.detail-dialog /deep/ .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.detail-dialog /deep/ .el-dialog__title {
  font-size: 15px;
  font-weight: bold;
}
.detail-dialog /deep/ .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}

/* 编辑 */
.edit-dialog /deep/ .el-dialog {
  min-width: 750px;
  max-width: 900px;
  border-radius: 4px;
}
.edit-dialog.edit-folder-dialog /deep/ .el-dialog {
  width: 550px;
  max-width: 550px;
  min-width: 550px;
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
  height: 250px;
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
  height: 250px;
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
.el-icon-close {
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

/*大图显示弹窗*/
.img-dialog /deep/ .el-dialog {
  max-width: 800px;
  border-radius: 4px;
}
.img-dialog /deep/ .el-dialog__header {
  padding: 10px;
  background: -moz-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -webkit-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -o-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: -ms-linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  background: linear-gradient(#F8F9FD 0%, #DEE0E1 100%);
  border-radius: 4px;
}
.img-dialog /deep/ .el-dialog__body {
  text-align: center;
  padding: 10px;
}
.img-dialog /deep/ .el-dialog__body .el-image__inner {
  max-height: 60vh;
}
.img-dialog /deep/ .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.img-dialog /deep/ .el-dialog__title {
  font-size: 15px;
  font-weight: bold;
}
.img-dialog /deep/ .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409EFF;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}

.file-name /deep/ .el-link--inner {
  display: inline-block;
  width: 145px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/deep/ .el-checkbox__inner {
  transform: scale(1.1)
}
</style>