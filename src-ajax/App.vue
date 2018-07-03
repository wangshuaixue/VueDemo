<template>
  <div class="container">
      <Search/>
      <Main/>

  </div>
</template>
<script>

  import Main from './components/Main.vue'
  import Search from './components/Search.vue'


  export default {  //配置对象
    components:{
      Main,
      Search
    }
  }


</script>
<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
