/**
 * .prettierrc.js
 * 本文件是 vscode 插件 prettier 的配置文件
 * prettier的配置文件可以是：.prettierrc（内容可以是JSON或者YAML）、.prettierrc.json、.prettierrc.yml、.prettierrc.yaml、.prettierrc.js、.prettierrc.config.js、.prettierrc.toml
 * ******************************
 * .prettierrc：简洁，自动识别 JSON/YAML	通用配置
 * .prettierrc.js：【支持动态逻辑	需要条件判断的复杂配置】
 * .prettierrc.yml：无括号，可读性强	偏好 YAML 语法的团队
 * 也可以在 package.json 文件中写 prettier 字段：减少文件数量	小型项目或 Monorepo 子包
 * ******************************
 * 本项目使用 .prettierrc.js 格式
 */

/* prettier的配置说明 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */
// "prettier.printWidth": 120, // 超过最大值换行
// "prettier.tabWidth": 2, // 缩进字节数
// "prettier.useTabs": false, // 缩进不使用tab，使用空格
// "prettier.semi": true, // 句尾添加分号
// "prettier.singleQuote": true, // 使用单引号代替双引号
// "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
// "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
// "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
// "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
// "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
// "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
// "prettier.htmlWhitespaceSensitivity": "ignore",
// "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
// "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
// "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
// "prettier.parser": "babylon", // 格式化的解析器，默认是babylon
// "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
// "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
// "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
// "prettier.tslintIntegration": false // 不让prettier使用tslint的代码格式进行校验
/* prettier的配置说明 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */

module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 150,
  htmlWhitespaceSensitivity: 'ignore',
  bracketSameLine: true, // 用于控制HTML元素的闭合括号是否与最后一行的内容在同一行
  // 动态条件示例
  tabWidth: process.env.ENV === 'development' ? 2 : 2,
  // 通过 overrides 针对特定文件配置
  overrides: [],
}
