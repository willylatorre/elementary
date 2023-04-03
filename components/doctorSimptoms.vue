
<script  setup>
import Dustbin from './doctorDnDBin.vue'
const verSolucion = ref()

const dustbins = ref([
    { accepts: 'box', id: 1, answers: ['9', '11', '3'] },
    { accepts: 'box', id: 2, answers: ['15', '9', '6'] },
    { accepts: 'box', id: 3, answers: ['7', '10', '13'] },
    { accepts: 'box', id: 4, answers: ['13', '10', '1'] },
    { accepts: 'box', id: 5, answers: ['5', '16', '9'] },
    { accepts: 'box', id: 6, answers: ['4', '10', '13'] },
    { accepts: 'box', id: 7, answers: ['12', '11', '2'] },
    { accepts: 'box', id: 8, answers: ['14', '15', '8'] },
])

const responses1 = ref({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
})

const responses2 = ref({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
})

const responses3 = ref({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
})

const tagTypes = ref({
    '1': {
        '1': 'info',
        '2': 'info',
        '3': 'info',
        '4': 'info',
        '5': 'info',
        '6': 'info',
        '7': 'info',
        '8': 'info',
    },
    '2': {
        '1': 'info',
        '2': 'info',
        '3': 'info',
        '4': 'info',
        '5': 'info',
        '6': 'info',
        '7': 'info',
        '8': 'info',
    },
    '3': {
        '1': 'info',
        '2': 'info',
        '3': 'info',
        '4': 'info',
        '5': 'info',
        '6': 'info',
        '7': 'info',
        '8': 'info',
    },

})

const options1 = ref([
    { name: 'Me duele la tripa', id: '1', type: 'box', category: '1' },
    { name: 'Tengo mocos y estornudos', id: '2', type: 'box', category: '1' },
    { name: 'Tengo tos', id: '3', type: 'box', category: '1' },
    { name: 'Tengo diarrea', id: '4', type: 'box', category: '1' },
    { name: 'Me duele la garganta', id: '5', type: 'box', category: '1' },
    { name: 'Tengo fiebre', id: '6', type: 'box', category: '1' },
    { name: 'Quiero vomitar', id: '7', type: 'box', category: '1' },
    { name: 'Me duele la cabeza', id: '8', type: 'box', category: '1' }
])

const options2 = ref([
    { name: 'Gripe', id: '9', type: 'box', category: '2' },
    { name: 'Gastroentiritis', id: '10', type: 'box', category: '2' },
    { name: 'Catarro', id: '11', type: 'box', category: '2' },
    { name: 'Alergia', id: '12', type: 'box', category: '2' },
    { name: 'Intoxicación', id: '13', type: 'box', category: '2' },
    { name: 'Migraña', id: '14', type: 'box', category: '2' },
    { name: 'COVID', id: '15', type: 'box', category: '2' },
    { name: 'Anginas', id: '16', type: 'box', category: '2' },
])

const checkTagTypeForBin = async (responseId, binId) => {
    const bin = dustbins.value.find(b => b.id === binId)
    const responseList = responseId === '1' ?
        responses1.value : responseId === '2' ?
            responses2.value :
            responses3.value

    const response = responseList[binId]

    if (!response) {
        return
    }

    let result = bin.answers.includes(response) ? 'success' : 'warning'
    tagTypes.value[responseId][binId] = result

    // Especial check
    if (responses2.value[binId] && (responses2.value[binId] === responses3.value[binId])) {
        tagTypes.value['3'][binId] = 'warning'
    }
}

const correctAnswers = computed(() => {
    const tags = Object.values(tagTypes.value['1']).concat(Object.values(tagTypes.value['2'])).concat(Object.values(tagTypes.value['3']))
    return tags.filter(t => t === 'success').length
})

</script>

