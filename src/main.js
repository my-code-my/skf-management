import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/style/normalize.css'
import './assets/global.css'
import './assets/font/iconfont.css'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import TreeTable from 'vue-table-with-tree-grid'


Vue.config.productionTip = false

Vue.use(ElementUi, { size: 'small' })

Vue.component('tree-table', TreeTable)

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = (dt.getFullYear()+'').padStart(2,'0')
  const m = (dt.getMonth()+1 +'').padStart(2,'0')
  const d = (dt.getDay()+'').padStart(2,'0')

  const hh = (dt.getHours()+'').padStart(2,'0')
  const mm = (dt.getMinutes()+'').padStart(2,'0')
  const ss = (dt.getSeconds()+'').padStart(2,'0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
