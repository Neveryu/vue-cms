module.exports = {
  root: true,
  env: {
    node: true, // 告诉eslint，代码将在node.js环境中运行，因此eslint应该启用所有与node.js相关的规则。因此可以访问node.js提供的全局变量和模块，如__dirname，process,require,module等。
    // browser: true, // 告诉 ESLint，代码在浏览器环境中运行，因此可以访问浏览器提供的全局变量和对象，如 window, document 等。
    // es6: true // 允许 ESLint 使用 ECMAScript 2015（也称为 ES6）的语法特性。即使你设置了这个选项，你仍然需要在 parserOptions 中指定一个支持 ES6 语法的解析器（通常是 Babel 或 @babel/eslint-parser），除非你的 ESLint 版本已经默认支持 ES6。
  },
  // extends 字段表示 继承一组预定义的 ESLint 规则配置
  // 'plugin:vue/essential'用的包是：eslint-plugin-vue，作用是：Vue 基础规则
  // 'eslint:recommended'用的包收：eslint，作用是：ESLint 推荐规则
  // '@vue/prettier'用的包是：@vue/eslint-config-prettier，作用是：关闭 ESLint 与 Prettier 的冲突规则（ESLint 和 Prettier 都有各自的格式规则（比如缩进、引号），直接同时使用会导致重复报错。）
  // 'plugin:prettier/recommended'用的包是：eslint-config-prettier，作用是：再启用 Prettier 规则
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  // 【parserOptions】扩展 ESLint 对 JavaScript 新语法和实验性特性的支持
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true,
    },
  },

  rules: {
    'no-unused-vars': 'warn', // 声明了变量、函数或导入模块但未使用
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 代码后不使用分号
    semi: ['error', 'never'],
    // 注释 // 或 /* 之后必须有一个空格
    'spaced-comment': ['error', 'always'],
    // 必须使用let 或 const, 不能使用var
    'no-var': 'error',
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'error',
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], // Vue 官方风格指南建议组件名使用多个单词，这里忽略名为 index 的组件
      },
    ],
  },
  // overrides 字段的作用是为特定文件或目录定义独立的规则，允许你对不同文件类型或路径应用不同的代码检查规则
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
