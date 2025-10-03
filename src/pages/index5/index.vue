<template>

  <view class="content">
    <view>
      子组件传递过来的路径： {{ src }}
    </view>
    <img-border @srcChange="handleChange"  :src="src1"></img-border>
    <img-border  @srcChange="handleChange" :src="src2"></img-border>
  </view>

</template>

<script>

// 2.引入自定义组件
import imgBorder from "@/components/img-border"

export default {
  data(){
    return {
      src: "",
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
  mounted() {
    console.log(this.baseurl)
    console.log(this.xxx)
    // // 获取globaldata数据
    // const app = getApp()
    // console.log('app实例:', app)
    // console.log('globalData:', app.globalData)

  },
  methods: {
    handleChange(e){
      // console.log("父组件自定义事件被触发了");
      console.log(e)
      this.src = e
    },

  },
}
</script>


<style lang="scss">

</style>
