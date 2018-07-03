<template>
  <li :style="{backgroundColor:bgColor}"  @mouseenter="handlerShow(true)" @mouseleave="handlerShow(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem(index)">删除</button>
  </li>

</template>
<script>
  import PubSub from 'pubsub-js'
  export default {  //配置对象
    //声明接收属性
    props:{
      todo:Object, //说明了属性名和属性值的类型，中等复杂度
//      deleteItem:Function,
      index:Number
    },
    data(){
      return{
        bgColor:'#ffffff',
        isShow:false
      }
    },
    methods:{
      handlerShow(isEnter){
        if(isEnter){
          this.bgColor='#cccccc'
          this.isShow=true
        }else{
          this.bgColor='#fff'
          this.isShow=false
        }
      },
      deleteItem(){
        //发布消息
        PubSub.publish('deleteItem',this.index)
      }
    }
  }
</script>
<style scoped="true">
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
