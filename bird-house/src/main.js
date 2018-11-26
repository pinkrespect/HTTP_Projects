import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Routes from './routes.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  Routes
})

Vue.config.productionTip = false

new Vue({
  router,
  App
}).$mount('#app')
