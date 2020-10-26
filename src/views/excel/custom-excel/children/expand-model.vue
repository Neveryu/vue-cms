<template>
  <div style="overflow-x: hidden;">
    <!-- 勾选所有 -->
    <div class="top-bar">
      <el-checkbox class="all-checkbox" v-model="checkAll" @change="allChange"></el-checkbox>
      <span class="all-tips">全选</span>
      <!-- <span class="all-tips">已选中{{download}}个文件/文件夹</span> -->
    </div>
    <!-- 精简内容显示 -->
    <el-row :gutter="12" class="file-wrapper">
      <template v-if="tableData.length > 0">
        <el-col class="file-item" v-for="fileItem of tableData" :key="fileItem.id">
          <el-card shadow="hover" class="file-item-card" :class="{ active: false}">

            <el-checkbox class="checkbox" v-model="fileItem.hasChecked" @change="toggleItem(fileItem)"></el-checkbox>

            <!-- <el-checkbox-group v-model="multipleSelection">
              <el-checkbox :label="fileItem.id"></el-checkbox>
            </el-checkbox-group> -->

            <div class="file-img folder" v-if="fileItem.materialType === 0" @click="clickFolderImg(fileItem)" style="cursor: pointer;"></div>
            <div class="file-img vedio" v-if="fileItem.materialType === 1"></div>
            <div v-if="fileItem.materialType === 2" 
                class="file-img word"
                :class="{ pdf: fileItem.fileType === 'pdf',
                          ppt: (fileItem.fileType === 'ppt' || fileItem.fileType === 'pptx')}">
            </div>
            <div class="file-img img" v-if="fileItem.materialType === 3">
              <img :src="fileItem.thumbnailUrl" alt="" width="auto" height="95" style="cursor: pointer; max-width: 100%" @click="showImg(fileItem)">
            </div>
            <div class="file-img news" v-if="fileItem.materialType === 4"></div>

            <span class="item name" :title="fileItem.name" @click="toDetail(fileItem)">{{fileItem.name}}</span>

            <span class="item">
              <span :title="fileItem.createdUserName"class="author" style="display: inline-block; width: 47%;overflow: hidden;text-overflow: ellipsis;">{{fileItem.createdUserName}}</span>
              <span :title="fileItem.createdOrgName"class="address" style="float: right; display: inline-block; width: 50%;overflow: hidden;text-overflow: ellipsis;">{{fileItem.createdOrgName}}</span>
            </span>
            <span class="item download" v-if="fileItem.materialType === 4">打印量： {{fileItem.downloadCount || 0}}</span>
            <span class="item download" v-if="fileItem.materialType === 0"></span>
            <span class="item download" v-if="fileItem.materialType === 1 || fileItem.materialType === 2 || fileItem.materialType === 3">下载量： {{fileItem.downloadCount || 0}}</span>
            <span class="item size" v-if="fileItem.materialType !== 0 && fileItem.materialType !== 4">大 小： {{fileItem.sizeText}}</span>
          </el-card>
        </el-col>
      </template>
      <template v-else>
        <el-table :data="tableData"></el-table>
      </template>
    </el-row>

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

    <!-- 素材详情时的弹窗 -->
    <el-dialog :title="detailTitle"
      class="detail-dialog"
      :visible.sync="showDetailDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
      <el-form class="detail-form" :model="detailForm">
        <el-form-item label="名称：" prop="name" label-width="100px">
          <span>{{detailForm.name}}</span>
        </el-form-item>
        <template v-if="detailForm.materialType !== 0">
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
          <el-form-item label="大小：" prop="sizeText" label-width="100px">
            <span>{{detailForm.sizeText}}</span>
          </el-form-item>
          <el-form-item label="共享对象：" prop="shareOrg" label-width="100px">
            <span>{{detailForm.shareOrg || '--'}}</span>
          </el-form-item>
        </template>
        <!-- 文件夹是创建时间，其他是上传时间-->
        <el-form-item v-if="detailForm.materialType === 0" label="创建时间：" prop="createdTime" label-width="100px">
          <span>{{detailForm.createdTime || '--'}}</span>
        </el-form-item>
        <el-form-item v-else label="上传时间：" prop="createdTime" label-width="100px">
          <span>{{detailForm.createdTime || '--'}}</span>
        </el-form-item>

        <el-form-item v-if="detailForm.materialType === 0" label="创建人员：" prop="createdUserName" label-width="100px">
          <span>{{detailForm.createdUserName || '--'}}</span>
        </el-form-item>
        <el-form-item v-else label="上传人员：" prop="createdUserName" label-width="100px">
          <span>{{detailForm.createdUserName || '--'}}</span>
        </el-form-item>

        <el-form-item label="修改时间：" prop="updateTime" label-width="100px" v-if="detailForm.updateTime">
          <span>{{detailForm.updateTime || '--'}}</span>
        </el-form-item>
        <el-form-item label="修改人员：" prop="updateUserName" label-width="100px" v-if="detailForm.updateTime">
          <span>{{detailForm.updateUserName || '--'}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="">
        <el-button @click="downloadOne(detailForm.id)">下 载</el-button>
        <el-button @click="delOne(detailForm)" v-if="this.$parent.$options.moduleType !== 3">删 除</el-button>
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
        <el-button type="primary" @click="">确 定</el-button>
        <el-button @click="showEditFolderDialog = !showEditFolderDialog">取 消</el-button>
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
      checkAll: false,
      tableData: this.tableDatas,
      multipleSelection: this.selectionArr,
      /* 显示图片弹窗 */
      showImgDialog: false,
      imgDialogSrc: '',
      imgDialogId: 0,
      showDetailDialog: false,
      // 素材详情里面的内容
      detailTitle: '素材详情',
      detailForm: {},
      /* 修改文件夹名称弹窗 */
      showEditFolderDialog: false,
      editFolder: {
        id: 0,
        name: ''
      },
      editFolderRules: {
        name: [
          { required: true, message: '请输入文件名称', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    tableDatas(val) {
      this.tableData = val
      this.toggleItem(val)
      // this.checkAll = false
      // this.allChange(false)
    }
  },
  methods: {
    // 详情中删除单个
    downloadOne(id) {
      this.showDetailDialog = false
      this.$emit('downloadOne', id)
    },
    // 详情中删除单个
    delOne(row) {
      let _arr = []
      _arr.push(row)

      this.multipleSelection = _arr
      this.$parent.$data.checkList = _arr
      this.$forceUpdate()

      this.showDetailDialog = false
      this.$emit('delOne', row)
    },
    clickFolderImg(row) {
      this.$emit('goFolder', row)
    },
    downloadImg() {
      let fileName = 'test'
      let url = window.URL.createObjectURL(new Blob(['']))
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = url
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()
    },
    showImg(row) {
      this.imgDialogSrc = row.thumbnailUrl
      this.imgDialogId = row.id
      this.showImgDialog = true
    },
    // 全选按钮的点击
    allChange(val) {
      if(val) {
        this.tableData.forEach((v, i, _this) => {
          v.hasChecked = true
        })
        this.multipleSelection = this.tableData
        this.$parent.$data.checkList = this.tableData
      } else {
        this.tableData.forEach((v, i, _this) => {
          v.hasChecked = false
        })
        this.multipleSelection = []
        this.$parent.$data.checkList = []
      }
      this.$forceUpdate()
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
        this.checkAll = false
        // this.allChange(false)
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
    // 点击文件名，显示详情（常规素材显示详情，新闻稿跳转到内容详情）
    toDetail(row) {
      if(row.materialType === 0) {
        this.detailTitle = '文件夹详情'
        // 显示详情
        this.detailForm = row
        this.showDetailDialog = true
      } else if(row.materialType === 4) {
        let currentUrl = window.location.href.split('#')
        window.open(currentUrl[0] + '#/' + 'xcNewsDetail?m=' + this.$parent.$options.moduleType + '&id=' + row.id)
        // this.$router.push({ path: 'xcNewsDetail', query: { id: `${row.id}` } })
      } else {
        this.detailTitle = '素材详情'
        // 显示详情
        this.detailForm = row
        this.showDetailDialog = true
      }
    },
    /* 单个勾选框的点击，切换 */
    toggleItem(item) {
      let _selected = []
      this.tableData.forEach((v, i, _this) => {
        if(v.hasChecked) {
          _selected.push(v)
        }
      })
      this.multipleSelection = _selected
      this.$parent.$data.checkList = _selected

      if(_selected.length === this.tableData.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }

      this.$forceUpdate()
    },
    /* 勾选项同步 */
    toggleSelection(rows) {
      this.tableData.forEach((v, i, _this) => {
        v.hasChecked = false
      })
      if(rows && rows.length > 0) {
        rows.forEach(row => {
          this.tableData.forEach((v, i, _this) => {
            if(v.id === row.id) {
              v.hasChecked = true
            }
          })
        })
        if(rows.length === this.tableData.length) {
          this.checkAll = true
        } else {
          this.checkAll = false
        }
      }
      this.$forceUpdate()
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
.file-wrapper {
  padding: 5px 0 0 15px;
  overflow-x: hidden;
}
.file-item {
  width: 180px;
  height: 210px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #ccc;
}
.file-item-card {
  position: relative;
  height: 100%;
}
.file-item-card.active {
  border-color: #3a8ee6;
  background-color: rgba(236, 245, 255, 0.3);
}
.file-item-card /deep/ .el-card__body {
  padding: 10px;
}
.file-item-card .checkbox {
  display: none;
  position: absolute;
  top: 8px;
  left: 8px;
  transform: scale(1.15);
}
.checkbox /deep/ .el-checkbox__inner, .checkbox /deep/ .el-checkbox__inner {
  border-color: #409EFF;
}

.file-item-card:hover .checkbox {
  display: block;
}
.file-item-card .checkbox.is-checked {
  display: block;
}

.file-item-card .item{
  display: inline-block;
  width: 100%;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #666;
  font-size: 13px;
}
.file-item-card .item.name {
  color: #333;
  font-size: 14px;
  cursor: pointer;
}
.file-item-card .item.name:hover {
  color: #000;
  text-decoration: underline;
}
.file-item.card .address {
  float: right;
}
.file-img {
  display: block;
  height: 110px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center; 
  background-size: auto 80%;
}
.file-img.folder {
  background-image: url('~@/assets/images/test/icon_folder_24_35.png');
}
.file-img.vedio {
  background-image: url('~@/assets/images/test/icon_video_24_94.png');
}
.file-img.word {
  background-image: url('~@/assets/images/test/icon_text.png');
}
.file-img.word.pdf {
  background-position: center;
  background-size: auto 100%;
  background-image: url('~@/assets/images/test/icon_pdf_24_92.png');
}
.file-img.word.ppt {
  background-position: center;
  background-size: auto 100%;
  background-image: url('~@/assets/images/test/icon_pdf_24_92.png');
}
.file-img.img {
  text-align: center;
}
.file-img.news {
  background-position: center;
  background-size: auto 100%;
  background-image: url('~@/assets/images/test/icon_misc.png');
}
.top-bar {
  border-bottom: 1px solid #eee;
  padding: 5px 0 4px 16px;
}
.top-bar .all-checkbox {
  margin-right: 4px;
}
.top-bar .all-tips {
  color: #555;
  font-size: 14px;
}

/*新建文件夹*/
.edit-input /deep/ .el-input__inner{
  padding: 0 8px;
}
.btns {
  width: 22px;
  height: 25px;
  border-color: #409EFF;
  color: #409EFF;
  padding: 0 !important;
}
.btns.cancel {
  margin-left: 0px;
}

/*大图显示弹窗*/
/*删除时的弹窗*/
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
</style>