<template>
    <div class="mt-4">
        <div class="flex items-center justify-end text-sm my-4">
            <el-progress class="w-[200px]" :text-inside="false" :stroke-width="6" :percentage="correctAnswers / 24 * 100"
                status="success" />
            {{ correctAnswers }} / 24 respuestas correctas
        </div>

        <div v-for="bin in dustbins" :key="bin.id" class="simp-row">
            <Dustbin :container="bin.id" />
            <div>
                <span class="block mb-2 underline"><strong>Síntomas y dolores</strong></span>
                <el-select v-model="responses1[bin.id]" placeholder="Selecciona el síntoma" class="w-full blue-select"
                    :class="{
                        'wrong-answer': tagTypes['1'][bin.id] === 'warning',
                        'good-answer': tagTypes['1'][bin.id] === 'success',
                    }" @change="checkTagTypeForBin('1', bin.id)">
                    <el-option style="--el-color-primary: #0ea5e9;" v-for="item in options1" :key="item.id"
                        :label="item.name" :value="item.id">
                    </el-option>
                </el-select>

                <span class="block mb-2 mt-4 underline"><strong>Autodiagnóstico 1</strong></span>
                <el-select v-model="responses2[bin.id]" placeholder="Selecciona autodiagnóstico" class="w-full blue-select"
                    :class="{
                        'wrong-answer': tagTypes['2'][bin.id] === 'warning',
                        'good-answer': tagTypes['2'][bin.id] === 'success',
                    }" @change="checkTagTypeForBin('2', bin.id)">
                    <el-option style="--el-color-primary: #0ea5e9;" v-for="item in options2" :key="item.id"
                        :label="item.name" :value="item.id">
                    </el-option>
                </el-select>

                <span class="block mb-2 mt-4 underline"><strong>Autodiagnóstico 2</strong></span>
                <el-select v-model="responses3[bin.id]" placeholder="Selecciona autodiagnóstico" class="w-full blue-select"
                    :class="{
                        'wrong-answer': tagTypes['3'][bin.id] === 'warning',
                        'good-answer': tagTypes['3'][bin.id] === 'success',
                    }" @change="checkTagTypeForBin('3', bin.id)">
                    <el-option style="--el-color-primary: #0ea5e9;" v-for="item in options2" :key="item.id"
                        :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
    <div class="flex justify-end">
        <img src="/img/source.png" style="height:20px" />
    </div>

    <el-collapse v-model="verSolucion" accordion class="mt-6">
        <el-collapse-item title="Solución" name="sol2">
            <table>
                <thead>
                    <tr>
                        <th style="min-width:50px">Imagen</th>
                        <th>Síntoma</th>
                        <th>Autodiagnósticos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="/img/dnd1.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Tengo tos</td>
                        <td>
                            Gripe, catarro
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/dnd2.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Tengo fiebre</td>
                        <td>
                            Gripe, COVID
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/dnd3.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Quiero vomitar</td>
                        <td>
                            Gastroenteritis, intoxicación
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/dnd4.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Me duele la tripa</td>
                        <td>
                            Gastroenteritis, intoxicación
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/dnd5.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Me duele la garganta</td>
                        <td>
                            Anginas, COVID
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/dnd6.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Tengo diarrea</td>
                        <td>
                            Gastroenteritis, intoxicación
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/dnd7.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Tengo mocos y estornudos</td>
                        <td>
                            Alergia, catarro
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/img/dnd8.jpg" width="42" class="mx-auto" />
                        </td>
                        <td>Me duele la cabeza</td>
                        <td>
                            Migraña, COVID
                        </td>
                    </tr>
                </tbody>
            </table>
        </el-collapse-item>
    </el-collapse>
</template>

<style lang="scss" scoped>
.blue-select {
    --el-color-primary: #0ea5e9;
}

.simp-row {
    display: grid;
    grid-template-columns: minmax(220px, 250px) minmax(220px, 250px);
    gap: 24px;
    align-items: center;
    margin-bottom: 48px;

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
    }
}

.wrong-answer {
    border: 1px solid #f56c6c !important;
}

.good-answer {
    border: 1px solid #67c23a !important;
}
</style>