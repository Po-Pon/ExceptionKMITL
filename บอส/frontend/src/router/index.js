import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/homepage.vue') // set home as path '/'
  },
  {
    path: '/forum',
    name: 'forum',
    component: () =>import('../views/forum.vue')
  },
  {
    path: '/reportform',
    name: 'reportform',
    component: () => import('../views/reportform.vue')
  },
  {
    path: '/trackingstatus',
    name: 'trackingstatus',
    component: () => import('../views/trackingstatus.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router