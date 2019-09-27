<template>
  <div>
   <table class="table table-hover" border="1px" >
     <thead>
       <tr>
         <th>姓名</th>
         <th>用户名</th>
         <th>邮箱</th>
         <th>地址</th>
       </tr>
     </thead>
     <tbody>
 <tr :class="classChange(user.id)" v-for="user in users" v-bind:key="user.id"  >
<td>{{user.name}}</td>
<td>{{user.username}}</td>
<td>{{user.email}}</td>
<td>{{user.address}}</td>
</tr>
</tbody>
   </table>
  </div>
</template>

<script>
  export default{
    name:'Table',
     data(){
       return{
         users:[],

       }
     },
     methods:{
       classChange(key){
         const classArray=["active","info","success","warning","danger"];
         var cls= classArray[key%classArray.length];
         return cls;
   //       if(key%2==0)return "gray";
   //       else return "lightGray";

   }
     },
     //create生命周期回调函数,在本组件创建之后自动回调
     created(){
       window.Table=this;//this代表vue组件自己，将自己挂载到全局window上
       //下载json文件得到的json格式，data是json格式数据
       $.getJSON("../../static/resouce/users.json",function(data){
         // console.log(data.constructor);
         var userArray=eval(data);//将json文本转成数据
         Table.users=userArray;//把下载下来的user对象(s是一个数组)

       });
     }
  }
</script>

<style scoped>
.gray{
  background-color: grey;
}
.lightGray{
  background-color: gainsboro;
}
tr>th{
   text-align: center;
}
</style>
