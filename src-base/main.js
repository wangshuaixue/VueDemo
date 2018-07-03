
// 入口js文件
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*加这个注释的意思是不做no-new这个检查*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
