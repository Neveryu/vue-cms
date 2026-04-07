<template>
  <div class="login-page" :class="{ 'is-dark': isDark }">
    <!-- Left Brand Area -->
    <div class="login-brand">
      <!-- Background orbs -->
      <div class="brand-bg-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <!-- Grid overlay -->
      <div class="brand-grid-overlay"></div>

      <!-- Animated decorations -->
      <div class="brand-decorations">
        <!-- Rotating ring -->
        <div class="deco-ring deco-ring-1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(30,96,145,0.35)" stroke-width="1" stroke-dasharray="12 8" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(41,128,185,0.25)" stroke-width="1" stroke-dasharray="8 12" />
          </svg>
        </div>
        <div class="deco-ring deco-ring-2">
          <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(8,145,178,0.3)" stroke-width="1" stroke-dasharray="6 10" />
          </svg>
        </div>

        <!-- Floating mini cards -->
        <div class="deco-card deco-card-1">
          <div class="deco-card-inner">
            <i class="el-icon-data-analysis"></i>
            <div class="deco-card-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="deco-card deco-card-2">
          <div class="deco-card-inner">
            <i class="el-icon-s-marketing"></i>
            <div class="deco-card-line"></div>
          </div>
        </div>
        <div class="deco-card deco-card-3">
          <div class="deco-card-inner">
            <i class="el-icon-s-data"></i>
            <div class="deco-card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <!-- Pulsing dots -->
        <div class="deco-dot deco-dot-1"></div>
        <div class="deco-dot deco-dot-2"></div>
        <div class="deco-dot deco-dot-3"></div>
        <div class="deco-dot deco-dot-4"></div>
        <div class="deco-dot deco-dot-5"></div>

        <!-- Connecting lines -->
        <svg class="deco-lines" viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,150 Q250,100 350,200" fill="none" stroke="rgba(30,96,145,0.18)" stroke-width="1" stroke-dasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M400,100 Q300,300 150,400" fill="none" stroke="rgba(8,145,178,0.15)" stroke-width="1" stroke-dasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M50,350 Q200,280 380,380" fill="none" stroke="rgba(41,128,185,0.15)" stroke-width="1" stroke-dasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="6s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <!-- Brand content -->
      <div class="brand-content">
        <div class="brand-logo-wrap">
          <img :src="require('@/assets/image/login-logo.png')" alt="logo" class="brand-logo" />
          <div class="brand-logo-glow"></div>
        </div>
        <h1 class="brand-title">{{ $t('login.title') }}</h1>
        <p class="brand-slogan">{{ $t('login.brandSlogan') }}</p>
        <div class="brand-features">
          <div class="brand-feature-item">
            <i class="el-icon-monitor"></i>
            <span>Dashboard</span>
          </div>
          <div class="brand-feature-dot"></div>
          <div class="brand-feature-item">
            <i class="el-icon-s-data"></i>
            <span>Analytics</span>
          </div>
          <div class="brand-feature-dot"></div>
          <div class="brand-feature-item">
            <i class="el-icon-lock"></i>
            <span>Security</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Form Area -->
    <div class="login-form-side">
      <div class="form-top-bar">
        <el-button class="account-tip-btn" type="text" @click="accountTip" icon="el-icon-info">
          {{ $t('login.accountTip') }}
        </el-button>
        <div class="form-top-bar-right">
          <lang-select class="top-bar-item"></lang-select>
          <div class="top-bar-item theme-toggle" @click="toggleDarkMode">
            <i :class="isDark ? 'el-icon-sunny' : 'el-icon-moon'"></i>
          </div>
        </div>
      </div>

      <div class="form-wrapper">
        <h2 class="form-title">{{ $t('login.welcome') }}</h2>
        <p class="form-subtitle">{{ $t('login.subtitle') }}</p>

        <el-form :rules="rules" :model="loginForm" ref="loginForm" class="login-form">
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.username"
              :placeholder="$t('login.account')"
              @keyup.enter.native="goToPwdInput"
              maxlength="20"
              clearable
              autocomplete="off"
              prefix-icon="el-icon-user"></el-input>
          </el-form-item>

          <el-form-item prop="pwd">
            <el-input
              ref="pwd"
              v-model.trim="loginForm.pwd"
              type="password"
              :placeholder="$t('login.password')"
              @keyup.enter.native="onLogin"
              maxlength="20"
              show-password
              prefix-icon="el-icon-lock"></el-input>
          </el-form-item>

          <el-form-item prop="captchaInput">
            <div class="captcha-row">
              <el-input
                v-model.trim="loginForm.captchaInput"
                :placeholder="$t('login.captchaPlaceholder')"
                @keyup.enter.native="onLogin"
                maxlength="4"
                prefix-icon="el-icon-picture-outline"></el-input>
              <captcha-canvas ref="captcha" :width="120" :height="40" @change="onCaptchaChange"></captcha-canvas>
            </div>
          </el-form-item>

          <div class="form-options">
            <el-checkbox v-model="remember">{{ $t('login.remember') }}</el-checkbox>
          </div>

          <el-button type="primary" class="login-btn" @click="onLogin" :loading="loading">
            {{ $t('login.login') }}
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validateUsername, validatePwd } from '@/common/validate-func'
import LangSelect from '@/components/lang-select'
import CaptchaCanvas from '@/components/captcha'
import { saveToLocal, loadFromLocal } from '@/common/local-storage'
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  components: {
    LangSelect,
    CaptchaCanvas,
  },
  data() {
    const validateCaptcha = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('login.captchaPlaceholder')))
      } else if (value.toLowerCase() !== this.captchaCode.toLowerCase()) {
        callback(new Error(this.$t('login.captchaError')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        pwd: '',
        captchaInput: '',
      },
      captchaCode: '',
      remember: false,
      loading: false,
      rules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername },
          { required: true, trigger: 'change', validator: validateUsername },
        ],
        pwd: [
          { required: true, trigger: 'blur', validator: validatePwd },
          { required: true, trigger: 'change', validator: validatePwd },
        ],
        captchaInput: [{ required: true, trigger: 'blur', validator: validateCaptcha }],
      },
    }
  },
  computed: {
    isDark() {
      return this.$store.state.setting.isDark
    },
  },
  created() {
    if (loadFromLocal('remember', false)) {
      this.loginForm.username = loadFromLocal('username', '')
      this.loginForm.pwd = loadFromLocal('password', '')
      this.remember = true
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
      setDark: 'setting/setDark',
    }),
    goToPwdInput() {
      this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
    },
    onCaptchaChange(code) {
      this.captchaCode = code
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
    toggleDarkMode() {
      const newVal = !this.isDark
      this.setDark(newVal)
      if (newVal) {
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
      // Refresh captcha to match new theme colors
      this.$nextTick(() => {
        if (this.$refs.captcha) {
          this.$refs.captcha.refreshCaptcha()
        }
      })
    },
    onLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.login(this.loginForm)
            .then(() => {
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
              console.log('[登陆页面]登录时的错误信息：', error)
              // Refresh captcha on login failure
              if (this.$refs.captcha) {
                this.$refs.captcha.refreshCaptcha()
              }
              this.loginForm.captchaInput = ''
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.login-page {
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* ===================== Left Brand Area ===================== */
.login-brand {
  flex: 5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #041e42, #0a3d62, #1a5276);
  overflow: hidden;
}

/* -- Background orbs -- */
.brand-bg-orbs {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #1e6091, transparent 70%);
  top: -100px;
  left: -100px;
  animation: floatOrb1 8s ease-in-out infinite alternate;
}

.orb-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #2980b9, transparent 70%);
  bottom: -80px;
  right: -80px;
  animation: floatOrb2 10s ease-in-out infinite alternate;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #0891b2, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: floatOrb3 12s ease-in-out infinite alternate;
}

@keyframes floatOrb1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(80px, 60px);
  }
}

@keyframes floatOrb2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-60px, -80px);
  }
}

