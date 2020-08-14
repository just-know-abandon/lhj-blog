import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局导入css
import './assets/css/all.css'
// 全局导入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
