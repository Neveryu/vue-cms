/**
 * 这是权限板块，设计包含：路由、菜单、页面、按钮
 */
import { asyncRoutes, constantRoutes, endBasicRoutes } from '@/router'

const state = {
  // 按钮权限
  btns: [],
  // 最后生成的总的路由
  routes: constantRoutes,
  // 动态添加进来的路由
  addRoutes: []
}

/**
 * 前端动态路由是否在后端返回的路由权限中
 * @param routes - 前端动态路由表
 * @param route -前端配置的路由表具体路由对象
 */
function hasPermission(routes, route) {
  // 后端返回的菜单路由必须要有address
  routes = routes.filter(d => d.address)
  if (routes && routes.length > 0) {
    // return routes.some(item => item.address.includes(route.path))
    return routes.some(d => d.address == route.path)
  } else {
    return false
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param asyncRoutes 前端配置的动态路由表
 * @param routes 接口返回的有权限的路由
 * 两者做一个匹配
 */
export function filterAsyncRoutes(asyncRoutes, routes) {
  let res = []
  asyncRoutes.forEach(route => {
    if(route) {
      let isHasPermission = hasPermission(routes, route)
      if (route.children) {
        route.children = filterAsyncRoutes(route.children, routes)
      }
      if (isHasPermission || (route.children && route.children.length > 0)) {
        res.push(route)
      }  
    }
  })
  return res
}

/**
 * @summary 扁平化数据转tree
 * @param {Array} list
 * @param {String} key 树节点的主键字段名称，如id
 * @param {String} pKey 树节点的父级外键字段名称，如pId
 * @param {String} topPKeyValue 顶级节点的父级外键的值，如'',默认用空
 * @returns {*}
 */
function formatTree(list, key, pKey, topPKeyValue) {
  return list.filter(parent => {
    let findChildren = list.filter(child => {
      // console.log(parent[key], child[pKey], key)
      return parent[key] === child[pKey]
    })
    // 返回顶层，依据实际情况判断这里的返回值
    if (findChildren.length > 0) parent.children = findChildren
    return parent[pKey] == topPKeyValue || parent[pKey] == '' || parent[pKey] == undefined || parent[pKey] == null
  })
}

/**
 * 前端动态路由是否在后端返回的路由权限中
 * @param asyncRoutes - 前端动态路由表
 * @param path -前端静态配置的路由表具体路由对象
 */
function getPermissionOfAsyncRoutes(asyncRoutes, id) {
  for (let index = 0; index < asyncRoutes.length; index++) {
    const element = asyncRoutes[index]
    if (element.id == id) {
      return element
    }
    if (element.children) {
      let target = getPermissionOfAsyncRoutes(element.children, id)
      if (target) {
        return target
      }
    }
  }
  return null
}


const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SET_BUTTONS: (state, btns) => {
    state.btns = btns
  }
}

const actions = {
  /**
   * @param {routes} 接口返回的路由
   */
  generateRoutes({ commit }, routes) {
    // 过滤出菜单路由（type为1或者2的是路由/页面菜单权限）
    let menuRoles = routes.filter(item => {
      return item.type == '1' || item.type == '2'
    })

    // 过滤出按钮权限表（type为3的代表可以显示的按钮权限）
    let btnPermissions = routes.filter(item => {
      return item.type == '3'
    })

    // 生成按钮权限的数据(数组)
    let btns = []
    if (btnPermissions && btnPermissions.length > 0) {
      btnPermissions.forEach(item => {
        btns.push(item.address || null)
      })
    }
    commit('SET_BUTTONS', btns)

    return new Promise(resolve => {
      // 从动态路由中筛选出用户有的路由页面/菜单
      let accessedRoutes = filterAsyncRoutes(asyncRoutes, menuRoles)
      // 然后把endRoutes添加到最后面
      accessedRoutes.push(...endBasicRoutes)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
