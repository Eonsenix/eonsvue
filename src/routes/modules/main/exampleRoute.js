const load = (view) => () => import(`@views/${view}.vue`)

export default [
  // { path: '/', redirect: '/home'},
  { path: '/', name: 'home', component: load('Home'), meta: {title: 'sb'}},
  { path: '/page1', name: 'page1', component: load('page1')}
]