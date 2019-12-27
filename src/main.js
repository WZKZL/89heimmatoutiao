import Vue from 'vue'
import App from './App.vue'
import './permision/index' // 路由守卫
import router from './router'
import ElementUl from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index.css' // 引入element样式
import './styles/index.less' // 引入初始化设置
import axios from 'axios'
import Component from './components/index' // 引入组件对象
Vue.use(ElementUl) // 全局注册
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值给黑马默认的地址
Vue.prototype.$axios = axios// 赋值给全局对象
Vue.config.productionTip = false
Vue.use(Component) // 注册全局组件对象 => 调用该对象中的一个install

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
