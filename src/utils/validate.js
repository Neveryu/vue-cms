/**
 * 文件名：validate.js
 * 【检查，校验】相关的函数
 */

/**
 * 登录时的用户名验证
 * @Author   Author
 * @DateTime 2020-10-16T13:18:25+0800
 * @param    {[string]}                 str [description]
 * @return   {Boolean}                    [description]
 */
export function isValidUsername(str) {
  const usernameMap = ['admin', 'lucy']
  return usernameMap.indexOf(str.trim()) >= 0
}

/**
 * 根据接口返回的菜单权限类型值，返回具体的类型【菜单，页面，按钮】
 * 1-菜单-menu
 * 2-页面-page
 * 3-按钮-btn
 * @param {number|string} typeValue
 */
export function getRoutePermissionType(typeValue) {
  typeValue = Number(typeValue)
  switch (typeValue) {
    case 1:
      return 'menu'
    case 2:
      return 'page'
    case 3:
      return 'btn'
    default:
      return ''
  }
}

/**
 * 根据接口返回的菜单权限类型值，判断是不是菜单类型（包含菜单，页面）
 * @param {number|string} typeValue
 */
export function isMenuPermissionByType(typeValue) {
  typeValue = Number(typeValue)
  return typeValue === 1 || typeValue === 2
}

/**
 * 根据接口返回的菜单权限类型值，判断是不是按钮类型（包含按钮）
 * @param {number|string} typeValue
 */
export function isBtnPermissionByType(typeValue) {
  typeValue = Number(typeValue)
  return typeValue === 3
}
