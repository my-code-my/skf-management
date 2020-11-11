import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Home from '@/views/home/Home'
import Welcome from "@/views/home/Welcome"

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
    meta: {title: '首页'},
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
        component: () => import('@/views/data/Data'),
        meta: {title: '数据面板'}
      },
      {
        path: '/OrderList',
        name: 'OrderList',
        component: () => import('@/views/OrderManagement/OrderList'),
        meta: {title: '订单列表'}
      },
      {
        path: '/OrderDetail',
        name: 'OrderDetail',
        component: () => import('@/views/OrderManagement/OrderDetail'),
        meta: {title: '订单详情'}
      },
      {
        path: '/Pay',
        name: 'Pay',
        component: () => import('@/views/OrderManagement/Pay'),
        meta: {title: '收支记录'}
      },
      {
        path: '/Categories',
        name: 'Categories',
        component: () => import('@/views/GoodsManagement/Categories'),
        meta: {title: '类目管理'}
      },
      {
        path: '/Props',
        name: 'Props',
        component: () => import('@/views/GoodsManagement/Props'),
        meta: {title: '属性管理'}
      },
      {
        path: '/SealList',
        name: 'SealList',
        component: () => import('@/views/GoodsManagement/SealList'),
        meta: {title: '密封列表'}
      },
      {
        path: '/GoodsDetail',
        name: 'GoodsDetail',
        component: () => import('@/views/GoodsManagement/GoodsDetail'),
        meta: {title: '商品详情'}
      },
      {
        path: '/AddGoods',
        name: 'AddGoods',
        component: () => import('@/views/GoodsManagement/AddGoods'),
        meta: {title: '添加商品'}
      },
    ]
  },
]

const router = new Router({
  routes,
  mode: 'history'
})

export default  router
