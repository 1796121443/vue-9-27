<template>
  <div id="app">

    <Home></Home>
<!--    <TreeList></TreeList>-->
<!--    <TableList></TableList>-->
<!--    <TaBle></TaBle>-->
  </div>
</template>

<script>


import Home from './components/Home'
// import  TaBle from "./components/TaBle"
import  JetTable from "./components/JetTable"
export default {
  name: 'App',
  // 局部注册
  components: {


    Home,
    // TaBle
    JetTable
  },
  data(){
    return{
      studentList:[
        {id:1,name:"tom"},
        {id:2,name:"eom"},
        {id:3,name:"rom"}

        ],
        // users:[]
        photo:[]
    }
  }
   //created 方法会在本组件创建之后自动回调
    // created(){
      // $.getJSON("../static/resouce/users.json", function(data){
      //   //jsonge格式转成jQuery对象
      //   this.users = eval(data);
      //   console.log("收到数据");
      //   console.log(data);
      // });
      // $.getJSON("../static/resouce/photos.json", function(data){
      //   //jsonge格式转成jQuery对象
      //   this.photos = eval(data);
      //   console.log("收到数据");
      //   console.log(data);
      // });
// }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
