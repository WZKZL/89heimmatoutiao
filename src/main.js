import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUl from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index' // 引入element样式
import '../src/styles/index' // 引入初始化设置
Vue.use(ElementUl) // 全局注册
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
