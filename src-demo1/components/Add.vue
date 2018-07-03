<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名"  v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="say"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="submitTodo">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
 export default {
    props:['addTodo','todos'],
   data(){
      return {
        name:'',
        say:''
      }
   },
   methods:{
     submitTodo(){
       const inputName=this.name.trim()
       const text=this.say.trim()
       if (!inputName || !text){
         return
       }

       const todo={name:inputName,say:text}
       console.log(todo)

       this.addTodo(todo)
       this.name=''
       this.say=''
     }
   }
 }
</script>
<style scoped="true">


</style>
