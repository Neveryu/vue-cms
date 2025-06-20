<template>
  <component :is="layouts[themeConfig.layout]" />
</template>

<script>
import DefaultLayout from '@/layout/library/default.vue'
// import ClassicLayout from '@/layout/main/classic.vue'
// import TransverseLayout from '@/layout/main/transverse.vue'
// import ColumnsLayout from '@/layout/main/columns.vue'

// import { useThemeConfig } from '/@/stores/themeConfig'
// import { Local } from '/@/utils/storage'

const layouts = {
  defaults: DefaultLayout,
}

export default {
  data() {
    return {
      layouts,
      themeConfig: {
        layout: 'defaults',
      },
    }
  },
}
</script>
