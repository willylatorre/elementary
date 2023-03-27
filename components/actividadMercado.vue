<script setup>

const verSolucion = ref()

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
    label: 'verduras',
    value: 1
},
{
    label: 'tomates',
    value: 2
},
{
    label: 'lechugas',
    value: 3
},
{
    label: 'fruta',
    value: 4
},
{
    label: 'manzanas',
    value: 5
},
{
    label: 'dulces',
    value: 6
},
{
    label: 'cuatro',
    value: 7
},
{
    label: 'zanahorias',
    value: 8
},
{
    label: 'kilos',
    value: 9
},
{
    label: 'lechuga',
    value: 10
},
{
    label: 'romana',
    value: 11
},
{
    label: 'un',
    value: 12
},
{
    label: 'bolsa',
    value: 13
},
{
    label: 'compra',
    value: 14
}].sort((a, b) => a.label.localeCompare(b.label))

</script>

<template>
    <div>
        <el-card class="mt-4 card-dialog" shadow="never">
            <div class="flex items-center justify-end w-full mb-4 mt-2 text-sm">
                <el-progress class="w-[200px]" :text-inside="false" :stroke-width="6"
                    :percentage="correctAnswers / options.length * 100" status="success" />
                {{ correctAnswers }} / {{ options.length }} respuestas correctas
            </div>

            <el-tag effect="plain" class="mr-2 ">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag>¡Hola! Buenas tardes y bienvenido a verdulería García. ¿En qué puedo
            ayudarte hoy?
            <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Hola, buenas tardes. Quiero comprar algunas frutas y
            <el-select v-model="ejercicio['1']" :class="{
                'wrong-answer': ejercicio['1'] && ejercicio['1'] !== 1,
                'good-answer': ejercicio['1'] === 1,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> para cocinar en casa.
            ¿Qué me
            recomiendas? <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> Estupendo, tenemos una gran selección de productos frescos. Hoy tenemos en oferta
            <el-select v-model="ejercicio['2']" :class="{
                'wrong-answer': ejercicio['2'] && ejercicio['2'] !== 2,
                'good-answer': ejercicio['2'] === 2,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            ,
            zanahorias y <el-select v-model="ejercicio['3']" :class="{
                'wrong-answer': ejercicio['3'] && ejercicio['3'] !== 3,
                'good-answer': ejercicio['3'] === 3,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>. <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Genial, también quiero comprar <el-select v-model="ejercicio['4']" :class="{
                'wrong-answer': ejercicio['4'] && ejercicio['1'] !== 4,
                'good-answer': ejercicio['4'] === 4,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> de temporada. <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> Entonces, te recomiendo estas <el-select v-model="ejercicio['5']" :class="{
                'wrong-answer': ejercicio['5'] && ejercicio['5'] !== 5,
                'good-answer': ejercicio['5'] === 5,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>. Son <el-select v-model="ejercicio['6']" :class="{
                'wrong-answer': ejercicio['6'] && ejercicio['6'] !== 6,
                'good-answer': ejercicio['6'] === 6,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> y crujientes. ¿Cuántas
            quieres?
            <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Me pones <el-select v-model="ejercicio['7']" :class="{
                'wrong-answer': ejercicio['7'] && ejercicio['7'] !== 7,
                'good-answer': ejercicio['7'] === 7,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> manzanas, por favor. <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> Claro, aquí tienes. ¿necesitas algo más? <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Sí, también quiero algunas <el-select v-model="ejercicio['8']" :class="{
                'wrong-answer': ejercicio['8'] && ejercicio['8'] !== 8,
                'good-answer': ejercicio['8'] === 8,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> para hacer una sopa. ¿Cuánto cuestan? <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> Las zanahorias cuestan dos euros por kilo. ¿Cuántas quieres? <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Quiero comprar dos <el-select v-model="ejercicio['9']" :class="{
                'wrong-answer': ejercicio['9'] && ejercicio['9'] !== 9,
                'good-answer': ejercicio['9'] === 9,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            , por favor. <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> Muy bien, aquí tienes. ¿Puedo ayudarte en algo más? <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Sí, también necesito una <el-select v-model="ejercicio['10']" :class="{
                'wrong-answer': ejercicio['10'] && ejercicio['10'] !== 10,
                'good-answer': ejercicio['10'] === 10,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>.
            <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> Tenemos dos tipos de lechuga, ¿quieres una lechuga
            <el-select v-model="ejercicio['11']" :class="{
                'wrong-answer': ejercicio['11'] && ejercicio['11'] !== 11,
                'good-answer': ejercicio['11'] === 11,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            o una lechuga
            iceberg? <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Me gusta la lechuga romana. ¿Cuánto cuesta? <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> La lechuga romana cuesta
            <el-select v-model="ejercicio['12']" :class="{
                'wrong-answer': ejercicio['12'] && ejercicio['12'] !== 12,
                'good-answer': ejercicio['12'] === 12,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            euro cada una. ¿Cuántas quieres? <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Me pones dos lechugas romanas, por favor. <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> Muy bien, aquí las tienes. ¿necesitas una
            <el-select v-model="ejercicio['13']" :class="{
                'wrong-answer': ejercicio['13'] && ejercicio['13'] !== 13,
                'good-answer': ejercicio['13'] === 13,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            ? <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> Sí, por favor. <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> ¿Puedo ayudarte en algo más? <br />
            <el-tag effect="plain" class="mr-[32px]" type="info">
                <el-icon class="top-[2px] mr-1">
                    <ElIconUser />
                </el-icon>Cliente
            </el-tag> No, eso es todo por hoy. Muchas gracias. <br />
            <el-tag effect="plain" class="mr-2">
                <el-icon class="top-[2px] mr-1">
                    <ElIconShoppingCart />
                </el-icon>Dependiente
            </el-tag> De nada. Que tengas un buen día y gracias por tu
            <el-select v-model="ejercicio['14']" :class="{
                'wrong-answer': ejercicio['14'] && ejercicio['14'] !== 14,
                'good-answer': ejercicio['14'] === 14,
            }" placeholder="selecciona" size="small" clearable filterable>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            . <br />



            <el-collapse v-model="verSolucion" accordion class="mt-6">
                <el-collapse-item title="Solución" name="sol">
                    <div class="flex">
                        <div class="flex-1">
                            1 - verduras <br />
                            2 - tomates<br />
                            3 - lechugas<br />
                            4 - fruta<br />
                            5 - manzanas<br />
                            6 - dulces<br />
                            7 - cuatro<br />
                        </div>
                        <div class="flex-1">
                            8 - zanahorias<br />
                            9 - kilos<br />
                            10 - lechuga<br />
                            11 - romana<br />
                            12 - un<br />
                            13 - bolsa<br />
                            14 - compra<br />
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-card>







    </div>
</template>

<style lang="scss" scoped>
.card-dialog {
    line-height: 2rem;
}

.wrong-answer {
    border: 1px solid #f56c6c !important;
}

.good-answer {
    border: 1px solid #67c23a !important;
}
</style>