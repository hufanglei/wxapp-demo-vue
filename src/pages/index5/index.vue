<template>

  <view class="content">
      <img-border :src="src1"></img-border>
      <img-border :src="src2"></img-border>
  </view>
    
</template>

<script>

// 2.引入自定义组件
import imgBorder from "@/components/img-border"


export default {
  data(){
     return {
        src1:"https://mmbiz.qpic.cn/mmbiz_jpg/ZI5rE7Amia9O7s4PicyUO1aEp5KgoUtYY5z6ThAfx36CoDia2sz6qabd7ozhf1S5UIQ6vqslJIWjHlNj9n7FpbV3g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0",
        src2:"https://mmbiz.qpic.cn/mmbiz_jpg/ZI5rE7Amia9O7s4PicyUO1aEp5KgoUtYY5z6ThAfx36CoDia2sz6qabd7ozhf1S5UIQ6vqslJIWjHlNj9n7FpbV3g/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0"
     }
  },
  // 注册组件
  components:{
    imgBorder
  },
  data() {
    // 1. data 定义数据
    return {
    
    }
  },
  computed:{
  
  },
  onLoad() {},
  methods: {
     
  },
}
</script>


<style lang="scss">

</style>
