import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Group from '@/pages/Group'
import Detail from '@/pages/Detail'
import Book from '@/pages/Book'
import Movie from '@/pages/Movie'
import Search from '@/pages/Search'
import Status from '@/pages/Status'
import Subject from '@/pages/Subject'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Talion from '@/pages/Talion'
import Default from '@/layouts/Default'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: 'book',
          name: 'Book',
          component: Book
        },
        {
          path: 'movie',
          name: 'Movie',
          component: Movie
        },
        {
          path: 'group',
          name: 'Group',
          component: Group
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: ':classify/subject/:id',
          name: 'Subject',
          component: Subject
        },
        {
          path: 'status',
          name: 'Status',
          component: Status
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
        {
          path: 'talion',
          name: 'Talion',
          component: Talion
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
