// 权限拦截  导航守卫
import router from '../router/index'
//  全局前置守卫
router.beforeEach(function (to, from, next) {
// 拦截谁  判断拦截地址
// 由于  某某框架升级了corejs版本  导致 字符串方式编译问题 判断 是否需要控制 先用不等于login来判断
  if (to.path !== '/login') {
  // 进行 权限判断  判断有无token 如果有就放过 没有就会到登录页
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 直接放过
      next()
    } else {
      next('/lgoin') // 如果没有token 就直接强制跳转到登录页
    }
  } else {
    next() // 直接放行
  }
})
