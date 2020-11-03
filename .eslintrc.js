// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,
    'space-before-function-paren': 0,
    'keyword-spacing': 0,
    // switch必须提供 default
    'default-case': 'error',
    // 禁止在变量未声明之前使用
    'no-use-before-define': 'error',
    // 代码后不使用分号
    semi: ['error', 'never'],
    // 必须使用let 或 const, 不能使用var
    'no-var': 'error',
    // js中应使用单引号替代双引号
    quotes: ['error', 'single'],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 文件末尾空行
    'eol-last': ["error", "always"],
    'no-unused-vars': 0
  }
}
