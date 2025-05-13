<template>
  <el-dropdown trigger="click" class="international-icon" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language === 'zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language === 'en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LangSelect',
  computed: {
    ...mapGetters({
      language: 'language',
    }),
  },
  methods: {
    ...mapActions({
      setLanguage: 'language/setLanguage',
    }),
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.setLanguage(lang)
    },
  },
}
</script>
<style scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
}
</style>
