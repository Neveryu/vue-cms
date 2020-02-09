<template>
  <div class="components-container">
    <div class="container">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- 基本信息 -->
        <el-tab-pane label="基本信息" name="first">
          <h3 class="title">基本信息</h3>
          <!-- 基本信息-表单内容 -->
          <el-form class="basic-form" ref="basicForm" :model="basicForm" :rules="rules" label-width="100px">
            <el-form-item label="客户名称" prop="name">
              <el-input v-model="basicForm.name"></el-input>
            </el-form-item>
            <el-form-item label="客户类型" prop="type">
              <el-select v-model="basicForm.type" placeholder="请选择">
                <el-option label="正式" value="1"></el-option>
                <el-option label="试用" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="sys-mark-wrapper" label="系统标识" prop="sysMark">
              <el-input class="input-one" v-model="basicForm.sysMark"></el-input>
              <el-select class="input-two" v-model="basicForm.sysMarkType" placeholder="请选择" @change="handleSysMarkType">
                <el-option label="标准" value="1" checked>标准</el-option>
                <el-option label="个性" value="2">个性</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="账号标识" prop="accountMark">
              <el-input v-model="basicForm.accountMark"></el-input>
            </el-form-item>
            <el-form-item label="所在地域" required>
              <el-col :span="11">
                <el-form-item prop="region1">
                  <el-select v-model="basicForm.region1" placeholder="请选择" @change="chooseProvince">
                    <el-option v-for="item of basicForm.region1List" :label="item.label" :key="item.index" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="1">&nbsp;-</el-col>
              <el-col :span="11">
                <el-form-item prop="region2">
                  <el-select v-model="basicForm.region2" placeholder="请选择" @change="chooseCity">
                    <el-option v-for="item of basicForm.region2List" :label="item.label" :key="item.index" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-form-item>
            <h3 class="title">联系人信息</h3>
            <el-form-item label="联系人" prop="concat">
              <el-input v-model="basicForm.concat" placeholder="可多个，用“，”隔开"></el-input>
            </el-form-item>
            <el-form-item label="部门/身份" prop="depart">
              <el-input v-model="basicForm.depart" placeholder="可多个，用“，”隔开"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="tel">
              <el-input v-model="basicForm.tel" placeholder="可多个，用“，”隔开"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" prop="email">
              <el-input v-model="basicForm.email" placeholder="可多个，用“，”隔开"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="remarks">
              <el-input type="textarea" v-model="basicForm.remarks"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitbasicForm('basicForm')">保存</el-button>
              <el-button @click="cancel">取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 部门管理 -->
        <el-tab-pane label="部门管理" name="second">
          <!-- 左侧树形 -->
          <el-col :span="6">
            <el-tree :data="departData" :props="defaultProps"></el-tree>
          </el-col>
          <el-col :span="1">
          </el-col>
          <!-- 右侧内容 -->
          <el-col :span="16">
            <div>
              <el-select v-model="departType" placeholder="部门类型选择">
                <el-option
                  v-for="item in departOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model="content" width="auto" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { provinceAndCityData } from 'element-china-area-data'
export default {
  data() {
    return {
      activeName: 'first',
      basicForm: {
        name: '',
        type: '',
        sysMark: 'xxx.tencent.com',
        sysMarkType: '1',
        accountMark: '',
        region1: '',
        region1List: [],
        region2: '',
        region2List: [],
        concat: '',
        depart: '',
        tel: '',
        email: '',
        remarks: ''
      },
      departData: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      departType: '',
      departOptions: [{
        label: '我们',
        value: 1
      }],
      content: '',
      // 基本信息验证规则
      rules: {
        name: [
          { required: true, message: '请输入客户名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择客户类型', trigger: 'change' }
        ],
        sysMark: [
          { required: true, message: '请输入系统标识', trigger: 'blur' }
        ],
        accountMark: [
          { required: true, message: '请输入账号标识', trigger: 'blur' }
        ],
        region1: [
          { required: true, message: '请选择地区', trigger: 'blur' }
        ],
        region2: [
          { required: true, message: '请选择城市', trigger: 'blur' }
        ],
        concat: [
          { max: 20, message: '20 字以内，非必填', trigger: 'blur' }
        ],
        depart: [
          { max: 20, message: '20 字以内，非必填', trigger: 'blur' }
        ],
        remarks: [
          { max: 200, message: '200 字以内，非必填', trigger: 'blur' }
        ]
      }
    }
  },
  // computed: {
  //   sysMark() {
  //     return this.basicForm.sysMark
  //   }
  // },
  watch: {
    'basicForm.sysMark': function(newVal, oldVal) {
      if(this.basicForm.sysMarkType === '2') {
        this.basicForm.accountMark = newVal
      }
    }
  },
  methods: {
    // 系统标识切换
    handleSysMarkType(val) {
      // 系统标识-标准
      if(val === '1') {
        this.basicForm.sysMark = '.tencent.com'
      } else if(val === '2') {  // 系统标识-个性
        this.basicForm.sysMark = ''
      }
    },
    // 省-选择
    chooseProvince(val) {
      this.basicForm.region1 = val
      this.basicForm.region2 = ''
      let _provinceList = this.basicForm.region1List
      for(var provinceItem of _provinceList) {
        if(val === provinceItem.value) {
          this.basicForm.region2List = provinceItem.children
          break
        }
      }
    },
    // 城市-选择
    chooseCity(val) {
      this.basicForm.region2 = val
    },
    // 基本信息提交
    submitbasicForm(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          let params = {
            province: this.basicForm.region1,
            city: this.basicForm.region2,
            customer_name: this.basicForm.name,
            customer_type: this.basicForm.type,
            sys_sign: this.basicForm.sysMark,
            sign_type: this.basicForm.sysMarkType,
            account_sign: this.basicForm.accountMark,
            contact: this.basicForm.concat,
            dept: this.basicForm.depart,
            phone: this.basicForm.tel,
            email: this.basicForm.email,
            remark: this.basicForm.remarks
          }
          console.log(params)
          // addOrg(_data).then( res => {
          //   console.log(res)
          // })
        } else {
          return false
        }
      })
    },
    // 取消提交
    cancel() {
      this.$refs['basicForm'].resetFields()
    },
    // tab切换点击事件
    handleClick(tab, e) {
      if(tab.name === 'second') {
        // nothing
      }
    }
  },
  created() {
    this.basicForm.region1List = provinceAndCityData
  }

}
</script>
<style scoped lang="stylus">
.basic-form
  width 500px
.sys-mark-wrapper
  .input-two
    position absolute
    top 0
    right -110px
    width 100px
</style>
