<template>
  <el-container class="login-container">
    <el-card>
      <div slot="header">
        <h2 class="login-title">系统登录</h2>
      </div>
      <el-form ref="form" label-width="60px">
        <el-form-item label="账号">
          <el-input prefix-icon="el-icon-date" type="text" v-model="loginForm.name" @keyup.enter.native="goToPwdInput"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input prefix-icon="el-icon-date" type="password" v-model="loginForm.pwd" ref="pwd"></el-input>
        </el-form-item>
        <el-form-item label="记住密码" label-width="80px">
          <el-switch v-model="loginForm.remember"></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form>
    </el-card>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        loginForm: {
          name: 'admin',
          pwd: '123456',
          remember: true
        }
      }
    },
    methods: {
      // 用户名输入框回车后切换到密码输入框
      goToPwdInput() {
        this.$refs.pwd.$el.focus()
      },
      onSubmit() {
        console.log('submit!')
      }
    }
  }
</script>
<style scoped lang="scss">
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: mix(#494166, #424b50);
    // text-align: center;
    .el-card {
      // position: relative;
      margin: 120px auto 0;
      width: 400px;
      height: 350px;
      background: #d7ecf1;
      .login-title {
        margin: 0;
        text-align: center;
      }
      .el-button--primary {
        width: 100%;
      }
    }
  }
</style>