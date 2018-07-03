/*
数据保存的模块     考虑1.暴露的是函数还是对象，看是需要多个功能，还是需要一个功能
* */

const TODOS_KEY='todos_key'
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },
  
  readTodos(){
  return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')  //这里不能直接写空数组，因为要用json转为串
  }
}
