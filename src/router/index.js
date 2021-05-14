import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import User from '../views/User.vue'
import UserData from '../views/UserData.vue'
import UserSetting from '../views/UserSetting.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{
      default: Home
    }
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components:{
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    redirect:'/user/data',
    components:{
      default: User
    },
    children:[
      {
        path:"data",
        components:{
          userContent: UserData
        }
      },
      {
        path: "setting",
        components:{
          userContent:UserSetting
        }
      }
    ]
  },
  {
    path: '/:pageName',
    name: 'Page',
    component: Page
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
