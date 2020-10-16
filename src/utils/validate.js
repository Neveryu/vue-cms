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
