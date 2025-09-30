<template>
    <image
        class="img-border"
        :src="src"
        mode="scaleToFill"
    />
</template>

<script>

export default {
    props: {
        src: String
    }
}
</script>

<style>
.img-border{
    border-radius: 50%;
}
</style>