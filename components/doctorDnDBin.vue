<script setup>
import { useDrop } from 'vue3-dnd'

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

const [collect, drop] = useDrop(() => ({
    accept: 'box',
    drop: (item, monitor) => {
        console.log(item)
        props.onDrop(item, monitor)
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
}))


</script>

<template>
    <div :ref="drop" role="Dustbin" class="bin" :style="{
        backgroundImage: `url(${images[props.container]})`,
        opacity: collect.isOver ? 0.5 : 1,
    }">

        <div class="p-4">
            <el-tag v-for="tag in tags" :key="tag.name" :type="tag.category === '1' ? 'danger' : 'success'">
                {{ tag.name }}
            </el-tag>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bin {
    height: 180px;
    width: 190px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
</style>