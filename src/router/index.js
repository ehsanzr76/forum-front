import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/auth/Register";
import Login from "@/views/auth/Login";
import ShowThread from "@/views/thread/ShowThread";
import CreateThread from "@/views/thread/CreateThread";
import {checkAuth} from "@/requests/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/register',
    name: 'register',
    component: localStorage.getItem('isAuth')=== 'false' ? Register : HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: localStorage.getItem('isAuth')=== 'false' ? Login : HomeView
  },

  {
    path: '/thread/:slug',
    name: 'ShowThread',
    component: ShowThread
  },

  {
    path: '/create/thread',
    name: 'CreateThread',
    component: CreateThread
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
