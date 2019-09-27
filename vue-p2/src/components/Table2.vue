<template>
  <div>
    <div class="container-fluid">
<div class="row">
  <div v-for="photo in photos" v-bind:key="photo.id" class="col-lg-3 photoRect"  >
    <img :src="photo.url"/>
  </div>
</div>
</div>
  </div>
</template>

<script>
  export default{
    name:"Table2",
    data(){
      return{
        photos:[],
      }
      },


      created(){
        window.Table2=this;
        $.getJSON("../../static/resouce/photos.json",function(data){
          var photoArray=eval(data);//将json文本转成数据
          console.log(data);
          Table2.photos=photoArray;
          });
    }
  }
</script>

<style scoped>
.photoRect{
  margin: 20px;
}
</style>
