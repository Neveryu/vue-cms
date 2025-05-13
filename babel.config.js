module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'entry', // 或 'usage'
        corejs: 3,
      },
    ],
  ],
}
