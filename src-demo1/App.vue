<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addTodo="addTodo" :todos="todos"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
    </div>
  </div>
</template>
<script>

  import Add from './components/Add.vue'
  import List from './components/List.vue'

  export default {  //配置对象

    data(){
      return {  //return返回的数组，可以理解为vm里面的data数据
        todos:[
          {name:'Bob',say:'vue用的多'},
          {name:'Tom',say:'都要好好学'}
        ]
      }
    },

    components:{
      Add,
      List
    },

    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      }

    }
  }
</script>
<style scoped="true">

</style>
