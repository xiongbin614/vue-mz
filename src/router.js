import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'
import Group from './views/Group.vue'
import Login from './views/Login.vue'
import FilmInfo from './views/FilmInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'film',
          component: Film
        },
        {
          path: 'cinema',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: 'group',
          component: Group
        },
        {
          path: '',
          redirect: 'film'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/film/:id',
      component: FilmInfo
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
