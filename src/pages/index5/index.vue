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
        src1: "https://jingke-project.wiseinsightai.com/main-banner.png",
        src2:"https://jingke-project.wiseinsightai.com/main-banner.png"
     }
  },
  // 注册组件
  components:{
    imgBorder
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
