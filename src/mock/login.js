const userMap = {
  admin: {
    token: 'admin',
    name: 'Admin',
    age: 10,
    avatar: ''
  }
}

export function login(username, pwd) {
  return userMap[username]
}