@keyframes floatOrb3 {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-30%, -40%) scale(1.2);
  }
}

/* -- Grid overlay -- */
.brand-grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* -- Decorations container -- */
.brand-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* -- Rotating rings -- */
.deco-ring {
  position: absolute;

  svg {
    width: 100%;
    height: 100%;
  }
}

.deco-ring-1 {
  width: 280px;
  height: 280px;
  top: 8%;
  right: 5%;
  animation: spinSlow 30s linear infinite;
  opacity: 0.7;
}

.deco-ring-2 {
  width: 180px;
  height: 180px;
  bottom: 12%;
  left: 8%;
  animation: spinSlow 25s linear infinite reverse;
  opacity: 0.6;
}

@keyframes spinSlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* -- Floating mini cards -- */
.deco-card {
  position: absolute;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.deco-card-inner {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);

  i {
    font-size: 20px;
  }
}

.deco-card-1 {
  top: 15%;
  left: 10%;
  animation: floatCard1 6s ease-in-out infinite alternate;

  .deco-card-inner {
    width: 100px;
  }
}

.deco-card-2 {
  bottom: 20%;
  right: 8%;
  animation: floatCard2 7s ease-in-out infinite alternate;

  .deco-card-inner {
    width: 110px;
  }
}

.deco-card-3 {
  top: 55%;
  left: 5%;
  animation: floatCard3 8s ease-in-out infinite alternate;

  .deco-card-inner {
    width: 90px;
  }
}

