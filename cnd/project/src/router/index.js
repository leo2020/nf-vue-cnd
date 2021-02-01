// import Home from '../views/home.js?v=2'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.js?v=2')
  },
  {
    path: '/state',
    name: 'state',
    component: () => import('../views/state.js?v=2')
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('../views/component.js?v=2')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
