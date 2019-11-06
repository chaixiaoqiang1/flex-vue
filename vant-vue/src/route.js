const routes = [
  {
    path: '/foo',
    component: () => import('@/view/foo'),
    meta: {
      title: '首页',
    }
  },
  { path: '/login', component: () => import('@/view/login') },
  { path: '/test', component: () => import('@/view/test') },
  { path: '/test1', component: () => import('@/view/test1') }
];


export default routes