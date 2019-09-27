<template>
  <el-tree show-checkbox lazy :load="loadOneLevelMenus"
           :props="defaultProps" @node-click="handleNodeClick">

  </el-tree>
</template>

<script>
    export default {
        name: "TaBle",
      data() {
        return {
          defaultProps: {
           label:"label",
            children:"children"
          }
        }
      },
      beforeCreate(){
          // fetch("/static/resouce/menus.json",{method:"GET"})
          //   .then(resp=>resp.json())
          //   .then(data=>{
          //     // this.data=data.data;
          //   })
          //   .catch(error=>{
          //     console.log("下载出错..."+error)
          //   })


        //测试能不能请求跨域
        //去请求http://jsonplaceholder.typicode.com/users
     //讲这个请求先递给你的服务器localhost
        //再让它发到目的地址这个域
        // var url="/api/menu/list?id=1";
        // fetch(url,{method:"GET"})
        //   .then(resp=>resp.json())
        //   .then(data=>{
        //     // console.log("数据="+JSON.stringify());
        //     this.data=data.data;
        //
        //   })

      },
      methods: {
        handleNodeClick(data) {
          console.log(data);
        },

        loadOneLevelMenus(node,resolve){
          var id;
          //要加在顶级菜单
          if(node.level==0){
            id=0
          }else{
            id =node.data.id;
          }
      var url="/api/menu/list?id="+id;
        fetch(url,{method:"GET"})
          .then(resp=>resp.json())
          .then(data=>{
            console.log("data="+JSON.stringify(data))
           return resolve(data.data);//resolve是一个传进来的函数，执行会返回一个承诺对象
          })
        }
      }
    };

</script>

<style scoped>

</style>
