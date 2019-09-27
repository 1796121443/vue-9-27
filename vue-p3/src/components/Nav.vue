<template>
  <div class="lisa-top">
  <ul class="lisa-left" style="float: left;">
    <li class="lisa_li"><sapn class="glyphicon glyphicon-menu-hamburger"  ></sapn></li>
    <li><span>欢迎admin</span></li>
  </ul>
  <ul class="lisa-right">
    <li><span class="glyphicon glyphicon-yen"></span>捐赠作者</li>
    <li><span class="glyphicon glyphicon-home"></span>人人开源</li>
    <li><span class="glyphicon glyphicon-lock"></span>修改密码</li>
    <li><span class="glyphicon glyphicon-log-out"></span>退出系统</li>
  </ul>
  </div>
</template>

<script>
    export default {
      name: "Nav",
      data() {


      }
    }

</script>

<style scoped>
  .lisa-top{
display:inline;
    color: white;


  }
  .lisa-left{
    padding-left: 0px;
    line-height: 400%;
  }
.lisa-left li{
  list-style-type: none;
  float: left;
  display: inline;
  padding-left: 10px;
}
  .lisa-right li{
    list-style-type: none;
    display: inline;
    padding: 10px 10px;
  }
  .lisa-right{
    float: right;

  }
</style>
