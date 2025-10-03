<template>
    <image
        @click="handleClick"
        class="img-border"
        :src="src"
        mode="scaleToFill"
    />
</template>

<script>

export default {
    props: {
        src: String
    },
    methods:{
        handleClick(){
          console.log("超人救人的时候为什么都要穿紧身衣？救人要紧")  
          // 子向父传递数据
          this.$emit("srcChange", this.src)
        }
    }
}
</script>

<style>
.img-border{
    border-radius: 50%;
}
</style>