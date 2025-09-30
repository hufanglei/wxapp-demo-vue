<template>
 <view class="content">
   <!-- 2.使用数据 -->
    <view>{{ msg }}</view>
    <view>{{ money }}</view>
    <view>{{ isRich }}</view>
    <view>{{ person.name }}</view>
    <view>{{ person.skill }}</view>
    <!-- <view>{{ money }}</view>
    <view>{{ money }}</view> -->

    <!-- 标签上 通过属性方式使用数据 -->
    <view :data-color="color">color</view>
    <view>===</view>
    <view>
        <view 
        v-for="(item, index) in list"
        :key="item.id"
        >
          {{ item.id }} -- {{ item.text }} -- {{ index }}
        </view>
    </view>
      
    <view>--------------</view>
    <view>
      <view v-if="true">显示</view>
      <view v-if="isShow">显示或隐藏</view>
      <view v-show="false">v-show</view>
    </view>

    <view> ¥ {{ money }}</view>
    <view> {{ cnMoney }}</view>

    <view>
       <view
       v-for="item in filterList"
       :key="item.id"
       >
        {{ item.text }}
       </view>
    </view> 

      <view>
       <view
       v-for="item in processList"
       :key="item.id"
       >
        {{ item.text }} -- {{ item.color }}
       </view>
    </view> 


    </view>
    
</template>

<script>
export default {
  data() {
    // 1. data 定义数据
    return {
      //存放数据
      msg: '黑马程序员-广州中心',
      // 数字
      money: 10000,
      // bool类型
      isRich: false,
      // 对象
      person: {
        name:"孙悟空",
        skill:"72变"
      },
      color: "aqua",
      // list数组
      list:[
        {
          id:0,
          text:"苹果"
        },
        {
          id: 1,
          text:"香蕉"
        },
        {
          id:2,
          text:"樱桃"
        }
      ],
      isShow: true
    }
  },
  computed:{
    cnMoney(){
      return "¥" + this.money
    },
    // 过滤数组
    filterList(){
      return this.list.filter(v=>v.id>=0)
    },
    // 加工
    processList(){
      return this.list.map(v => {
        v.color = "red";
        return v;
      });
    }
  },
  onLoad() {},
  methods: {},
}
</script>


<style lang="scss">

</style>
