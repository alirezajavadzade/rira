import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/video',
    name: 'VideoView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "video" */ '../views/VideoView.vue')
  },
  {
    path: '/',
    name: 'CardView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Card" */ '../views/CardView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
