const load = view => () => import(`@views/card/${view}.vue`)
const createCard = view => () => import(`@views/createCard/${view}.vue`)

export default [
  {
    path: '/card',
    name: 'card',
    component: load('card'),
    meta: { title: '创建名片' }
  },
  {
    path: '/createCard',
    name: 'createCard',
    component: createCard('createCard'),
    meta: { title: '创建名片', rightButton: '完成' }
  },
  {
    path: '/detailData',
    name: 'detailData',
    component: createCard('detailData'),
    meta: { title: '详细资料', rightButton: '保存' }
  },
  {
    path: '/myStory',
    name: 'myStory',
    component: createCard('myStory'),
    meta: { title: '我的故事', rightButton: '发布' }
  },
  {
    path: '/companyIntro',
    name: 'companyIntro',
    component: createCard('companyIntro'),
    meta: { title: '公司介绍', rightButton: '发布' }
  }
]
