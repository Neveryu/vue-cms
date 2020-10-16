<template>
  <div class="profile-wrapper">
    <el-row :gutter="40">
      <el-col :span="14">
        <el-form ref="form" :model="form" label-width="100px">
          <h3>个人中心</h3>
          <el-divider content-position="left">个人资料</el-divider>
          <el-form-item label="账号">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-divider content-position="left">详细介绍</el-divider>
          <el-form-item label="地区">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="技术选择">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Vue" name="type"></el-checkbox>
              <el-checkbox label="Node" name="type"></el-checkbox>
              <el-checkbox label="Spring" name="type"></el-checkbox>
              <el-checkbox label="React" name="type"></el-checkbox>
              <el-checkbox label="Flutter" name="type"></el-checkbox>
              <el-checkbox label="小程序" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="备注/说明">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" style="margin-top: 34px">
        <el-divider content-position="left">头像</el-divider>
        <img :src="form.avatar" class="image">
        <br>
        <el-link :underline="false" @click="show = true">Update</el-link>
      </el-col>
    </el-row>
    <my-upload v-model="show" @crop-success="cropSuccess"></my-upload>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import myUpload from 'vue-image-crop-upload'
export default {
  components: {
    myUpload
  },
  data() {
    return {
      show: false,
      currentDate: '',
      form: {
        account: '',
        name: '',
        avatar: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  },
  methods: {
    closeDialog() {
      this.show = false
    },
    cropSuccess(imgDataUrl, field) {
      console.log(field)
      this.form.avatar = imgDataUrl
    }
  },
  created() {
    this.form.name = this.name
    this.form.avatar = this.avatar
  }
}
</script>

<style scoped lang="stylus">
.profile-wrapper
  padding: 10px 20px
</style>
