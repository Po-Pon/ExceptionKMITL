import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuelidate from 'vuelidate'
import 'bulma/css/bulma.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,  // add router here
  render: h => h(App),
}).$mount('#app')