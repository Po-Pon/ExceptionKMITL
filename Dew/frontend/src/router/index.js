import Vue from 'vue'
import VueRouter from 'vue-router'
import pathHome from '../views/Home.vue'
import pathLogin from '../views/login.vue'
import pathRegister from '../views/register.vue'
import pathForgot from '../views/forgotPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: pathHome // set home as path '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: pathLogin // set login as path '/Login'
  },
  {
    path: '/forgotpassword',
    name: 'Forgot',
    component: pathForgot // set forgot password as path '/forgotpassword'
  },
  {
    path: '/register',
    name: 'Register',
    component: pathRegister // set register as path '/register'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router