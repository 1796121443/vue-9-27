<template>
  <div id="app">
   <!-- <jet-nav></jet-nav> -->
   <!-- <Form></Form> -->
 <!-- <JetTab></JetTab> -->
  <!-- <JetP v-bind:students="studentList"></JetP>
   -->
  <!-- <Table></Table> -->
<!--   <Table2></Table2>-->
<!--    <Snow> </Snow>-->
   <Menu></Menu>
<!--    <HelloWorld></HelloWorld>-->
<!--    <Home></Home>-->
  </div>
</template>

<script>
 import JetNav from './components/JetNav.vue'
// import Form from './components/Form.vue'
import JetP from './components/JetP.vue'
import Table from './components/Table.vue'
import Table2 from './components/Table2.vue'
import Snow from './components/Snow.vue'
import Menu from './components/Menu.vue'
 import  HelloWorld from './components/HelloWorld'
import Home from './components/Home'
export default {
  name: 'App',
  // 局部注册
  components: {
   JetNav,
   JetP,
   Table,
   Table2,
   Snow,
   Menu,
    HelloWorld,
    Home
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
