<template>
   <el-container>
     <el-aside class="el-aside "width="200px">
     <el-container >
       <el-header class="jet-system">人人权限系统</el-header>
       <el-main class="jet-menu">
         <div style="padding-left:20px;line-height:350%;text-align:left;width: 100%;height: 50px;background-color: rgb(28 34 38);color(80 99 110)">
           导航菜单</div>
       <Tree></Tree>
       </el-main>
     </el-container >
     </el-aside>

     <el-main class="el-main" style="padding-top: 0px;padding-left: 0px;padding-right: 0px">
       <el-container>
         <el-header class="jet-nav" style="background-color: rgb(82 139 184)">
           <Nav></Nav>
         </el-header >
         <el-main class="jet-main">
           主区域
         </el-main>
       </el-container>
     </el-main>

   </el-container>
</template>

<script>
  import  Nav from './Nav'
  import  Tree from './Tree'
    export default {
        name: "Home",
      components:{
          Nav,
        Tree
      }
    }
</script>

<style scoped>
.jet-system{
  background-color: rgb(74 125 165);
  color: white;
  font-size: 20px;
  line-height: 300%;
}
  .jet-nav{
    background-color: rgb(82 139 184);
    padding:0px;
    padding-top: 2px;
  }
  .jet-menu{
    background-color:  rgb(47 59 64);
    padding: 0px;
  }
  .jet-main{
    background-color: rgb(235 234 232);
  }
</style>
