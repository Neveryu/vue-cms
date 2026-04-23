<template>
  <div class="content-layout">
    <el-row class="content-wrapper" :gutter="40">
      <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
          <h3>{{ $t('profile.title') }}</h3>
          <el-divider content-position="left">{{ $t('profile.personalInfo') }}</el-divider>
          <el-form-item :label="$t('profile.account')" prop="account">
            <el-input v-model="form.account" disabled></el-input>
          </el-form-item>
          <el-form-item :label="$t('profile.username')" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item :label="$t('profile.gender')" prop="sex">
            <el-radio-group v-model="form.sex">
              <el-radio :label="1">{{ $t('profile.male') }}</el-radio>
              <el-radio :label="2">{{ $t('profile.female') }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('profile.age')" prop="age">
            <el-input-number v-model="form.age" :min="1" :max="100"></el-input-number>
          </el-form-item>

          <el-divider content-position="left">{{ $t('profile.detailInfo') }}</el-divider>
          <el-form-item :label="$t('profile.techStack')" prop="type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox v-for="(item, index) of skills" :key="'skill' + index" :label="item"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item :label="$t('profile.remark')" prop="desc">
            <el-input type="textarea" v-model="form.desc" maxlength="100" show-word-limit></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.stop="save">{{ $t('profile.save') }}</el-button>
            <el-button @click.stop="reset">{{ $t('profile.reset') }}</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col class="hidden-sm-and-down" :md="8" :lg="8" :xl="8" style="margin-top: 34px">
        <el-divider content-position="left">{{ $t('profile.avatar') }}</el-divider>
        <img :src="avatar" class="image" />
        <br />
        <el-link :underline="false" type="primary" @click="toggleShow">{{ $t('profile.modify') }}</el-link>
      </el-col>
    </el-row>
    <my-upload
      ref="myUpload"
      field="img"
      v-model="show"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"></my-upload>
  </div>
</template>
<script>
import { skills } from '@/common/dicts'
import { mapGetters, mapActions } from 'vuex'
import myUpload from 'vue-image-crop-upload/upload-2.vue'
export default {
  components: {
    myUpload,
  },
  data() {
    return {
      show: false,
      currentDate: '',
      // 保存初始数据，用于重置
      initialForm: null,
      form: {
        account: '',
        name: '',
        sex: null,
        age: 1,
        type: [],
        desc: '',
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' },
        ],
        sex: [{ required: true, message: '请选择性别', trigger: ['blur', 'change'] }],
        age: [
          { required: true, message: '请选择年龄', trigger: 'change' },
          { type: 'number', message: '年龄必须为数字值', trigger: ['blur', 'change'] },
        ],
        type: [{ required: true, message: '最少选择一种技术类型', trigger: ['blur', 'change'] }],
        desc: [],
      },
    }
  },
  computed: {
    ...mapGetters(['avatar', 'allInfo']),
  },
  created() {
    this.skills = skills
    // 初始化表单数据
    this.initForm()
  },
  methods: {
    ...mapActions({
      doUpdateAvatar: 'user/doUpdateAvatar',
      doUpdateUser: 'user/doUpdateUser',
    }),
    toggleShow() {
      this.show = !this.show
    },
    // 保存
    save() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
          })
          // 调用保存api
          this.doUpdateUser(this.form)
            .then(() => {
              this.$message.success(this.$t('profile.modifySuccess'))
            })
            .finally(() => {
              loading.close()
            })
        } else {
          return false
        }
      })
    },
    // 初始化表单
    initForm() {
      const userData = this.allInfo
      this.form = {
        account: userData.account || '',
        name: userData.name || '',
        sex: userData.sex || 1,
        age: userData.age || 1,
        type: userData.type || [],
        desc: userData.desc || '',
      }
      // 保存初始数据用于重置
      this.initialForm = JSON.parse(JSON.stringify(this.form))
    },
    // 重置
    reset() {
      if (this.initialForm) {
        this.form = JSON.parse(JSON.stringify(this.initialForm))
      } else {
        this.initForm()
      }
      // 清除表单验证状态
      this.$nextTick(() => {
        if (this.$refs.form) {
          this.$refs.form.clearValidate()
        }
      })
    },
    cropSuccess(imgDataUrl) {
      const loading = this.$loading({
        lock: true,
      })
      this.doUpdateAvatar(imgDataUrl).finally(() => {
        loading.close()
      })
    },
    cropUploadSuccess() {
      this.$message.success(this.$t('profile.uploadSuccess'))
    },
    cropUploadFail() {
      this.$message.error(this.$t('profile.uploadFailed'))
    },
  },
}
</script>

<style scoped lang="scss">
.content-layout {
  padding: 15px !important;
  .content-wrapper {
    background-color: var(--next-bg-color);
    border: 1px solid var(--next-border-color-light);
    margin: 0 !important;
  }
}
</style>
