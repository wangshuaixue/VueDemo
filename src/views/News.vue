<template>
  <div>
    <ul>
      <li v-for="(item, index) in news" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        news:['news001','news002','news003']
      }

    }
  }
</script>

<style>

</style>
