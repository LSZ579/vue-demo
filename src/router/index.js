import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import My from '@/components/My'
import index from '@/components/index'
import Search from '@/components/Search'
import BookSelf from '@/components/BookSelf'
import BookDetail from '@/components/BookDetail'
import BookList from '@/components/BookList'
import Register from '@/components/Register'
import ContentList from '@/components/ContentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },

    {
      path: '/index',
      component: index,
      meta: {
        keepAlive: true
    }
    },
    {
      path: '/BookList',
      component: BookList,
      meta: {
        keepAlive: true
    }
    },
    {
      path: '/Search',
      name:'Search',
      component:Search,
      meta: {
        keepAlive: true
    }
    },
    {
      path: '/My',
      name:'My',
      component: My
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/BookSelf',
      component:BookSelf
    },
    {
      path:'/BookDetail',
      name:'BookDetail',
      component:BookDetail
    },
    {
      path:'/Register',
      name:'Register',
      component:Register
    },
    {
      path:'/ContentList',
      name:'ContentList',
      component:ContentList
    }
  ]
})
