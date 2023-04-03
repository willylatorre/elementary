<script setup>

const images = {
    "1": '/img/dnd1.jpg',
    "2": '/img/dnd2.jpg',
    "3": '/img/dnd3.jpg',
    "4": '/img/dnd4.jpg',
    "5": '/img/dnd5.jpg',
    "6": '/img/dnd6.jpg',
    "7": '/img/dnd7.jpg',
    "8": '/img/dnd8.jpg'
}

const props = defineProps({
    container: Number,
    accept: Array,
    tags: Array,
    onDrop: {
        type: Function,
        default: () => ({})
    },
})


</script>

<template>
    <div role="Dustbin" class="bin" :style="{
        backgroundImage: `url(${images[props.container]})`
    }">
    </div>
</template>

<style lang="scss" scoped>
.bin {
    height: 250px;
    width: 250px;
    max-width: 100%;
    aspect-ratio: 1/1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
</style>