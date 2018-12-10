const load = (view) => () => import(`@views/${view}.vue`)

export default [
  // { path: '/', redirect: '/home'},
  { path: '/', name: 'home', component: load('Home')},
]