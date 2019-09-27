<template>
    <el-tree
      :data="data"  :props="defaultProps"
             @node-click="handleNodeClick"></el-tree>



</template>

<script>
    export default {
      name: "JetTable",
      data() {
        return {
          data: [],

          defaultProps: {
            label: "label",
            children: "children"
          }
        }
      },
       beforeCreate() {
        fetch("/static/resouce/menus.json",{method:"GET"})
          .then(resp=>resp.json())
          .then(data=>{
            this.data=data.data;
          })
          .catch(error=>{
            alert("下载数据出错..."+error)
          })
      //    var url="/api/menu/list?id=1";
      //    fetch(url,{method:"GET"})
      //      .then(resp=>resp.json())
      //      .then(data=>{
      //        // console.log("数据="+JSON.stringify());
      //        this.data=data.data;
      //      })
      },
      methods: {
        handleNodeClick(data) {
          console.log(data);
        },
        //   loadLevel(node, resolve) {
        //     var id;
        //     if (node.level == 0) {
        //       id = 0
        //     } else {
        //       id = node.data.id;
        //     }
        //     var url = "/api/menu/list?id=" + id;
        //     fetch(url, {method: "GET"})
        //       .then(resp => resp.json())
        //       .then(data => {
        //         console.log("data=" + JSON.stringify(data))
        //         return resolve(data.data);//resolve是一个传进来的函数，执行会返回一个承诺对象
        //       })
        //   }
        // }
      }
    }
</script>

<style scoped>

</style>
