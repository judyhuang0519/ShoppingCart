import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Login from '../views/Login.vue'

import DbTable from '../components/DbTable.vue'
/*import User from '../views/User.vue'
import UserData from '../views/UserData.vue'
import UserSetting from '../views/UserSetting.vue'*/
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{
      default: Home
    },
    meta: { requiresAuth: true }
  },
  /*{
    path: '/login',
    name: 'Login',
    components:{
      default: Login
    }
  },*/
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components:{
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    meta: { requiresAuth: true }
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components:{
      default: () => import('../views/shopCart.vue') 
    },
    meta: { 
      requiresAuth: true ,
    }

    //component: () => import(/* webpackChunkName: "about"  '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    redirect:'/user/data',
    components:{
      default: () => import('../views/user/User.vue')
    },
    meta: { requiresAuth: true },
    children:[
      {
        path:"data",
        components:{
          userContent: () => import('../views//user/UserData.vue')
        }
      },
      {
        path: "setting",
        components:{
          userContent: () => import('../views/user/UserSetting.vue')
        }
      }
    ]
  },
  {
    path: '/dbtest',
    name: 'DBTest',
    redirect:'/dbtest/user',
    components: {
      default: () => import('../views/DBTest.vue')
    },
    meta: { requiresAuth: true },
    children:[
      {
        path: 'user',
        name:"DB_user",
        components:{
          DBTable: ()=>import('../views/dbUser.vue')
        }
      },
      {
        path: 'item',
        name:"DB_item",
        components:{
          DBTable: ()=>import('../views/dbItem.vue')
        }
      },
      {
        path: 'order',
        name:"DB_order",
        components:{
          DBTable: ()=>import('../views/dbOrder.vue')
        }
      },
      {
        path: 'detail',
        name:"DB_detail",
        components:{
          DBTable: ()=>import('../views/dbDetail.vue')
        }
      }
    ]
  },
  {
    path: '/dbtest',
    name: 'DBTest',
    redirect:'/dbtest/user',
    components: {
      default: () => import('../views/DBTest.vue')
    },
    meta: { requiresAuth: true },
    children:[
      {
        path: ':table',
        name:"DBID",
        components:{
          DbTable: DbTable
        }
      }
    ]
  },
  /*{
    path: '/dbtest/:id',
    name: 'Page',
    component: Page
  },*/

]

//const isAuth = true;

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/*router.beforeEach((to, from, next)=>{
  if ((to.path !== '/login')&&(to.matched.some((record)=>{return record.meta.requiresAuth}))){
    if(!isAuth){
        next({
        path:"/login",
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      next()
    }
  }else{
    next()
  }
})*/

export default router
