<template>
    <ul class="jet-treenode" >
      <li v-bind:class="classObject" >
        <span class="glyphicon glyphicon-star-empty"></span>
        <span style="margin-left: 5px">{{menu.label}}</span>
       <span>级别{{level}}</span>
        <span v-on:click="menuClick" v-if="!menu.isLeaf" :class="expandIcon" style="float: right"></span>
      </li>
      <li v-if="expand">
      <tree-node v-bind:level="level+1" v-bind:menu="m" v-for="m in menu.children" v-bind:key="m.id"></tree-node>
      </li>
    </ul>
</template>

<script>
    export default {
      name: "TreeNode",
      props: ["menu", "level","parent"],
      data(){
        return {
          expand:false//这个变量决定本菜单的子菜单是否渲染
        }
      },
      computed:{
        showObject:function(){
          return  this.level==1||parent.isExpand;
        },
        classObject:function () {
       return {
         'jet-li-label':true,
         'jet-li-level1':this.level==1,
         'jet-li-level2':this.level==2,
         'jet-li-level3':this.level==3
       }
        },
        expandIcon:function (){
          return {
            "glyphicon glyphicon-menu-left":this.expand==false,
            "glyphicon glyphicon-menu-down":this.expand
          }
        }
      },
      methods:{
        menuClick(){
        this.expand=!this.expand;
        }
      }
    }

</script>

<style scoped>
ul{

  list-style-type: none;
  text-align: left;
  background-color: red;
}
  li{
    padding-left: 0px;
  }
  .jet-treenode{
padding-left: 0px;
  }
  .jet-li-label{
    margin: 0px;
    padding: 5px;
    font-size:15px;
    background-color: rgb(47 59 64);
    color: white;
  }
  .jet-li-level1{
    background-color:rgb(32 40 44);
  }
.jet-li-level2{
  background-color: rgb(47 59 64);
}
.jet-li-level3{
  background-color:rgb(47 89 90);
}
</style>
