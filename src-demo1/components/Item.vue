<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteComment">删除</a>
    </div>
    <p class="user"><span >{{todo.name}}</span><span>说:</span></p>
    <p class="centence">{{todo.say}}</p>
  </li>

</template>
<script>
  export default {  //配置对象
    //声明接收属性
    props:['todo','index','deleteTodo'],

    methods:{
      deleteComment(){
        const index=this.index
        this.deleteTodo(index)
      }
    }
  }
</script>
<style scoped="true">
  /*item*/
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
