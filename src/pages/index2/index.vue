<template>
 <view class="content">
		<view class="rpx">rpx</view>
		<view class="VW">vw</view>
		<view class="sass">sass</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  methods: {},
}
</script>


<style lang="scss">
/*rpx 小程序中的单位 750rpx = 屏幕的宽度 */
.rpx {
	width: 750px;
	height: 100px;
	background-color: aqua;
}
/*vw h5单位 100vw = 屏幕的宽度100vh=屏幕的高度半**/
.VW {
   width: 50vw;
   height: 100px;
   background-color: tan;
}

.content {
  .sass{
     background-color: red;
     color: $uni-color-primary;
  }
}


</style>
