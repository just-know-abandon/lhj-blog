import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VCharts from 'v-charts'

// 全局导入css
import './assets/css/all.css'
// 全局导入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VCharts)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
