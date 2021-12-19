import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Add from '../views/Add.vue'
import Favorites from '../views/Favorites.vue'
import User from '../views/User.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
