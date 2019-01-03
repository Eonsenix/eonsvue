const load = view => () => import(`@views/${view}.vue`)

export default [
  // { path: '/', redirect: '/home'},
  {
    path: '/',
    name: 'home',
    component: load('Home'),
    meta: { title: '标题', rightButton: '按钮' }
  },
  {
    path: '/test',
    name: 'test',
    component: load('test'),
    meta: { title: '标题1', rightButton: '按钮1' }
  },
  { path: '/page1', name: 'page1', component: load('page1') }
]
