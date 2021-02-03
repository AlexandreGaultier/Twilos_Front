import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import( '../components/timeline.vue')
  }, 
  {
    path: '/profil',
    name: 'Profil',
    component: () => import( '../components/profil.vue')
  },
  {
    path: '/tweet',
    name: 'Tweet',
    component: () => import( '../components/tweet.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import( '../components/messages.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import('../views/Connection.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
