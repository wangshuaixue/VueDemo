<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="ItemCount">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(todo,index) in todos" :todo="todo" :index="index" :key="index" :deleteTodo="deleteTodo"/>
    </ul>
  </div>
</template>
<script>
  import Item from './Item.vue'
  export default {  //配置对象
    props:['todos','deleteTodo'],
    data(){
      return {
        isShow:false
      }
    },
    components:{
      Item
    },
    computed:{
      ItemCount(){
        return this.todos.length>0 ? false : true
      }
    }

  }
</script>
<style>
  /*main*/
  .reply {
    margin-top: 0px;
  }


  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }


  li {
    transition: .5s;
    overflow: hidden;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }
  .user {
    font-size: 22px;
  }

</style>

<!--//在组件中的this是组件对象，不是vm，它的功能相当于vm，-->
