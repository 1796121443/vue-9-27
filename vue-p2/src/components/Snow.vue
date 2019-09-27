<template>
  <div id="body">
 <div class="xh">
 </div>
 <div class="xh1">
 </div>
  </div>
</template>

<script>
  export default{
    name:"Snow"
    }
 const minSize = 5; //最小字体
  const maxSize = 50;//最大字体
  const newOne = 400; //生成雪花间隔
  const flakColor = "#000f"; //雪花颜色
  const flak1 = $(".xh").css({position:"absolute","top":"0px",color:"pink"}).html('💖 💗 ');//定义一个雪花
   // const flak2 = $(".xh1").css({position:"absolute","top":"0px"}).html('李现的💕');//定义一个雪花
  const dHight = $(window).height(); //定义视图高度
  const dWidth =$(window).width(); //定义视图宽度

  setInterval(function(){/*setInterval(code,millisec)按照指定的周millisec期)（以毫秒计）来调用函数或计算表达式(code)*/
    const sizeFlak = minSize+Math.random()*maxSize; //产生大小不等的雪花
    const startLeft = Math.random()*dWidth; //雪花生成是随机的left值
    const startOpcity = 0.7+Math.random()*0.3; //随机透明度
    // const endpositionTop= dhight-100; //雪花停止top的位置
    const endLeft= Math.random()*dWidth; //雪花停止的随机left位置
    const durationfull = 5000+Math.random()*3000; //雪花飘落速度不同


 	flak1.clone().appendTo($("body"))
 	.css({
     "left":startLeft ,
     "opacity":startOpcity,
     "font-size":sizeFlak,
     "color":flakColor
    })
 	.animate({
     "top":'100%',
     "left":endLeft,
     "opacity":0.1
    },durationfull
 	// ,function(){
 //     $(this).remove()
 //    }//移除生成的雪花,因为雪花飘到底,所以可不要
 	);
   },newOne);
</script>

<style scoped>

</style>
