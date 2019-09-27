<template>
  <div class="jet-nav-top">
    <ul style="background-color:rgb(82 139 184);float:left;padding-left: 0px;line-height: 300%;width: 100%">
      <li><a href="#" ><span class="glyphicon glyphicon-menu-hamburger"style="color: white"></span></a></li>
      <li><span>欢迎admin</span></li>
      <ul class="jet-nav-right-items-group">
        <li  class="glyphicon glyphicon-yen">捐赠作者</li>
        <li><sapn class="glyphicon glyphicon-home">人人开源</sapn></li>
        <li><span class="glyphicon glyphicon-lock"></span>修改密码</li>
        <li><span class="glyphicon glyphicon-log-out"></span>退出系统</li>
      </ul>
    </ul>
  </div>

</template>

<script>
    export default {
      name: "Nav",
    }
</script>

<style scoped>

.jet-nav-top{
background-color: green;
  font-size:20px;
  color: white;
}
.jet-nav-top ul{
  list-style-type: none;
}
.jet-nav-top ul,li{
  display:inline ;
}
.jet-nav-top>ul>li{
  float: left;
}
li{
  margin-left: 10px;
}
  .jet-nav-right-items-group{
float: right;
  }
.jet-nav-right-items-group>li{
  padding-left:10px ;
  padding-right: 10px;
}
</style>
