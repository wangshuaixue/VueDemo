
// 入口js文件
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'


//注册全局路由
Vue.component(Button.name,Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
