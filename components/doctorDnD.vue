
<script  setup>
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import Dustbin from './doctorDnDBin.vue'
import Box from './doctorDnDBox.vue'

const { isMobileOrTablet } = useDevice();

const dustbins = ref([
    { accepts: 'box', id: 1, tags: [], answers: ['9', '11', '3'] },
    { accepts: 'box', id: 2, tags: [], answers: ['15', '9', '6'] },
    { accepts: 'box', id: 3, tags: [], answers: ['7', '10', '13'] },
    { accepts: 'box', id: 4, tags: [], answers: ['13', '10', '1'] },
    { accepts: 'box', id: 5, tags: [], answers: ['5', '16', '9'] },
    { accepts: 'box', id: 6, tags: [], answers: ['4', '10', '13'] },
    { accepts: 'box', id: 7, tags: [], answers: ['12', '11', '2'] },
    { accepts: 'box', id: 8, tags: [], answers: ['14', '15', '8'] },
])

const boxes = ref([
    { name: 'Me duele la tripa', id: '1', type: 'box', category: '1' },
    { name: 'Tengo mocos y estornudos', id: '2', type: 'box', category: '1' },
    { name: 'Tengo tos', id: '3', type: 'box', category: '1' },
    { name: 'Tengo diarrea', id: '4', type: 'box', category: '1' },
    { name: 'Me duele la garganta', id: '5', type: 'box', category: '1' },
    { name: 'Tengo fiebre', id: '6', type: 'box', category: '1' },
    { name: 'Quiero vomitar', id: '7', type: 'box', category: '1' },
    { name: 'Me duele la cabeza', id: '8', type: 'box', category: '1' },

    { name: 'Gripe', id: '9', type: 'box', category: '2' },
    { name: 'Gastroentiritis', id: '10', type: 'box', category: '2' },
    { name: 'Catarro', id: '11', type: 'box', category: '2' },
    { name: 'Alergia', id: '12', type: 'box', category: '2' },
    { name: 'Intoxiación', id: '13', type: 'box', category: '2' },
    { name: 'Migraña', id: '14', type: 'box', category: '2' },
    { name: 'COVID', id: '15', type: 'box', category: '2' },
    { name: 'Anginas', id: '16', type: 'box', category: '2' },
])


const handleDrop = (id, item) => {
    const bin = dustbins.value.find(b => b.id === id)
    if (bin.answers.includes(item.id)) {
        bin.tags.push(item)
    }
}

const correctAnswers = computed(() => {
    return dustbins.value.reduce((acc, bin) => {
        return acc + bin.answers.filter(a => bin.tags.map(t => t.id).includes(a))?.length
    }, 0)
})

</script>

<template>
    <div class="mt-6">
        <template v-if="isMobileOrTablet">
            <DndProvider :backend="HTML5Backend" key="html45">
                <div class="flex">
                    <div class="flex-1">
                        <span class="block mb-2 underline"><strong>Síntomas y dolores</strong></span>
                        <Box v-for="(item, index) in boxes.filter(b => b.category === '1')" :id="item.id" :key="index"
                            :name="item.name" :type="item.type" :category="item.category" class="block" />
                    </div>
                    <div class="flex-1">
                        <span class="block mb-2 underline"><strong>Autodiagnósticos </strong></span>
                        <Box v-for="(item, index) in boxes.filter(b => b.category === '2')" :id="item.id" :key="index"
                            :name="item.name" :type="item.type" :category="item.category" class="block" />
                    </div>

                </div>
                <div class="drop mt-4">
                    <Dustbin v-for="bin in dustbins" :key="bin.id" :container="bin.id" @drop="handleDrop(bin.id, $event)"
                        :tags="bin.tags" />
                </div>
                <div class="flex justify-end">
                    <img src="/img/source.png" style="height:20px" />
                </div>
                <div class="flex items-center justify-end text-sm my-4">
                    <el-progress class="w-[200px]" :text-inside="false" :stroke-width="6"
                        :percentage="correctAnswers / 24 * 100" status="success" />
                    {{ correctAnswers }} / {{ 24 }} respuestas correctas
                </div>
            </DndProvider>
        </template>
        <template v-else>
            <DndProvider :backend="TouchBackend" key="touch">
                <div class="flex">
                    <div class="flex-1">
                        <span class="block mb-2 underline"><strong>Síntomas y dolores</strong></span>
                        <Box v-for="(item, index) in boxes.filter(b => b.category === '1')" :id="item.id" :key="index"
                            :name="item.name" :type="item.type" :category="item.category" class="block" />
                    </div>
                    <div class="flex-1">
                        <span class="block mb-2 underline"><strong>Autodiagnósticos </strong></span>
                        <Box v-for="(item, index) in boxes.filter(b => b.category === '2')" :id="item.id" :key="index"
                            :name="item.name" :type="item.type" :category="item.category" class="block" />
                    </div>

                </div>
                <div class="drop mt-4">
                    <Dustbin v-for="bin in dustbins" :key="bin.id" :container="bin.id" @drop="handleDrop(bin.id, $event)"
                        :tags="bin.tags" />
                </div>
                <div class="flex justify-end">
                    <img src="/img/source.png" style="height:20px" />
                </div>
                <div class="flex items-center justify-end text-sm my-4">
                    <el-progress class="w-[200px]" :text-inside="false" :stroke-width="6"
                        :percentage="correctAnswers / 24 * 100" status="success" />
                    {{ correctAnswers }} / {{ 24 }} respuestas correctas
                </div>
            </DndProvider>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.drop {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 6px;
}
</style>