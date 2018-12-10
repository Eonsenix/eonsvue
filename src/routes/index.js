import Vue from 'vue'   // 引入vue
import VueRouter from 'vue-router'   // 引入vue-router
import createRoute from './routes'

const router = new VueRouter({
  routes: createRoute
/*   scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  } */
})

// 路由解析开始
router.beforeEach((to, from, next) => {
  next()
})
// 路由解析结束
router.afterEach((to, form) => {
  
})

Vue.use(VueRouter)

export default router
