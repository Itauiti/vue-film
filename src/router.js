import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/film/:id',
      name: 'film',
      component: () => import('./views/FilmPage.vue')
    },
  ]
})