/* -- Card internal elements -- */
.deco-card-bars {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  height: 24px;

  span {
    display: block;
    width: 8px;
    border-radius: 2px;
    background: linear-gradient(to top, #1e6091, #5dade2);

    &:nth-child(1) {
      height: 40%;
      animation: barPulse 2s ease-in-out infinite alternate;
    }
    &:nth-child(2) {
      height: 70%;
      animation: barPulse 2s 0.3s ease-in-out infinite alternate;
    }
    &:nth-child(3) {
      height: 50%;
      animation: barPulse 2s 0.6s ease-in-out infinite alternate;
    }
    &:nth-child(4) {
      height: 90%;
      animation: barPulse 2s 0.9s ease-in-out infinite alternate;
    }
  }
}

@keyframes barPulse {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.deco-card-line {
  width: 100%;
  height: 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(8, 145, 178, 0.3);
    border-radius: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 3px);
    left: 0;
    width: 8px;
    height: 8px;
    background: #0891b2;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(8, 145, 178, 0.6);
    animation: dotSlide 3s ease-in-out infinite;
  }
}

@keyframes dotSlide {
  0% {
    left: 0;
  }
  50% {
    left: calc(100% - 8px);
  }
  100% {
    left: 0;
  }
}

.deco-card-dots {
  display: flex;
  gap: 6px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2980b9;

    &:nth-child(1) {
      animation: dotFade 1.5s ease-in-out infinite;
    }
    &:nth-child(2) {
      animation: dotFade 1.5s 0.3s ease-in-out infinite;
    }
    &:nth-child(3) {
      animation: dotFade 1.5s 0.6s ease-in-out infinite;
    }
  }
}

@keyframes dotFade {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes floatCard1 {
  0% {
    transform: translateY(0) rotate(-2deg);
  }
  100% {
    transform: translateY(-18px) rotate(2deg);
  }
}

@keyframes floatCard2 {
  0% {
    transform: translateY(0) rotate(2deg);
  }
  100% {
    transform: translateY(-22px) rotate(-1deg);
  }
}

@keyframes floatCard3 {
  0% {
    transform: translateY(0) rotate(1deg);
  }
  100% {
    transform: translateY(-15px) rotate(-2deg);
  }
}

/* -- Pulsing dots -- */
.deco-dot {
  position: absolute;
  border-radius: 50%;
  animation: pulseDot 3s ease-in-out infinite;
}

.deco-dot-1 {
  width: 6px;
  height: 6px;
  background: #5dade2;
  top: 25%;
  right: 20%;
  animation-delay: 0s;
}

.deco-dot-2 {
  width: 4px;
  height: 4px;
  background: #0891b2;
  top: 40%;
  left: 25%;
  animation-delay: 0.8s;
}

.deco-dot-3 {
  width: 5px;
  height: 5px;
  background: #3498db;
  bottom: 30%;
  left: 35%;
  animation-delay: 1.6s;
}

.deco-dot-4 {
  width: 4px;
  height: 4px;
  background: #85c1e9;
  top: 65%;
  right: 15%;
  animation-delay: 0.4s;
}

.deco-dot-5 {
  width: 6px;
  height: 6px;
  background: #2471a3;
  bottom: 15%;
  right: 35%;
  animation-delay: 1.2s;
}

@keyframes pulseDot {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(2);
  }
}

/* -- Connecting lines SVG -- */
.deco-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* -- Brand content -- */
.brand-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
}

.brand-logo-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.brand-logo {
  width: 72px;
  height: 72px;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 0 20px rgba(30, 96, 145, 0.5));
  animation: logoBreath 4s ease-in-out infinite alternate;
}

