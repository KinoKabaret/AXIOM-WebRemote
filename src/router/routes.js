
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/loading') },
      { path: '/settings', component: () => import('pages/settings') },
      { path: '/main', component: () => import('pages/main') }
    ]
  },
  {
    path: '/details',
    component: () => import('layouts/default'),
    children: [
      { path: '/', component: () => import('pages/details') },
      { path: '', component: () => import('pages/loading') },
      { path: '', component: () => import('pages/loading') },
      { path: '', component: () => import('pages/loading') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
