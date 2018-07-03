<template>
  <div>
    <div>
      <ul>
        <li v-for="(item,index) in messages" :key="index">
          <router-link :to="`/home/message/detail/${item.id}`">{{item.title}}</router-link>
          <button @click="pushShow(item.id)">push</button>
          <button @click="replaceShow(item.id)">replace</button>
        </li>
      </ul>
      <button @click="$router.back()">回退</button>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
       messages:[]
      }
    },
    mounted(){
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 5, title: 'message005'}
        ]
        this.messages = messages
      }, 1000)
    },
    methods:{
      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      },
      pushShow(id){
        this.$router.push(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
