import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('../components/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        components: {
          main: () => import('../components/Main-L/index.vue')
        }
      },
      {
        path: '/blogindex',
        name: 'Blogindex',
        components: {
          main: () => import('../components/Main-L/Blogindex.vue')
        }
      },
      {
        path: '/about',
        name: 'About',
        components: {
          main: () => import('../components/Main-L/About.vue')
        }
      },
      {
        path: '/detail',
        name: 'Detail',
        components: {
          main: () => import('../components/Main-L/detail.vue')
        }
      },
      {
        path: '/fenleilist',
        name: 'FenleiList',
        components: {
          main: () => import('../components/Main-L/fenleiList.vue')
        }
      },
      {
        path: '/searchauthor',
        name: 'SearchAuthor',
        components: {
          main: () => import('../components/Main-L/searchAuthor.vue')
        }
      },
      {
        path: '/searchtitle',
        name: 'SearchTitle',
        components: {
          main: () => import('../components/Main-L/searchTitle.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
