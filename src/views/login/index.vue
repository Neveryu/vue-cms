<template>
  <el-container class="login-container">
    <el-switch
      class="bg-switch"
      v-model="toggleParticles"
      active-text="粒子背景"
      active-color="#13ce66"
      inactive-text="关闭"
      inactive-color="#ff4949"></el-switch>
    <el-button class="show-account-info animate__animated animate__flash animate__infinite" type="text" @click="accountTip">提示帐号信息</el-button>

    <el-card class="animated flipInY">
      <div slot="header" class="el-card-header">
        <lang-select class="lang-select"></lang-select>
        <div style="clear: both"></div>
        <img :src="require('@/assets/image/login-logo.png')" alt="" />
        <h2 class="login-title">{{ $t('login.title') }}</h2>
      </div>
      <el-form :rules="rules" :model="loginForm" ref="loginForm" label-width="80px">
        <el-form-item :label="$t('login.account')" prop="username" style="position: relative">
          <el-input type="text" v-model.trim="loginForm.username" @keyup.enter.native="goToPwdInput" maxlength="20" clearable autocomplete="off">
            <template #prefix>
              <span class="svg-container svg-container_user">
                <svg-icon icon-class="user" />
              </span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="pwd">
          <el-input ref="pwd" type="password" v-model.trim="loginForm.pwd" @keyup.enter.native="onLogin" maxlength="20">
            <template #prefix>
              <span class="svg-container svg-container_password">
                <svg-icon icon-class="password" />
              </span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.remember')" label-width="80px">
          <el-switch v-model="remember"></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">{{ $t('login.login') }}</el-button>
      </el-form>
    </el-card>

    <!-- particles.js container -->
    <div id="particles"></div>
  </el-container>
</template>

<script>
import { particlesConfig } from '@/config/particles'
import { validateUsername, validatePwd } from '@/common/validate-func'
import LangSelect from '@/components/lang-select'
import { saveToLocal, loadFromLocal } from '@/common/local-storage'
import { mapActions } from 'vuex'
/* eslint-disable*/
import particles from 'particles.js'
export default {
  name: 'LoginView', // 多单词命名
  components: {
    LangSelect,
  },
  data() {
    return {
      // 粒子开关
      toggleParticles: false,
      loginForm: {
        username: '',
        pwd: '',
      },
      remember: false,
      loading: false,
      rules: {
        username: [
          // { required: true, message: '请输入账号', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateUsername },
          { required: true, trigger: 'change', validator: validateUsername },
        ],
        pwd: [
          // { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validatePwd },
          { required: true, trigger: 'change', validator: validatePwd },
        ],
      },
    }
  },
  watch: {
    toggleParticles(val) {
      if (val) {
        particlesJS('particles', particlesConfig)
      } else {
        document.getElementById('particles').innerHTML = ''
      }
    },
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
  mounted() {
    this.accountTip()
  },
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
    // 用户名输入框回车后切换到密码输入框
    goToPwdInput() {
      this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
    },
    // 登录操作
    onLogin() {
      this.$refs.pwd.$el.getElementsByTagName('input')[0].blur()
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.login(this.loginForm)
            .then(() => {
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
              this.$router
                .push({ path: '/' })
                .then(() => {
                  console.log('[登陆页面]登录成功，跳转... ')
                })
                .catch(() => {})
            })
            .catch((error) => {
              // 接口错误信息会在封装的request.js中提示，所以这里就打印一下错误信息，便于调试。
              console.log('[登陆页面]登录时的错误信息：', error)
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    accountTip() {
      this.$notify({
        title: '账号：admin',
        dangerouslyUseHTMLString: true,
        message: '<strong>密码：<i>123456</i></strong>',
        type: 'success',
        position: 'bottom-left',
      })
      this.$notify({
        title: '账号：lucy',
        dangerouslyUseHTMLString: true,
        message: '<strong>密码：<i>123456</i></strong>',
        type: 'success',
        position: 'bottom-left',
        offset: 80,
      })
    },
  },
}
</script>

<style scoped lang="scss">
@use 'sass:color';
.login-container {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: color.mix(#044289, #494166) url('~@/assets/image/login-bg.svg') center no-repeat;
  background-size: cover;
  overflow: hidden;
  .bg-switch {
    width: 180px;
    margin: 10px;
    ::v-deep .el-switch__label {
      color: #fff;
      &.is-active {
        color: #409eff;
      }
    }
  }
  .show-account-info {
    position: absolute;
    left: 15px;
    bottom: 20px;
    color: var(--teal);
    font-weight: 500;
  }
  .el-card {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -250px;
    width: 500px;
    height: 450px;
    background: #fff;
    .el-card-header {
      text-align: center;
      .lang-select {
        float: right;
      }
    }

    .login-title {
      margin: 0;
      text-align: center;
    }

    ::v-deep .el-input__inner {
      text-indent: 10px;
    }

    .svg-container {
      position: absolute;
      top: 0;
      left: 4px;
      color: var(--gray);
      &_user {
        font-size: 20px;
      }
      &_password {
        font-size: 16px;
      }
    }

    .el-button--primary {
      width: 100%;
    }
  }
}

#particles {
  width: 100%;
  height: 100%;
  /*background-color #b61924*/
  /*background-color #23ae88*/
  background-color: transparent;
  // background-image url('/static/image/login-bg.jpg')
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
</style>
