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
          <el-card shadow="hover" v-if="fileItem.nameEdit" class="file-item-card">
            <div class="file-img folder"alt=""></div>
            <el-input class="edit-input" v-model.trim="fileItem.fileName" size="mini" style="width: 90px;" maxlength="50"></el-input>
            <el-button plain class="btns ok" icon="el-icon-check" @click="submitAddFolder"></el-button>
            <el-button plain class="btns cancel" icon="el-icon-close" @click="cancelAddFolder"></el-button>
          </el-card>
          <el-card shadow="hover" v-else class="file-item-card" :class="{ active: false}">

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
        <el-button type="primary" @click="editOne(detailForm)" v-if="this.$parent.$options.moduleType !== 3">编 辑</el-button>
        <el-button @click="downloadOne(detailForm.id)">下 载</el-button>
        <el-button @click="delOne(detailForm)" v-if="this.$parent.$options.moduleType !== 3">删 除</el-button>
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
          <el-form-item label="共享对象：" >
            <div class="share-org">
              <div class="left topnav_box">
                <el-tree :data="shareOrgArr" :props="defaultProps"
                  ref="tree"
                  show-checkbox
                  empty-text="暂无数据"
                  node-key="id"
                  :default-expanded-keys="[1]"
                  :default-checked-keys="editFormData.selectedValueIds"
                  @check="handlerTreeCheck">
                </el-tree>
              </div>
              <div class="right topnav_box">
                <div>
                  <template v-for="(item, index) of editFormData.selectedValue">
                    <span class="select-tag">
                      {{item.org_name}}
                      <i class="el-icon-close" @click="handleCloseTag(item)"></i>
                    </span>
                  </template>
                </div>
              </div>
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

  </div>
</template>

<script>
// import { addFolder, downloadMaterial, updateFolderName } from '@/api/xc/material-management'
// import { mixin } from './_mixin'
export default {
  // mixins: [mixin],
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
    editOne(row) {
      /* 重置树 */
      this.shareOrgArr = []
      this.getOrgList()
      if(row.materialType === 0) {
        // 修改文件夹名称
        this.editFolder.id = row.id
        this.editFolder.name = row.name
        this.showEditFolderDialog = true
        this.showDetailDialog = false
        return
      }
      this.editFormData.id = row.id
      this.editFormData.name = row.name
      this.editFormData.checkList = row.themeIds || []
      this.editFormData.selectedValueIds = row.shareOrgIds || []
      this.editFormData.selectedValue = []
      if(row.shareOrgIds.length > 0) {
        let shareOrgNamesArr = row.shareOrg.split('、')
        row.shareOrgIds.forEach((id, index) => {
          this.editFormData.selectedValue.push({
            id,
            org_name: shareOrgNamesArr[index]
          })
        })
      }

      this.showEditDialog = true
      this.showDetailDialog = false
    },
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
      let params = {
        type: this.$parent.$options.moduleType,
        ids: this.imgDialogId
      }

      const folderLoading = this.$loading({
        lock: true,
        text: '下载中，请稍后',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.3)'
      })

      downloadMaterial(params).then(res => {
        folderLoading.close()

        let explorer = navigator.userAgent

        if(res.headers.errorcode && res.headers.errorcode === '-1') {
          let errorMsg = res.headers.errormessage
          if (explorer.indexOf('MSIE') >= 0 || explorer.indexOf('Chrome') >= 0) {  // IE和google浏览器
            errorMsg = decodeURI(escape(errorMsg))
          } else {
            errorMsg = decodeURI(escape(errorMsg))
          }

          this.$message.closeAll()
          this.$message.error(errorMsg)
          return
        }

        let fileName = res.headers.filename
        if (explorer.indexOf('MSIE') >= 0 || explorer.indexOf('Chrome') >= 0) {  // IE和google浏览器
          fileName = decodeURI(escape(fileName))
        } else {
          fileName = decodeURI(escape(fileName))
        }

        let respData = res.data
        if(!respData) {
          return
        }
        let url = window.URL.createObjectURL(new Blob([respData]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
      }).catch(err => {
        folderLoading.close()
        this.$message.closeAll()
        this.$message.error(err.message)
      })
    },
    showImg(row) {
      let _ext = row.imgUrl.substr(row.imgUrl.lastIndexOf('.') + 1)
      _ext = _ext.toLowerCase()
      if(_ext == 'tif' || _ext == 'tiff' || _ext == 'wbmp') {
        this.imgDialogSrc = row.thumbnailUrl
      } else {
        this.imgDialogSrc = row.imgUrl
      }
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
  background-image: url('/static/img/xc/img_folder.png');
}
.file-img.vedio {
  background-position: -84px 0;
  background-size: auto 90%;
  background-image: url('/static/img/xc/img_icons.png');
  transform: scale(0.92);
}
.file-img.word {
  background-image: url('/static/img/xc/img_word.png');
}
.file-img.word.pdf {
  background-position: 35px 0;
  background-size: auto 90%;
  background-image: url('/static/img/xc/img_icons.png');
  transform: scale(0.92);
}
.file-img.word.ppt {
  background-position: -205px 0;
  background-size: auto 90%;
  background-image: url('/static/img/xc/img_icons.png');
  transform: scale(0.92);
}
.file-img.img {
  text-align: center;
  /*background-image: url('/static/img/xc/img_word.png');*/
}
.file-img.news {
  background-position: -445px 0;
  background-size: auto 90%;
  background-image: url('/static/img/xc/img_icons.png');
  transform: scale(0.92);
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
</style>