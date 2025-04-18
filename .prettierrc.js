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
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  htmlWhitespaceSensitivity: 'ignore',
  bracketSameLine: true, // 用于控制HTML元素的闭合括号是否与最后一行的内容在同一行
  // 动态条件示例
  tabWidth: process.env.ENV === 'development' ? 2 : 2,
  // 通过 overrides 针对特定文件配置
  overrides: [],
}
