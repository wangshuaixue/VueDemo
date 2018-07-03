
// 入口js文件
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//声明使用插件
Vue.use(VueResource)   //声明的结果，所有的组件对象都多了一个属性，$http(对象,有两个方法)  //this.$http是一个对象对象有get和post方法


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
