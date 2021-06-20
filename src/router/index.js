import Vue from 'vue'
import VueRouter from 'vue-router'
import ListPokemons from '../components/ListPokemons.vue'
import FindPokemon from '../components/FindPokemon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: ListPokemons
  },
  {
    path: '/detalhes/:id',
    name: 'details',
    component: FindPokemon
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
