<template>
  <component :is="layouts[themeConfig.layout]" />
</template>

<script>
import DefaultLayout from '@/layout/library/default.vue'
// import ClassicLayout from '@/layout/main/classic.vue'
// import TransverseLayout from '@/layout/main/transverse.vue'
// import ColumnsLayout from '@/layout/main/columns.vue'

// import { Local } from '/@/utils/storage'

import { mapGetters } from 'vuex'

const layouts = {
  defaults: DefaultLayout,
}

export default {
  computed: {
    ...mapGetters({
      themeConfig: 'setting',
    }),
  },
  data() {
    return {
      layouts,
    }
  },
}
</script>