.brand-logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(30, 96, 145, 0.3), transparent 70%);
  animation: glowPulse 4s ease-in-out infinite alternate;
}

@keyframes logoBreath {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.06);
  }
}

@keyframes glowPulse {
  0% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.brand-title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.brand-slogan {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 32px;
  letter-spacing: 0.1em;
}

/* -- Feature tags -- */
.brand-features {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.brand-feature-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;

  i {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
  }
}

.brand-feature-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}

/* ===================== Right Form Area ===================== */
.login-form-side {
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f7f8fc;
  position: relative;
  padding: 40px 20px;
}

.form-top-bar {
  position: absolute;
  top: 20px;
  left: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.account-tip-btn {
  font-size: 13px;
  color: #909399;
  padding: 6px 0;

  &:hover {
    color: var(--primary, #409eff);
  }
}

.form-top-bar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.top-bar-item {
  cursor: pointer;
}

.theme-toggle {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.04);
  color: #606266;
  font-size: 18px;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: #409eff;
  }
}

.form-wrapper {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  animation: slideInFadeUp 0.6s ease-out;
}

@keyframes slideInFadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.form-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 32px;
}

.login-form {
  ::v-deep .el-form-item {
    margin-bottom: 20px;
  }

  ::v-deep .el-input__inner {
    height: 44px;
    line-height: 44px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    background: rgba(0, 0, 0, 0.02);
    font-size: 14px;
    transition: all 0.3s;

    &:focus {
      border-color: var(--primary, #409eff);
      box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.1);
    }
  }

  ::v-deep .el-input__icon {
    line-height: 44px;
  }

  ::v-deep .el-input__prefix {
    left: 12px;
  }

  ::v-deep .el-input--prefix .el-input__inner {
    padding-left: 36px;
  }

  ::v-deep .el-input__suffix {
    right: 8px;
  }
}

.captcha-row {
  display: flex;
  align-items: center;
  gap: 12px;

  .el-input {
    flex: 1;
  }
}

.form-options {
  margin-bottom: 20px;

  ::v-deep .el-checkbox__label {
    color: #6b7280;
    font-size: 13px;
  }
}

.login-btn {
  width: 100%;
  height: 44px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, var(--primary, #409eff), #1a5276);
  border: none;
  transition: all 0.3s;

  &:hover,
  &:focus {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(64, 158, 255, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
}

/* ===================== Dark Mode ===================== */
.login-page.is-dark {
  .login-brand {
    background: linear-gradient(135deg, #020e1a, #041e42, #0a3158);
  }

  .login-form-side {
    background: #111114;
  }

  .account-tip-btn {
    color: #6b7280;

    &:hover {
      color: #409eff;
    }
  }

  .theme-toggle {
    background: rgba(255, 255, 255, 0.06);
    color: #9b9da1;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #409eff;
    }
  }

  .form-wrapper {
    background: rgba(30, 30, 40, 0.8);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .form-title {
    color: #e5e7eb;
  }

  .form-subtitle {
    color: #9b9da1;
  }

  .login-form {
    ::v-deep .el-input__inner {
      background: rgba(255, 255, 255, 0.05);
      border-color: #333;
      color: #e5e7eb;

      &::placeholder {
        color: #6b7280;
      }

      &:focus {
        border-color: var(--primary, #409eff);
        box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.15);
      }
    }

    ::v-deep .el-input__icon {
      color: #6b7280;
    }
  }

  .form-options {
    ::v-deep .el-checkbox__label {
      color: #9b9da1;
    }

    ::v-deep .el-checkbox__inner {
      background-color: rgba(255, 255, 255, 0.06);
      border-color: #444;
    }
  }
}

/* ===================== Responsive ===================== */
@media (max-width: 992px) {
  .login-brand {
    display: none;
  }

  .login-form-side {
    flex: 1;
    background: linear-gradient(135deg, #0a1e33, #163d5c, #1a4a6e);
  }

  .form-wrapper {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  }

  .login-page.is-dark .login-form-side {
    background: linear-gradient(135deg, #020e1a, #041e42, #0a3158);
  }

  .login-page.is-dark .form-wrapper {
    background: rgba(30, 30, 40, 0.9);
  }
}

@media (max-width: 768px) {
  .form-wrapper {
    padding: 28px 24px;
    margin: 0 8px;
    border-radius: 12px;
  }

  .form-title {
    font-size: 22px;
  }
}
</style>
