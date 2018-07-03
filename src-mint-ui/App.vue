<template>
  <mt-button type="primary" @click.native="handleClick">测试mint-ui组件库</mt-button>
</template>
<script>
  import {Toast} from 'mint-ui'
  import MtButton from "../node_modules/mint-ui/packages/button/src/button.vue";

  export default {  //配置对象
    components: {
      MtButton
    },
    methods:{
      handleClick(){
        Toast({
          message:'提示信息',
          position:'bottom', //只有三个选项上中下，默认是middle
          duration:5000   //5s
        });
      },
      handlerClick(){
        Toast({
          message:'message提示',
          position:'bottom',
          duration:3000
        })
      }
    }
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
