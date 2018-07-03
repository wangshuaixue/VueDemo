<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search"  v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    data(){
      return {
        searchName:''
      }
    },
    methods:{
      //点击搜索  发布消息，然后订阅消息的位置发送请求
      search(){
        const searchName=this.searchName.trim()
        if(searchName){

          PubSub.publish('search',searchName)
        }
        this.searchName=''
      }
    }

  }
</script>

<style>

</style>
