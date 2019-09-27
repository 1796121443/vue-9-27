<template>
    <el-container>
      <el-aside class="el-aside">
        <el-container>
          <el-header class="jet-system">人人权限系统</el-header>
          <el-main class="jet-menu">
            <div style="padding-left:20px;line-height:350%;
            text-align:left;width: 100%;height: 50px;
            background-color: rgb(28 34 38);color(80 99 110)">
            导航菜单
            </div>
<!--            <Tree></Tree>-->
<!--<TaBle></TaBle>-->
            <JetTable></JetTable>
          </el-main>
        </el-container>
      </el-aside>

      <el-main class="el-main" style="padding-top: 0px;padding-left: 0px">
        <el-container>
          <el-header class="jet-nav">
            <Nav></Nav>
          </el-header>
          <el-main class="jet-main">
          <Main></Main>
          <Message></Message>

          </el-main>
        </el-container>
      </el-main>
    </el-container>
</template>

<script>
  import Nav from './Nav.vue'
  // import Tree from './Tree.vue'
  import Main from "./Main";
  import Message from "./Message";
  // import TaBle from "./TaBle";
  import JetTable from "./JetTable";
    export default {
      name: "Home",
      components: {
        JetTable,
        // TaBle,
        Message,
        Main,
        Nav
        // Tree
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

  .jet-menu{
padding: 0px;
  }
  .el-main{
    margin-top:0px;
  }
  .jet-nav{
    background-color: #3a8ee6;
  }
  /*.jet-main{*/
  /*  background-color: #d4d4d4;*/
  /*}*/

</style>
