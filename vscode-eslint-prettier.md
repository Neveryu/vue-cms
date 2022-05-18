# vscode+eslint+prettier 超详细配置使用手册

【文章目标】：彻底搞明白，1、在 VSCode 中如何安装插件 `eslint` 和 `prettier`，来进行代码检查、和代码格式化（美化）；2、以及如何在项目中优雅的新增`eslint`配置文件(`.eslintrc.js`)和`prettier`配置文件(`.prettierrc`)来增强(自定义)代码检查功能和代码格式化功能。

`eslint` 和 `prettier` 是不同（不一样）功能的两个工具；因为它们有一部分相似性，所以很多同学经常搞混它们；也经常搞混项目中的`eslint`配置文件(`.eslintrc.js`)和`prettier`配置文件(`.prettierrc`)的使用区别；以及 VSCode 插件`prettier`与项目中`prettier`配置文件(`.prettierrc`)之间的使用关系，以及如何搭配使用。

最终实现，保存代码时，自动格式化代码。

要做的就是，首先得在 VSCode 中配置 eslint+prettier（一劳永逸），这是基础。

其次，如果你有团队合作(多人参与写代码)；或者，对默认的vscode插件prettier的格式化不是很满意，你可以在项目中增加`prettier`配置文件(`.prettierrc`)来自定义更多规则来增强vscode中你安装的prettier插件的不足。
