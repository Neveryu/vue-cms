<template>
  <component :is="layouts[themeConfig.layout]" />
</template>

<script>
import DefaultLayout from '@/layout/library/default.vue'
import ClassicLayout from '@/layout/library/classic.vue'
import TransverseLayout from '@/layout/library/transverse.vue'
import ColumnsLayout from '@/layout/library/columns.vue'

import { mapGetters } from 'vuex'

const layouts = {
  defaults: DefaultLayout,
  classic: ClassicLayout,
  transverse: TransverseLayout,
  columns: ColumnsLayout,
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
