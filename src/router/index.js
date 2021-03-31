import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Birthday from '../views/Birthday.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Birthday', component: Birthday },
  { path: '/home', name: 'Home', component: Home },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
