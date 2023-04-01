<script  setup>
import { useDrag } from 'vue3-dnd'

const props = defineProps({
    id: String,
    name: String,
    type: String,
    category: String,
    isDropped: Boolean,
})

const [collect, drag] = useDrag(() => ({
    type: props.type,
    item: { name: props.name, category: props.category, id: props.id },
    collect: monitor => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
    }),
}))

</script>
<template>
    <div :ref="drag" role="Box" class="cursor float-left p-1 rounded">
        <el-tag :type="props.category === '1' ? 'danger' : 'success'">
            {{ props.name }}
        </el-tag>
    </div>
</template>