<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos"  :key="index" :index="index" :todo="todo" :deleteItem="deleteItem" />
  </ul>
</template>
<script>
  import Item from './Item.vue'
  export default {  //配置对象
    //声明接收属性
    props:['todos','deleteItem'],   //todos就会成为组件对象的属性
    components:{
      Item
    },
    methods:{

    }
  }
</script>
<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }


</style>

<!--//在组件中的this是组件对象，不是vm，它的功能相当于vm，-->
