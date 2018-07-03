<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <!--router-link生成路由链接-->
     <li><router-link  class="list-group-item" to="/home/news">News</router-link></li>
     <li><router-link  class="list-group-item" to="/home/message">Message</router-link></li>
    </ul>
    <!--router-view显示当前路由组件-->
    <router-view/>
  </div>

</template>

<script>
  export default {}
</script>

<style>

</style>
