<template>
  <el-container class="login-container">
    <el-card>
      <div slot="header">
        <h2 class="login-title">系统登录</h2>
      </div>
      <el-form :rules="rules" :model="loginForm" ref="loginForm" label-width="60px">
        <el-form-item label="账号" prop="username" style="position:relative">
          <el-input type="text" v-model="loginForm.username" @keyup.enter.native="goToPwdInput"></el-input>
          <span class="svg-container svg-container_user">
            <icon-svg icon-class="user" />
          </span>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" @keyup.enter.native="onLogin" ref="pwd"></el-input>
          <span class="svg-container svg-container_password">
            <icon-svg icon-class="password" />
          </span>
        </el-form-item>
        <el-form-item label="记住密码" label-width="80px">
          <el-switch v-model="remember"></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">登录</el-button>
      </el-form>
    </el-card>
  </el-container>
</template>
<script>
  import { isValidUsername } from '@/utils/validate'
  import { saveToLocal, loadFromLocal } from '@/common/local-storage'
  import { mapActions } from 'vuex'
  export default {
    data() {
      // username 验证
      const validateUsername = (rule, value, callback) => {
        if (!isValidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      // pwd 验证
      const validatePwd = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          pwd: '123456'
        },
        remember: true,
        loading: false,
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validateUsername }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validatePwd }
          ]
        }
      }
    },
    created() {
      // 初始化时读取localStorage用户信息
      if (loadFromLocal('remember', false)) {
        this.loginForm.username = loadFromLocal('username', '')
        this.loginForm.pwd = loadFromLocal('password', '')
      } else {
        this.loginForm.username = ''
        this.loginForm.pwd = ''
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      // 用户名输入框回车后切换到密码输入框
      goToPwdInput() {
        this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
      },
      // 登录操作
      onLogin() {
        this.$refs.pwd.$el.getElementsByTagName('input')[0].blur()
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.login(this.loginForm).then(() => {
              // 保存账号
              if (this.remember) {
                saveToLocal('username', this.loginForm.username)
                saveToLocal('password', this.loginForm.pwd)
                saveToLocal('remember', true)
              } else {
                saveToLocal('username', '')
                saveToLocal('password', '')
                saveToLocal('remember', false)
              }
              this.$router.push({ path: '/' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  $dark_gray:#889aa4;
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: mix(#494166, #424b50);
    .el-card {
      margin: 120px auto 0;
      width: 400px;
      height: 350px;
      background: #d7ecf1;
      .login-title {
        margin: 0;
        text-align: center;
      }
      .el-input /deep/ .el-input__inner {
        text-indent: 12px;
      }
      .svg-container {
        position: absolute;
        top: 0;
        left: 5px;
        color: $dark_gray;
        &_user {
          font-size: 20px;
        }
        &_password {
          left: 7px;
          font-size: 16px;
        }
      }
      .el-button--primary {
        width: 100%;
      }
    }
  }
</style>