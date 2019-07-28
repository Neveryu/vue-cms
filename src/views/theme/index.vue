<template>
  <div class="app-container">
    <el-card class="box-card" shadow="hover">
      <div slot="header">
        <span>换主题</span>
        <el-button style="float: right; padding: 3px 0" type="text">更换主题文档</el-button>
      </div>
      <div class="box-item">
        <!-- <span class="field-label">换肤 : </span> -->
        <!-- <el-switch v-model="theme" /> -->
        <el-radio v-model="theme" :label="1" border>默认</el-radio>
        <el-radio v-model="theme" :label="2" border>夏日心情</el-radio>
        <aside style="margin-top:15px;">Tips: 它与 navbar 中的更换皮肤有明显的区别，他们是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。</aside>
      </div>
    </el-card>

    <div class="block">
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
      <el-button type="primary" icon="el-icon-edit" />
      <el-button type="primary" icon="el-icon-share" />
      <el-button type="primary" icon="el-icon-delete" />
      <el-button type="primary" icon="el-icon-search">
        Search
      </el-button>
      <el-button type="primary">
        Upload
        <i class="el-icon-upload el-icon-right" />
      </el-button>
    </div>

    <div class="block">
      <el-tag v-for="tag in tags" :key="tag.type" :type="tag.type" class="tag-item">
        {{ tag.name }}
      </el-tag>
    </div>

    <div class="block">
      <el-radio-group v-model="radio">
        <el-radio :label="3">
          Option A
        </el-radio>
        <el-radio :label="6">
          Option B
        </el-radio>
        <el-radio :label="9">
          Option C
        </el-radio>
      </el-radio-group>
      <span style="margin-left: 25px;"></span> 
      <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
    </div>

    <div class="block">
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="block">
      <el-slider v-model="slideValue" />
    </div>

    <div class="block">
      <el-alert
        class="item-alert"
        title="成功提示的文案"
        type="success"
        effect="dark">
      </el-alert>
      <el-alert
        class="item-alert"
        title="消息提示的文案"
        type="info"
        effect="dark">
      </el-alert>
      <el-alert
        class="item-alert"
        title="警告提示的文案"
        type="warning"
        effect="dark">
      </el-alert>
      <el-alert
        class="item-alert"
        title="错误提示的文案"
        type="error"
        effect="dark">
      </el-alert>
    </div>
  </div>
</template>

<script>
import { toggleClass } from '@/utils'
import('@/assets/custom-theme/theme-summer.css')
export default {
  name: 'Theme',
  data() {
    return {
      showColorPicker: false,
      theme: 1,
      tags: [
        { name: 'Tag One', type: '' },
        { name: 'Tag Two', type: 'info' },
        { name: 'Tag Three', type: 'success' },
        { name: 'Tag Four', type: 'warning' },
        { name: 'Tag Five', type: 'danger' }
      ],
      slideValue: 50,
      radio: 3,
      checked1: true,
      checked2: false
    }
  },
  watch: {
    theme(val) {
      toggleClass(document.body, 'theme-summer')
      if(val === 1) {
        this.showColorPicker = true
      }
    }
  }
}
</script>

<style scoped>
.field-label{
  vertical-align: middle;
}
.box-card {
  width: 400px;
  max-width: 100%;
  margin: 20px auto;
}

.block {
  padding: 30px 24px;
}

.tag-item {
  margin-right: 15px;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
.item-alert {
  margin-bottom: 10px !important;
}
</style>
