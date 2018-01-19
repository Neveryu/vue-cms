export function isValidUsername(str) {
  const usernameMap = ['admin']
  return usernameMap.indexOf(str.trim()) >= 0
}