<template>

<div>

  <el-row class="tac">

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>


    <el-col :span="4">

    <el-menu

      default-active="2"

      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-submenu index="1">
          <template slot="title">

            <span id="s1"class="glyphicon glyphicon-cog ">系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" v-bind:key="menu.id" v-for="menu in menus"  >
              <a  :class="classChange(menu.id)" href="#">{{menu.name}}</a></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>

<!--<ul id="u1" class="nav flex-column text-left">-->
<!--      <li class=" nav-item dropdown">-->
<!--        <a id="a1" class=" menua1 " data-toggle="dropdown" href="#"><i class="glyphicon glyphicon-cog " ></i>系统管理</a>-->
<!--        <ul class=" dropdown-menu menuul1">-->
<!--          <li class="nav-item dropdown-item" v-bind:key="menu.id" v-for="menu in menus">-->
<!--            <a id="a2" :class="classChange(menu.id)" href="#">{{menu.name}}</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </li>-->
<!--    </ul>-->
</div>

</template>

<script>
 export default{
   name:"Menu",
   data(){
     return{
       menus:[],
       activeIndex: '1',
       activeIndex2: '1'
     }
   },
   methods: {
     classChange(key) {
       const classArrary = ["glyphicon glyphicon-user", "glyphicon glyphicon-time",
                            "glyphicon glyphicon-file", "glyphicon glyphicon-th",
                            "glyphicon glyphicon-inbox", "glyphicon glyphicon-repeat",
                            "glyphicon glyphicon-barcode", "glyphicon glyphicon-camera",
                           "glyphicon glyphicon-book" , "glyphicon glyphicon-print" ];
       var cls=classArrary[(classArrary.length)-key];
       return cls;

     },
     handleOpen(key, keyPath) {
       console.log(key, keyPath);
     }

   },
   created(){
     window.Menu=this;//this代表vue组件自己，将自己挂载到全局window上
     //下载json文件得到的json格式，data是json格式数据
     $.getJSON("../../static/resouce/menus.json",function(data){
       console.log("收到数据"+data);
       var menuArray=eval(data);//将json文本转成数据
       Menu.menus=menuArray;//把下载下来的menu对象(s是一个数组)

     });
   }
 }
</script>

<style scoped>
#p1{
  background-color: black;
  width: 273px;
  height: 30px;
  margin-bottom: 0px;
}
template>span{
  color: black;
}
#s1{
  color:black;
}
/*  #a1{*/
/*    background: #5e5e5e;*/
/*    width: 200px;*/
/*    color: black;*/
/*  }*/
/*#a2{*/
/*  background: #8c8c8c;*/
/*  width: 200px;*/

/*}*/
</style>
