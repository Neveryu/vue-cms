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
          <div
            class="file-img word"
            v-if="scope.row.materialType === 2"
            :class="{ pdf: scope.row.fileType === 'pdf', code: scope.row.fileType === 'code' }"></div>
          <div class="file-img img" v-if="scope.row.materialType === 3">
            <img :src="scope.row.thumbnailUrl" alt="" width="20" height="20" />
          </div>
          <div class="file-img news" v-if="scope.row.materialType === 4"></div>
          <el-link :underline="false" class="file-name" @click="clickFileName(scope.row)">{{ scope.row.name }}</el-link>
        </template>
      </el-table-column>
      <el-table-column property="size" align="center" label="大小" sortable="custom" width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.size">{{ scope.row.size }}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="createdTime" align="center" label="上传时间" sortable="custom" width="170"></el-table-column>
      <el-table-column property="createdUserName" align="center" label="上传人员" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.createdUserName">{{ scope.row.createdUserName }}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="createdOrgName" align="center" width="120" label="上传单位" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.createdOrgName">{{ scope.row.createdOrgName }}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="updateTime" align="center" label="修改时间" sortable="custom" width="170">
        <template slot-scope="scope">
          <span v-if="scope.row.updateTime">{{ scope.row.updateTime }}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="updateUserName" align="center" label="修改人员" show-overflow-tooltip>
        <template slot-scope="scope">
          <span v-if="scope.row.updateUserName">{{ scope.row.updateUserName }}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <el-table-column property="downloadCount" align="center" label="下载量" width="90">
        <template slot="header" slot-scope="scope">
          <el-popover placement="top-start" width="90" trigger="hover" content="新闻稿统计为打印量">
            <span slot="reference">
              下载量
              <i class="el-icon-warning" style="font-size: 16px"></i>
            </span>
          </el-popover>
        </template>
        <template slot-scope="scope">
          <span v-if="scope.row.downloadCount">{{ scope.row.downloadCount }}</span>
          <span v-else>-</span>
        </template>
      </el-table-column>
      <!-- 可操作 -->
      <el-table-column align="center" width="220" label="操作">
        <template slot-scope="scope">
          <el-button plain size="mini" @click="clickFileName(scope.row)">查看</el-button>
          <el-button plain size="mini" @click="downloadOne(scope.row.id)">下载</el-button>
          <el-button plain size="mini" @click="delOne(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 素材详情时的弹窗 -->
    <el-dialog title="素材详情" class="detail-dialog" :visible.sync="showDetailDialog" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form class="detail-form" :model="detailForm">
        <el-form-item label="名称：" prop="name" label-width="100px">
          <span>{{ detailForm.name }}</span>
        </el-form-item>
        <el-form-item label="主题：" prop="theme" label-width="100px">
          <span>{{ detailForm.theme }}</span>
        </el-form-item>
        <el-form-item label="类型：" prop="materialType" label-width="100px">
          <span>
            {{
              detailForm.materialType === 0
                ? '文件夹'
                : detailForm.materialType === 1
                  ? '视频'
                  : detailForm.materialType === 2
                    ? '文档'
                    : detailForm.materialType === 3
                      ? '图片'
                      : '新闻稿'
            }}
          </span>
        </el-form-item>
        <el-form-item label="大小：" prop="size" label-width="100px">
          <span>{{ detailForm.size }}</span>
        </el-form-item>
        <el-form-item label="创建时间：" prop="createdTime" label-width="100px">
          <span>{{ detailForm.createdTime || '--' }}</span>
        </el-form-item>
        <el-form-item label="创建人员：" prop="createdUserName" label-width="100px">
          <span>{{ detailForm.createdUserName || '--' }}</span>
        </el-form-item>
        <el-form-item label="修改时间：" prop="updateTime" label-width="100px">
          <span>{{ detailForm.updateTime || '--' }}</span>
        </el-form-item>
        <el-form-item label="修改人员：" prop="updateUserName" label-width="100px">
          <span>{{ detailForm.updateUserName || '--' }}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="">
        <el-button @click="">下 载</el-button>
        <el-button @click="delOne()">删 除</el-button>
      </div>
    </el-dialog>

    <!-- 图片查看，大图弹窗 -->
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
          加载中
          <span class="dot">...</span>
        </div>
      </el-image>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="downloadImg" size="mini">下&nbsp;&nbsp;&nbsp;载</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    nowPid: {},
    nowLevel: {},
    tableDatas: {
      type: Array,
      default: () => {
        return []
      },
    },
    // 勾选情况
    selectionArr: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      // 素材详情
      showDetailDialog: false,
      // 素材详情里面的内容
      detailForm: {},
      tableData: this.tableDatas,
      multipleSelection: this.selectionArr,
      /* 显示图片弹窗 */
      showImgDialog: false,
      imgIdDialog: 0,
      imgDialogSrc: '',
    }
  },
  watch: {
    tableDatas(val) {
      this.tableData = val
    },
  },
  methods: {
    // 排序
    doSortChange({ column, prop, order }) {
      let _order
      if (order === 'ascending') {
        _order = 0
      } else if (order === 'descending') {
        _order = 1
      } else {
        prop = ''
        _order = ''
      }
      // 如果需要全库数据的一个整体排序
      // 需要调用后台接口
      this.$emit('doSort', {
        prop,
        order: _order,
      })
    },
    downloadImg() {
      this.showImgDialog = false
      this.downloadOne(this.imgIdDialog)
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
      if (rows && rows.length > 0) {
        rows.forEach((row) => {
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
    // 点击文件名
    clickFileName(row) {
      // 如果是目录
      if (row.materialType === 0) {
        this.$emit('goFolder', row)
      } else if (row.materialType === 3) {
        // 如果是图片
        this.imgDialogSrc = row.thumbnailUrl
        this.imgIdDialog = row.id
        this.showImgDialog = true
      } else {
        // 显示详情
        this.detailForm = row
        this.showDetailDialog = true
      }
    },
  },
  created() {
    this.tableData = this.tableDatas
    this.multipleSelection = this.selectionArr
  },
  mounted() {
    this.toggleSelection(this.multipleSelection)
  },
}
</script>

<style scoped lang="scss">
.my-table ::v-deep th {
  background: transparent !important;
  font-weight: normal;
}
/*新建文件夹*/
.edit-input ::v-deep .el-input__inner {
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
  background-image: url('~@/assets/image/test/icon_folder_24_35.png');
}
.file-img.video {
  background-image: url('~@/assets/image/test/icon_video_24_94.png');
}
.file-img.word {
  background-image: url('~@/assets/image/test/icon_text.png');
}
.file-img.word.pdf {
  background-position: 0 0;
  background-size: auto 100%;
  background-image: url('~@/assets/image/test/icon_pdf_24_92.png');
}
.file-img.word.code {
  background-position: 0 0;
  background-size: auto 100%;
  background-image: url('~@/assets/image/test/icon_code.png');
}

.file-img.img {
  background-image: url('~@/assets/image/test/icon_picture_24_94.png');
}
.file-img.news {
  background-position: 0 0;
  background-size: auto 100%;
  background-image: url('~@/assets/image/test/icon_misc.png');
}
.btns {
  width: 22px;
  height: 25px;
  border-color: #409eff;
  color: #409eff;
  padding: 0 !important;
}
.btns.cancel {
  margin-left: 4px;
}

/* 详情时的弹窗*/
.detail-dialog ::v-deep .el-dialog {
  max-width: 550px;
  border-radius: 4px;
}
.detail-dialog ::v-deep .el-dialog__header {
  padding: 10px;
  background: -moz-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -webkit-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -o-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -ms-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  border-radius: 4px;
}
.detail-dialog ::v-deep .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.detail-dialog ::v-deep .el-dialog__title {
  font-size: 15px;
  font-weight: bold;
}
.detail-dialog ::v-deep .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409eff;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}

/* 编辑 */
.edit-dialog ::v-deep .el-dialog {
  min-width: 750px;
  max-width: 900px;
  border-radius: 4px;
}
.edit-dialog.edit-folder-dialog ::v-deep .el-dialog {
  width: 550px;
  max-width: 550px;
  min-width: 550px;
}
.edit-dialog ::v-deep .el-dialog__header {
  padding: 10px;
  background: -moz-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -webkit-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -o-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -ms-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  border-radius: 4px;
}
.edit-dialog ::v-deep .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.edit-dialog ::v-deep .el-dialog__title {
  font-size: 15px;
  font-weight: bold;
}
.edit-dialog ::v-deep .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409eff;
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
  height: 10px;
  background-color: #fff;
}
.topnav_box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #eee;
}
.topnav_box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #a5d6a7;
}

/*大图显示弹窗*/
.img-dialog ::v-deep .el-dialog {
  max-width: 800px;
  border-radius: 4px;
}
.img-dialog ::v-deep .el-dialog__header {
  padding: 10px;
  background: -moz-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -webkit-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -o-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: -ms-linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  background: linear-gradient(#f8f9fd 0%, #dee0e1 100%);
  border-radius: 4px;
}
.img-dialog ::v-deep .el-dialog__body {
  text-align: center;
  padding: 10px;
}
.img-dialog ::v-deep .el-dialog__body .el-image__inner {
  max-height: 60vh;
}
.img-dialog ::v-deep .el-dialog__footer {
  padding: 6px 0;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  text-align: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.img-dialog ::v-deep .el-dialog__title {
  font-size: 15px;
  font-weight: bold;
}
.img-dialog ::v-deep .el-dialog__close {
  position: relative;
  top: -10px;
  background-color: #409eff;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
}

.file-name ::v-deep .el-link--inner {
  display: inline-block;
  width: 145px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

::v-deep .el-checkbox__inner {
  transform: scale(1.1);
}
</style>
