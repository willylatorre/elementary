<script setup>

const items = ref([])
const item = ref('')

const addItem = (_item) => {
    items.value.push(_item)
    item.value = ''
}

const removeItem = (item) => {
    items.value.splice(items.value.indexOf(item), 1)
}


const verSolucion = ref('')

const ejercicio = reactive({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    '10': '',
    '11': '',
    '12': '',
    '13': '',
    '14': ''
})

const correctAnswers = computed(() => {
    return Object.entries(ejercicio).filter(([key, value]) => {
        return value + '' === key
    }).length
})

const options = [{
    label: 'cuchillo',
    value: 1
},
{
    label: 'kilo',
    value: 2
},
{
    label: 'media',
    value: 3
},
{
    label: 'diente',
    value: 4
},
{
    label: 'medio',
    value: 5
},
{
    label: 'oliva',
    value: 6
},
{
    label: 'vinagre',
    value: 7
},
{
    label: 'sal',
    value: 8
},
{
    label: 'pan',
    value: 9
},
{
    label: 'tomates',
    value: 10
},
{
    label: 'batidora',
    value: 11
},
{
    label: 'cebolla',
    value: 12
},
{
    label: 'pimiento',
    value: 13
},
{
    label: 'ajo',
    value: 14
},
{
    label: 'agua',
    value: 15
},
{
    label: 'aceite',
    value: 16
}].sort((a, b) => a.label.localeCompare(b.label))
</script>

