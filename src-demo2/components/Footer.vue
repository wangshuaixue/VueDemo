<template>
  <div class="todo-footer">
    <label>
      <slot name="check"></slot>
      <!--<input type="checkbox" v-model="isCheck" />-->
    </label>
        <span>
          <slot name="count"></slot>
          <!--<span>已完成{{completedCount}} / 全部{{todos.length}} </span>-->
        </span>
    <slot name="bn"></slot>
    <!--<button class="btn btn-danger" v-show="completedCount"  @click="deleteTodo">清除已完成任务</button>-->
  </div>
</template>
<script>
  export default {  //配置对象
    /*props:{
      /!*todos:Array,
      deleteTodo:Function,
      selectAll:Function*!/
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

    }*/
  }
</script>
<style>

  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
