module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures:{
      // 支持装饰器
      legacyDecorators: true
    }
  },
  /* prettier的配置说明 */
  // "prettier.printWidth": 100, // 超过最大值换行
  // "prettier.tabWidth": 4, // 缩进字节数
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
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        printWidth: 120,
        arrowParens: "avoid",
        bracketSpacing: true,
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        requirePragma: false,
        trailingComma: "none",
        useTabs: false
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 使用2个空格缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
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
        allowTemplateLiterals: true
      }
    ],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'error',
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
