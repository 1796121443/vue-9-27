<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
    export default {
        name: "TaBle",
      data() {
        return {
          data:[],

          defaultProps: {
           label:"label",
            children:"children"
          }
        }
      },
      beforeCreate(){
          fetch("/static/resouce/menus.json",{method:"GET"})
            .then(resp=>resp.json())
            .then(data=>{
              // this.data=data.data;
            })
            .catch(error=>{
              console.log("下载出错..."+error)
            })
        //测试能不能请求跨域
        //去请求http://jsonplaceholder.typicode.com/users
     //讲这个请求先递给你的服务器localhost
        //再让它发到目的地址这个域
        var url="/api/menu/list?id=1";
        fetch(url,{method:"GET"})
          .then(resp=>resp.json())
          .then(data=>{
            // console.log("数据="+JSON.stringify());
            this.data=data.data;

          })
        //
      },
      methods: {
        handleNodeClick(data) {
          console.log(data);
        }
      }

    };

</script>

<style scoped>

</style>
