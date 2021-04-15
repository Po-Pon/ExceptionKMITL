import Vue from 'vue'
import VueRouter from 'vue-router'
import pathHome from '../views/Home.vue'
import pathLogin from '../views/login.vue'
import pathRegister from '../views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: pathHome // set home as path '/'
  },
  {
    path: '/home',
    name: 'Home',
    component: pathHome // set home as path '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: pathLogin // set login as path '/'
  },
  {
    path: '/register',
    name: 'Register',
    component: pathRegister // set register as path '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router