<template>
    <div>
        <ClientOnly>
            <el-card class="mt-4" shadow="never">
                <div class="flex justify-between items-start">
                    <h2 class="text-2xl font-bold mb-4 pl-0">Parte 1</h2>

                    <div class="flex items-center"><el-tag class="text-lg">Destrezas:
                            <el-tooltip class="box-item" effect="dark" content="Comprensión auditiva" placement="top">
                                <el-icon class="mr-2 top-[2px]">
                                    <ElIconChatLineRound />
                                </el-icon>
                            </el-tooltip>

                            <el-tooltip class="box-item" effect="dark" content="Comprensión lectora" placement="top">
                                <el-icon class="top-[2px]">
                                    <ElIconReading />
                                </el-icon>
                            </el-tooltip>
                        </el-tag>
                    </div>
                </div>
                <iframe width="560" height="315" style="max-width: 80%;" src="https://www.youtube.com/embed/GyGtLGMee_M"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

                <p class="my-3">Mira el video de la receta y escribe a continuación todos todos los alimentos y utensilios
                    de cocina
                    que
                    aparecen y que puedas recordar. </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <el-input placeholder="Escribe un alimento o utensilio de cocina" v-model="item"
                        @keydown.enter="addItem(item)">
                        <template #append>
                            <el-button v-model="item" :icon="ElIconPlus" @click="addItem(item)"> Añadir </el-button>
                        </template>
                    </el-input>
                    <div class="flex items-center flex-wrap gap-2">
                        <span v-if="items.length === 0">No has añadido ninguna palabra.</span>
                        <el-tag v-for="item in items" :key="item" type="danger" effect="plain" size="large"
                            @close="removeItem($event)">{{
                                item }}</el-tag>
                    </div>
                </div>

                <el-divider class="mt-10 mb-4" />

                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-bold  mt-6 mb-4 pl-0">Parte 2</h2>
                    <el-tag class="text-lg">Destrezas:
                        <el-tooltip class="box-item" effect="dark" content="Comprensión lectora" placement="top">
                            <el-icon class="top-[2px]">
                                <ElIconReading />
                            </el-icon>
                        </el-tooltip>
                    </el-tag>

                </div>
                <p class="my-3">Rellena los huecos de la receta de gazpacho con ayuda de los alimentos y las palabras clave
                    proporcionadas en el ejercicio. </p>

                <div class="flex justify-between items-center mb-4`">
                    <h3 class="text-xl font-medium"> <el-icon class="mr-2 top-[-2px]">
                            <ElIconBowl />
                        </el-icon>Receta de gazpacho</h3>
                    <div class="flex items-center justify-end text-sm">
                        <el-progress class="w-[200px]" :text-inside="false" :stroke-width="6"
                            :percentage="correctAnswers / options.length * 100" status="success" />
                        {{ correctAnswers }} / {{ options.length }} respuestas correctas
                    </div>

                </div>

                <table class="my-6 max-w-[300px] text-sm mx-auto">
                    <thead>
                        <tr>
                            <!-- <th width="50%">Ingredientes</th> -->
                            <th width="50%">Palabras clave</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <!-- <td>
                                                Tomate - pepino - pimiento - cebolla - ajo - pan -
                                                aceite de oliva - vinagre - sal

                                            </td> -->
                            <td>
                                kilo - diente - media - medio - cuchillo

                            </td>
                        </tr>

                    </tbody>
                </table>

                <p class="leading-normal">
                    Para preparar el gazpacho necesitamos un <el-select v-model="ejercicio['1']" :class="{
                        'wrong-answer': ejercicio['1'] && ejercicio['1'] !== 1,
                        'good-answer': ejercicio['1'] === 1,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> y una batidora.</p>
                <p class="leading-loose">Para cuatro personas ponemos un <el-select v-model="ejercicio['2']" :class="{
                    'wrong-answer': ejercicio['2'] && ejercicio['2'] !== 2,
                    'good-answer': ejercicio['2'] === 2,
                }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> de tomates, un pepino, un pimiento pequeño, <el-select v-model="ejercicio['3']" :class="{
                        'wrong-answer': ejercicio['3'] && ejercicio['3'] !== 3,
                        'good-answer': ejercicio['3'] === 3,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> cebolla, un <el-select v-model="ejercicio['4']" :class="{
                        'wrong-answer': ejercicio['4'] && ejercicio['4'] !== 4,
                        'good-answer': ejercicio['4'] === 4,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> de ajo,
                    un poco de pan, <el-select v-model="ejercicio['5']" :class="{
                        'wrong-answer': ejercicio['5'] && ejercicio['5'] !== 5,
                        'good-answer': ejercicio['5'] === 1,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> vaso de aceite de <el-select v-model="ejercicio['6']" :class="{
                        'wrong-answer': ejercicio['6'] && ejercicio['6'] !== 6,
                        'good-answer': ejercicio['6'] === 6,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>, dos cucharadas de <el-select v-model="ejercicio['7']" :class="{
                        'wrong-answer': ejercicio['7'] && ejercicio['7'] !== 7,
                        'good-answer': ejercicio['7'] === 7,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> y un poco de <el-select v-model="ejercicio['8']" :class="{
                        'wrong-answer': ejercicio['8'] && ejercicio['8'] !== 8,
                        'good-answer': ejercicio['8'] === 8,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>.</p>
                <p>Si el <el-select v-model="ejercicio['9']" :class="{
                    'wrong-answer': ejercicio['9'] && ejercicio['9'] !== 9,
                    'good-answer': ejercicio['9'] === 9,
                }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> es duro, de ayer, lo ponemos en agua. </p>
                <p>Empezamos cortando los <el-select v-model="ejercicio['10']" :class="{
                    'wrong-answer': ejercicio['10'] && ejercicio['10'] !== 10,
                    'good-answer': ejercicio['10'] === 10,
                }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> y ¡a la <el-select v-model="ejercicio['11']" :class="{
                        'wrong-answer': ejercicio['11'] && ejercicio['11'] !== 11,
                        'good-answer': ejercicio['11'] === 11,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>!</p>
                <p>Pela la <el-select v-model="ejercicio['12']" :class="{
                    'wrong-answer': ejercicio['12'] && ejercicio['12'] !== 12,
                    'good-answer': ejercicio['12'] === 12,
                }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> y pon media.</p>
                <p>Corta un <el-select v-model="ejercicio['13']" :class="{
                    'wrong-answer': ejercicio['13'] && ejercicio['13'] !== 13,
                    'good-answer': ejercicio['13'] === 13,
                }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> y ¡a la batidora!</p>
                <p>Pela un diente de <el-select v-model="ejercicio['14']" :class="{
                    'wrong-answer': ejercicio['14'] && ejercicio['14'] !== 14,
                    'good-answer': ejercicio['14'] === 14,
                }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>.</p>
                <p>Saca el pan del
                    <el-select v-model="ejercicio['15']" :class="{
                        'wrong-answer': ejercicio['15'] && ejercicio['15'] !== 15,
                        'good-answer': ejercicio['15'] === 15,
                    }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select> y mételo en la batidora.
                </p>
                <p>Finalmente, añade el <el-select v-model="ejercicio['16']" :class="{
                    'wrong-answer': ejercicio['16'] && ejercicio['16'] !== 16,
                    'good-answer': ejercicio['16'] === 16,
                }" placeholder="selecciona" size="small" clearable filterable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>, las dos cucharadas de vinagre y la sal.</p>
                <p>Cierra la batidora y bate todo junto.</p>


                <el-collapse v-model="verSolucion" accordion class="mt-6">
                    <el-collapse-item title="Solución" name="sol">
                        <div class="flex">
                            <div class="flex-1">
                                1 - cuchillo <br />
                                2 - kilo<br />
                                3 - media<br />
                                4 - diente<br />
                                5 - medio<br />
                                6 - oliva<br />
                                7 - vinagre<br />
                                8 - sal<br />
                            </div>
                            <div class="flex-1">
                                9 - pan<br />
                                10 - tomates<br />
                                11 - batidora<br />
                                12 - cebolla<br />
                                13 - pimiento<br />
                                14 - ajo<br />
                                15 - agua<br />
                                16 - aceite<br />
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-card>
        </ClientOnly>
    </div>
</template>

<style lang="scss" scoped>
.wrong-answer {
    border: 1px solid #f56c6c !important;
}

.good-answer {
    border: 1px solid #67c23a !important;
}
</style>