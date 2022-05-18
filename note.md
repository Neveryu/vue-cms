文件内容：笔记（包含 vue3、ts、vite 等相关内容）

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## 一、单文件组件 `<script setup>`

`<script setup>` 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。相比于普通的 `<script>` 语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

## 二、UI 框架引入的三种方式利弊分析总结

- 1、全局完整注册

  ```
    import Antd from 'ant-design-vue';
    import 'ant-design-vue/dist/antd.css';
  ```

  以上代码便完成了 Antd 的全局注册。需要注意的是，样式文件需要单独引入。

- 2、全局部分注册

  ```
  import { Button, message } from 'ant-design-vue';
  /* 会自动注册 Button 下的子组件, 例如 Button.Group */
  app.use(Button).mount('#app');
  app.config.globalProperties.$message = message;
  ```

- 3、局部注册组件
  【重要说明】 此种方式需要分别注册组件子组件，如 Button、ButtonGroup，并且注册后仅在当前组件中有效。所以我们推荐使用上述两种方式。

  ```
    <template>
      <a-button>Add</a-button>
    </template>
    <script>
    import { Button } from 'ant-design-vue';
    const ButtonGroup = Button.Group;

    export default {
      components: {
        AButton: Button,
        AButtonGroup: ButtonGroup,
      },
    };
    </script>
  ```

## 三、按需加载

如果你仅需要加载使用的组件，可以通过以下的写法来按需加载组件。

```
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
```

如果你使用了 babel，那么可以使用 `babel-plugin-import` 来进行按需加载，加入这个插件后。你可以仍然这么写：

```
import { Button } from 'ant-design-vue';
```

插件会帮你转换成 ant-design-vue/lib/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。

> 注意，babel-plugin-import 的 style 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 import 'ant-design-vue/dist/antd.css 手动引入，并覆盖全局样式。

【总结：】既然这样的话，那不管是全量引入还是按需加载，样式文件干脆直接 `import 'ant-design-vue/dist/antd.css` 手动全量引入全局样式。

如果你使用的 Vite，你可以使用 `unplugin-vue-components` 来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：

```
import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib
```

什么是 `Vite` 的按需加载？就是在 `vite.config.js` 中进行配置，配了以后，你就可以直接使用 `antd-vue` 里面的组件了，`vite` 会自动知道你引入了哪些组件，但就像上面所说的，无法处理非组件模块。

```
// vite.config.js
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    /* ... */
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
};
```

【总结：】如果确实想要使用按需加载的话，借助 `babel-plugin-import` 是一个很好的方案吧，但还是那句话，样式还是全量引入吧。
