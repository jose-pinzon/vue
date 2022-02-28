import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/user.vue')
  },
  {
    path: '/searchPokemon',
    name: 'searchPokemon',
    component: () => import(/* webpackChunkName: "searchpokemon" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/Pokemon/:id',
    name: 'Pokemon-id',
    component: () => import(/* webpackChunkName: "pokemon-page" */ '../views/pagePokemon.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users-test-page" */ '../views/prueba1.vue')
  },
  {
    path: '/game/:search',
    name: 'game',
    component: () => import(/* webpackChunkName: "games-page" */ '../components/juegos.vue')
  },
  {
    path: '/thanos',
    name: 'thanos',
    component: () => import(/* webpackChunkName: "TODO_vuex" */ '../views/TodoVuex.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "slots */ '../views/customSlot.vue')
  },
  {
    path: '/Cine',
    name: 'cine',
    component: () => import(/* webpackChunkName: "cine */ '../views/PRUEBA2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
