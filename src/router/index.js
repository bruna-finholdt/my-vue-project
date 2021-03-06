import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ListaExBoyfriends from '../views/ListaExBoyfriends.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/listaexboyfriends',
    name: 'ListaExBoyfriends',
    component: ListaExBoyfriends
  }
]

const router = new VueRouter({
  routes
})

export default router
