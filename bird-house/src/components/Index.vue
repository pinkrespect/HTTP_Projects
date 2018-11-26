<template>
  <div id="Index">
    <router-link to="/Main"><img src="Index.jpeg"></router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = { template: '<div>Main</div>' }

const routes = {
  path: '/Main', component: Main
}

const router = new Router({
  routes
})

const app = new Vue({
  router
}).$mount('#Index')

</script>
