import LayoutAside from './Home/layout-aside.vue'
import LayoutHeader from './Home/layout-header.vue'
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAside)
    Vue.component('layout-header', LayoutHeader)
  }
}
