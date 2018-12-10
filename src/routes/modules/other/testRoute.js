// 注意: 路由文件名以Route结尾, e.g: exampleRoute.js; 如果views有子文件夹请自行修改load函数import路径
const load = (view) => () => import(`@views/${view}.vue`)

export default [
  // { path: '/', redirect: '/home'},
  { path: '/about', name: 'about', component: load('About')}
]