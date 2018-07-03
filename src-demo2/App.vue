<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader  :addTodo="addTodo"/>-->
      <TodoHeader @addTodo="addTodo"/>
      <!--<List :todos="todos" :deleteItem="deleteItem" />-->
      <List :todos="todos"/>

      <todo-footer >
        <input type="checkbox" v-model="isCheck" slot="check">
        <span slot="count">已完成{{completedCount}} / 全部{{todos.length}} </span>
        <button class="btn btn-danger" v-show="completedCount"  @click="deleteTodo" slot="bn">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import List from './components/List.vue'
  import PubSub from 'pubsub-js'

  import storageUtil  from  './utils/storageUtil'

  export default {  //配置对象

    data(){
      return {  //return返回的数组，可以理解为vm里面的data数据
        todos:storageUtil.readTodos()
      }
    },

    computed:{

      completedCount(){
        return this.todos.reduce((preTo,todo)=> preTo+(todo.completed?1:0),0)
      },

      isCheck:{
        get(){
          return this.completedCount===this.todos.length  && this.completedCount.length>0
        },
        set(value){
          this.selectAll(value)
        }
      },

    },

    mounted(){
      //订阅消息
      PubSub.subscribe('deleteItem',(msg,data)=>{
        this.deleteItem(data)
      })
    },

    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteItem(index){
        this.todos.splice(index,1)
      },
      deleteTodo(){
        this.todos=this.todos.filter(todo=>!todo.completed)
      },
      selectAll(check){
          this.todos.forEach(todo=>todo.completed=check)
      },

    },

    watch:{
      todos:{
        deep:true, //深度监视
        /*handler:function (value) { //todos发生了改变
          //保存todos(Json字符串，它默认保存的是文本)到local
          storageUtil.saveTodos(value)
        }*/
        handler:storageUtil.saveTodos //不能自己调用
        //和上面写法是一样的， 理解为检测的这个回调函数当改变的时候执行，执行时接收到的实参当做形参传给saveTodos这个函数，实参是回调，参数不用手动传
      }
    },

    components:{
      'TodoHeader':Header,
      'TodoFooter':Footer,
      List
    },

  }
</script>
<style scoped="true">
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
