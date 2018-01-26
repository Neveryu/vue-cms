export function isValidUsername(str) {
  const usernameMap = ['admin', 'lucy']
  return usernameMap.indexOf(str.trim()) >= 0
}