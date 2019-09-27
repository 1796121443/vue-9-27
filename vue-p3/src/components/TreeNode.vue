<template>

  <ul class="lisa-treenode" style="margin-left: -40px">
    <li  v-bind:class="classObject" >
      <span :class="classChange(menu.id)"></span>
      <span style="margin-left: 5px ;padding-left:0px">{{menu.label}}</span>
      <span v-on:click="menuClick" v-if="!menu.isLeaf" :class="expandIcon" style="float: right"></span>
    </li>
    <li v-if="expand" style="margin-left: 40px">
      <tree-node v-bind:level="level+1" v-bind:menu="m" v-for="m in menu.children" v-bind:key="m.id"></tree-node>
    </li>
  </ul>

</template>

<script>
    export default {
      name: "TreeNode",
      props: ["menu", "level", "parent"],
      data() {
        return {
          expand: false
        }
      },
      computed: {
        showObject: function () {
          return this.level == 1 || parent.isExpand;
        },
        classObject: function () {
          return {
            'jet-li-label': true,
            'jet-li-level1': this.level == 1,
            'jet-li-level2': this.level == 2,
            'jet-li-level3': this.level == 3
          }
        },
        expandIcon: function () {
          return {
            "glyphicon glyphicon-menu-left": this.expand == false,
            "glyphicon glyphicon-menu-down": this.expand
          }
        }
      },
      methods: {
        classChange(key) {
          const classArrary = ["glyphicon glyphicon-user", "glyphicon glyphicon-time",
            "glyphicon glyphicon-file", "glyphicon glyphicon-th",
            "glyphicon glyphicon-inbox", "glyphicon glyphicon-repeat",
            "glyphicon glyphicon-barcode", "glyphicon glyphicon-camera",
            "glyphicon glyphicon-book", "glyphicon glyphicon-print","glyphicon glyphicon-cog"];
          var cls = classArrary[(classArrary.length) - key];
          return cls;


        },
        menuClick() {
          this.expand = !this.expand;
        }
      }
    }
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: left;
    background-color:  rgb(47 59 64);
    padding-left: 0px;


  }
  li{
    /*padding-left: 0px;*/
   padding: 0px;
    margin: 0px;
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
