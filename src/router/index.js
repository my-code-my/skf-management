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
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: Welcome,
    meta: {title: '首页',first: 1},
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
        meta: {title: '首页'}
      },
      {
        path: '/data',
        name: 'Data',
        component: Data,
        meta: {title: '数据面板'}
      },
      {
        path: '/order',
        name: 'Order',
        component: Order,
        meta: {title: '订单列表'}
      },
      {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        meta: {title: '收支记录'}
      },
      {
        path: '/pay',
        name: 'Pay',
        component: Pay,
        meta: {title: '类目管理'}
      },
      {
        path: '/categories',
        name: 'Categories',
        component: Categories,
        meta: {title: '属性管理'}
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default  router
