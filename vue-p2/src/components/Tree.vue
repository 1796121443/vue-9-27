<template>
    <ul class="jet-tree-level">
<TreeNode v-bind:level="1" v-bind:menu="menu"  v-for="menu in menus"></TreeNode>
    </ul>
</template>

<script>
  import TreeNode from './TreeNode'
    export default {
        name: "Tree",
      components:{
          TreeNode
      },
      data(){
          return{
            menus:[]
        }
      },
      beforeCreate(){

   //       const promise= fetch ("/static/resouce/menus.json",{});
   // //承诺兑现时调then
   //       const promise2=  promise.then(resp=>{
   //     console.log("resp="+resp);
   //    var jsonObject= resp.json();
   //    console.log("jsonObject="+jsonObject);
   //   return jsonObject;
   //   });
   // //第一个承诺失败时执行，传入error
   // promise.catch(error=>{
   //   console.log("第一个承诺失败，数据没下下来")
   // })
   //
   // promise2.then(jsonObject=>{
   //  var jsonText= JSON.stringify(jsonObject);
   //  console.log("jsonText="+jsonText);
   // })
//链式调用
fetch("/static/resouce/menus.json",{})
  .then(resp=>{
    return resp.json();
  })
  .then(jsonObject=>{
    this.menus=jsonObject.data;
  })
  .catch(error=>{
    alert("数据下载失败...")
  })
      }
    }
</script>

<style scoped>
.jet-tree-level{

}
  ul{
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
  }
</style>
