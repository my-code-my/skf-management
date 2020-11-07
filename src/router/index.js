import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'
import Home from '../views/home/Home'
import Welcome from "../views/home/Welcome"
import Data from "../views/data/Data"
import Order from "../views/order/Order"
import Detail from "../views/order/Detail"
import Pay from "../views/order/Pay";
import Categories from "../views/categories/Categories"

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: Welcome,
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: '/data',
        name: 'Data',
        component: Data
      },
      {
        path: '/order',
        name: 'Order',
        component: Order
      },
      {
        path: '/detail',
        name: Detail,
        component: Detail
      },
      {
        path: '/pay',
        name: Pay,
        component: Pay
      },
      {
        path: '/categories',
        name: Categories,
        component: Categories
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default  router
