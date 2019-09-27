<template>

      <div class="d1">
        <div class="d2">
          <ul>
            <li style="list-style-type: none">基本信息</li>
          </ul>
        </div>
        <div class="d3">
          <h2>  项目介绍</h2>
          <ul>
            <li>采用Spring、MyBatis、Shiro框架，开发的一套权限系统，极低门槛，拿来即用。</li>
            <li> 设计之初，就非常注重安全性，为企业系统保驾护航，让一切都变得如此简单。</li>
            <li> 提供了代码生成器，只需编写30%左右代码，其余的代码交给系统自动生成，可快速完成开发任务</li>
            <li>推荐使用阿里云服务器部署项目，免费领取阿里云优惠券，请点击<a href="#">【免费领取】</a></li>
          </ul>
          <h2>获取帮助</h2>
          <ul>
            <li>Git地址：<a href="#">https://gitee.com/renrenio/renren-security</a></li>
            <li>  官方社区：<a href="#">https://www.renren.io/community</a></li>
            <li>如需关注项目最新动态，请Watch、Star项目，同时也是对项目最好的支持</li>
          </ul>
          <h2>官方QQ群</h2>
          <ul>
            <li>高级群：324780204(大牛云集，跟大牛学习新技能)</li>
            <li> 普通群：145799952(学习交流，互相解答各种疑问)</li>
          </ul>

        </div>
        </div>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped>
  .d1{
    background-color: #d4d4d4;
    margin-top: 50px;
    height: 600px;
    border: 1px solid white;
    border-radius: 10px;

  }
  .d2{
    background-color: #b4bccc;
    height: 40px;
    font-size: 15px;
    line-height: 300%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
.d3{
  text-align: left;
}
</style>
