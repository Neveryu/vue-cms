<template>
  <div class="layout-footer">
    <div class="layout-footer-content">
      <div class="footer-brand">
        <svg-icon icon-class="heart" class="brand-icon" />
        <span class="brand-name">Vue CMS</span>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-copyright">
        <span>Copyright © {{ nowYear }}</span>
        <el-link type="primary" href="https://github.com/neveryu/vue-cms" target="_blank" class="author-link">Never Yu</el-link>
        <span>All rights reserved.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowYear: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped lang="scss">
.layout-footer {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.layout-footer-content {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;

  .brand-icon {
    font-size: 16px;
    color: var(--primary, #409eff);
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  .brand-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--next-bg-topBarColor, #303133);
    letter-spacing: 0.5px;
  }
}

.footer-divider {
  width: 1px;
  height: 16px;
  background: linear-gradient(180deg, transparent, var(--next-border-color-light, #dcdfe6), transparent);
}

.footer-copyright {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--next-bg-topBarColor, #606266);

  .author-link {
    font-weight: 500;
    font-size: 13px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-1px);
    }
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

// 深色模式适配
:deep([data-theme='dark']) {
  .layout-footer {
    border-top-color: var(--next-border-color-light, #2c2c2c);
  }
}
</style>
