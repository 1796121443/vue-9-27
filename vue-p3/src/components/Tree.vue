<template>
  <div class="tree-top">
  <ul class="lisa-tree-level">
    <TreeNode v-bind:level="1" v-bind:menu="menu"  v-for="menu in menus"> </TreeNode>
  </ul>
  </div>
</template>
<script>
  import TreeNode from './TreeNode'
    export default {
      name: "Tree",
      components:{
        TreeNode
      },
      data() {
        return {
          menus: []
        }
      },

      beforeCreate() {
        fetch("/static/resouce/menus.json", {})
          .then(resp => {
            return resp.json();
          })
          .then(jsonObject => {
            this.menus = jsonObject.data;
          })
          .catch(error => {
            alert("数据下载失败...")
          })
      }
    }
</script>

<style scoped>
.lisa-tree-level{
  background-color:rgb(47 59 64);
}
.tree-top{
  background-color: rgb(47 59 64);
  height: 700px;
}
</style>
