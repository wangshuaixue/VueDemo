<template>
  <div>
    <h2 v-if="firstShow">请输入关键字进行搜索</h2>
    <h2 v-if="loading">正在请求中...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-if="users.length">
      <div class="card"  v-for="(user,index) in users" :key="index" >
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {  //配置对象
    data(){
      return {
        users:[],
        firstShow:true,
        loading:false,
        errorMsg:''
      }
    },

    mounted(){
      PubSub.subscribe('search',(msg,searchName)=>{
        //更新数据状态
        this.loading = true
        this.users = []
        this.errorMsg = ''
        this.firstShow=false
        /*//使用vue-resource发ajax请求
        this.$http.get(`https://api.github.com/search/users?q=${searchName}`)
          .then(result=>{
            const res=result.data
            const users=res.items.map(item=>({
              url:item.html_url,
              name:item.login,
              avatar_url:item.avatar_url
            }))
            this.loading=false
            this.users=users
          })
          .catch(error=>{
            this.loading=false
            this.errorMsg='请求错误'
          })*/

        //使用axios发送ajax请求
        axios.get(`https://api.github.com/search/users?q=${searchName}`)
          .then(result=>{
            const res=result.data
            const users=res.items.map(item=>({
              name:item.login,
              url:item.html_url,
              avatal_url:item.avatal_url
            }))
            this.loading=false
            this.users=users
          })
          .catch(err=>{
            this.loading=false
            this.errorMsg='请求失败2'
          })
      })
    },


  }
</script>
<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
