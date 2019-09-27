<template>
  <div>
    
    <div class="panel panel-default">
      <div v-bind:key="stu.id" v-for="stu in students" class="panel-heading">{{stu.name}}</div>

    </div>
  </div>
</template>

<script>
  export default{
    name:"JetP",
//step3:子组件以students接收父组件数据
    props:["students"]
  }
</script>

<style>
</style>
