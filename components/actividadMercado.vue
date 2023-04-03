<script setup>

const verSolucion = ref()

const ejercicio = reactive({
    'fresco': undefined,
    'tomate': undefined,
    'zanahoria': undefined,
    'pimiento': undefined,
    'sandia-1': undefined,
    'sandia-2': undefined,
    'dulce': undefined,
    'crujiente': undefined,
    'pepino-1': undefined,
    'pepino-2': undefined,
    'pepino-3': undefined,
    'cebolla-1': undefined,
    'cebolla-2': undefined,
    'cebolla-3': undefined,
    'media': undefined,
    'kilo-1': undefined,
    'kilo-2': undefined,
    'cuatro': undefined,
    'tres': undefined,
    'dos-1': undefined,
    'dos-2': undefined,
    'manzana': undefined,
    'melon': undefined,
    'grande': undefined
})

const answers = reactive({
    'fresco': 'warning',
    'tomate': 'danger',
    'zanahoria': 'success',
    'pimiento': 'success',
    'sandia-1': 'danger',
    'sandia-2': 'danger',
    'dulce': 'warning',
    'crujiente': 'warning',
    'pepino-1': 'success',
    'pepino-2': 'success',
    'pepino-3': 'success',
    'cebolla-1': 'success',
    'cebolla-2': 'success',
    'cebolla-3': 'success',
    'media': 'info',
    'kilo-1': 'info',
    'kilo-2': 'info',
    'cuatro': 'info',
    'tres': 'info',
    'dos-1': 'info',
    'dos-2': 'info',
    'manzana': 'danger',
    'melon': 'danger',
    'grande': 'warning'
})

const ejercicio2 = reactive({})

const correctAnswers = computed(() => {
    return Object.entries(ejercicio).filter(([key, value]) => {
        return value === answers[key]
    }).length
})

const totalAnswers = computed(() => {
    return Object.entries(ejercicio).length
})

const categories = [
    {
        label: 'Verduras',
        value: 'success'
    },
    {
        label: 'Frutas',
        value: 'danger'
    },
    {
        label: 'Números/Medidas',
        value: 'info'
    },
    {
        label: 'Adjetivos',
        value: 'warning'
    }]

</script>

<template>
    <div>
        <ClientOnly>
            <el-card class="mt-4 card-dialog" shadow="never">
                <div class="flex justify-between items-start">
                    <h2 class="text-2xl font-bold mb-4 pl-0">Parte 1</h2>

                    <div class="flex items-center"><el-tag size="large" class="text-lg">Destrezas:
                            <el-tooltip class="box-item" effect="dark" content="Comprensión y expresión oral"
                                placement="top">
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

                <p> <el-icon class="mr-2 top-[2px]">
                        <ElIconReading />
                    </el-icon> Lee atentamente el diálogo y encuentra las palabras que corresponden a cada categoría.
                </p>
                <div class="flex items-center justify-between  mb-10 mt-2 text-sm">
                    <div class="flex gap-2">
                        <el-tag type="danger">FRUTA</el-tag>
                        <el-tag type="success">VERDURA</el-tag>
                        <el-tag type="info">UNIDAD/MEDIDA</el-tag>
                        <el-tag type="warning">ADJETIVO</el-tag>
                    </div>

                    <div>
                        <el-progress class="w-[200px]" :text-inside="false" :stroke-width="6"
                            :percentage="correctAnswers / totalAnswers * 100" status="success" />
                        {{ correctAnswers }} / {{ totalAnswers }} respuestas correctas
                    </div>
                </div>



                <el-tag effect="plain" class="mr-2 ">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconShoppingCart />
                    </el-icon>Dependiente
                </el-tag>¡Hola! Buenas tardes y bienvenido a Verdulería García. ¿En qué puedo
                ayudarte hoy?
                <br />
                <el-tag effect="plain" class="mr-[32px]" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Cliente
                </el-tag> Hola, buenas tardes. Quiero comprar algunas frutas y
                verduras para cocinar un gazpacho.
                ¿Qué me
                recomiendas? <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconShoppingCart />
                    </el-icon>Dependiente
                </el-tag> Estupendo, tenemos una gran selección de productos
                <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['fresco']
                        }" :link="!ejercicio['fresco']" :type="ejercicio['fresco']">frescos</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['fresco']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover>.
                Hoy tenemos en oferta
                <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['tomate']
                        }" :link="!ejercicio['tomate']" :type="ejercicio['tomate']">tomates</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['tomate']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover>
                ,
                <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['zanahoria']
                        }" :link="!ejercicio['zanahoria']" :type="ejercicio['zanahoria']">zanahorias</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['zanahoria']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> y <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['pimiento']
                        }" :link="!ejercicio['pimiento']" :type="ejercicio['pimiento']">pimientos</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['pimiento']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </el-popover>. <br />
                <el-tag effect="plain" class="mr-[32px]" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Cliente
                </el-tag> Genial, también quiero comprar fruta de temporada. <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconShoppingCart />
                    </el-icon>Dependiente
                </el-tag> Entonces, te recomiendo estas <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['sandia-1']
                        }" :link="!ejercicio['sandia-1']" :type="ejercicio['sandia-1']">sandías</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['sandia-1']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover>. Son <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['dulce']
                        }" :link="!ejercicio['dulce']" :type="ejercicio['dulce']">dulces</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['dulce']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> y <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['crujiente']
                        }" :link="!ejercicio['crujiente']" :type="ejercicio['crujiente']">crujientes</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['crujiente']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover>. ¿Quieres una?
                <br />
                <el-tag effect="plain" class="mr-[32px]" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Cliente
                </el-tag> No, no. Ponme <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['media']
                        }" :link="!ejercicio['media']" :type="ejercicio['media']">media</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['media']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['sandia-2']
                        }" :link="!ejercicio['sandia-2']" :type="ejercicio['sandia-2']">sandía</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['sandia-2']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover>, por favor. <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconShoppingCart />
                    </el-icon>Dependiente
                </el-tag> Claro, aquí tienes. ¿necesitas algo más? <br />
                <el-tag effect="plain" class="mr-[32px]" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Cliente
                </el-tag> Sí, también quiero <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['pepino-1']
                        }" :link="!ejercicio['pepino-1']" :type="ejercicio['pepino-1']">pepinos</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['pepino-1']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> y <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['cebolla-1']
                        }" :link="!ejercicio['cebolla-1']" :type="ejercicio['cebolla-1']">cebollas</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['cebolla-1']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> para cocinar el gazpacho. ¿Cuánto cuestan? <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconShoppingCart />
                    </el-icon>Dependiente
                </el-tag> Los <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['pepino-2']
                        }" :link="!ejercicio['pepino-2']" :type="ejercicio['pepino-2']">pepinos</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['pepino-2']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> cuestan <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['cuatro']
                        }" :link="!ejercicio['cuatro']" :type="ejercicio['cuatro']">cuatro</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['cuatro']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> euros el <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['kilo-1']
                        }" :link="!ejercicio['kilo-1']" :type="ejercicio['kilo-1']">kilo</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['kilo-1']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> y las <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['cebolla-2']
                        }" :link="!ejercicio['cebolla-2']" :type="ejercicio['cebolla-2']">cebollas</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['cebolla-2']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['dos-2']
                        }" :link="!ejercicio['dos-2']" :type="ejercicio['dos-2']">dos</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['dos-2']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> euros el <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['kilo-2']
                        }" :link="!ejercicio['kilo-2']" :type="ejercicio['kilo-2']">kilo</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['kilo-2']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </el-popover>. ¿Qué te pongo? <br />
                <el-tag effect="plain" class="mr-[32px]" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Cliente
                </el-tag> Quiero comprar <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['tres']
                        }" :link="!ejercicio['tres']" :type="ejercicio['tres']">tres</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['tres']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['pepino-3']
                        }" :link="!ejercicio['pepino-3']" :type="ejercicio['pepino-3']">pepinos</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['pepino-3']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </el-popover>
                y <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['dos-1']
                        }" :link="!ejercicio['dos-1']" :type="ejercicio['dos-1']">dos</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['dos-1']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover><el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['cebolla-3']
                        }" :link="!ejercicio['cebolla-3']" :type="ejercicio['cebolla-3']">cebollas</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['cebolla-3']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover>,
                por favor. <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconShoppingCart />
                    </el-icon>Dependiente
                </el-tag> Muy bien, aquí tienes. ¿Puedo ayudarte en algo más? También tenemos <el-popover placement="bottom"
                    :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['manzana']
                        }" :link="!ejercicio['manzana']" :type="ejercicio['manzana']">manzanas</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['manzana']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> y <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['melon']
                        }" :link="!ejercicio['melon']" :type="ejercicio['melon']">melones</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['melon']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> a buen precio.<br />
                <el-tag effect="plain" class="mr-[32px]" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Cliente
                </el-tag> No, ¡nada más! ¡Gracias!
                <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconShoppingCart />
                    </el-icon>Dependiente
                </el-tag> Muy bien, aquí las tienes. ¿Necesitas una
                bolsa
                ? <br />
                <el-tag effect="plain" class="mr-[32px]" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Cliente
                </el-tag> Sí, por favor, una bolsa <el-popover placement="bottom" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="fake-button" :class="{
                            'fake-button--dark': !ejercicio['grande']
                        }" :link="!ejercicio['grande']" :type="ejercicio['grande']">grande</el-button>
                    </template>
                    <div>
                        <span class="text-xs block">Selecciona una categoría</span>
                        <el-select v-model="ejercicio['grande']" placeholder="Categoría" size="small">
                            <el-option v-for="item in categories" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>

                </el-popover> <br />
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
                compra. <br />



                <el-collapse v-model="verSolucion" accordion class="mt-6">
                    <el-collapse-item title="Solución" name="sol">
                        <div class="flex flex-wrap">
                            <div class="flex-1">

                                <el-tag type="danger">FRUTA</el-tag> <br />
                                tomate<br />
                                sandia (x2 veces)<br />
                                manzana<br />
                                melon
                                <br />
                            </div>
                            <div class="flex-1">
                                <el-tag type="success">VERDURA</el-tag> <br />

                                zanahoria<br />
                                pimiento<br />


                                pepino (x3 veces)<br />

                                cebolla (x3 veces)<br />


                            </div>
                            <div class="flex-1">

                                <el-tag type="info">UNIDAD/MEDIDA</el-tag><br />


                                media <br />
                                kilo (x2 veces) <br />
                                cuatro <br />
                                tres <br />
                                dos (x2) <br />

                            </div>
                            <div class="flex-1">

                                <el-tag type="warning">ADJETIVO</el-tag><br />
                                fresco<br />
                                dulce<br />
                                crujiente<br />
                                grande <br />
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>

                <el-divider class="mt-10 mb-4" />
                <div class="flex justify-between items-start mt-6">
                    <h2 class="text-2xl font-bold mt-0 mb-4 pl-0">Parte 2</h2>
                    <div class="flex items-center"><el-tag class="text-lg">Destrezas:
                            <el-tooltip class="box-item" effect="dark" content="Comprensión y expresión escrita"
                                placement="top">
                                <el-icon class="top-[2px]">
                                    <ElIconEditPen />
                                </el-icon>
                            </el-tooltip>
                        </el-tag>
                    </div>
                </div>


                <p> Para acabar de aprender este vocabulario...¿Cómo se traducen estas frutas y verduras en
                    holandés? </p>

                <table>
                    <thead>
                        <tr>
                            <th style="min-width:50px">Imagen</th>
                            <th>Palabra en español</th>
                            <th>Palabra en holandés</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="/img/fruits-1.png" width="42" class="mx-auto" />
                            </td>
                            <td>Frambuesa</td>
                            <td>
                                <el-input v-model="ejercicio2['frambuesa']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-2.png" width="42" class="mx-auto" />
                            </td>
                            <td>Tomate</td>
                            <td>
                                <el-input v-model="ejercicio2['tomate']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-3.png" width="42" class="mx-auto" />
                            </td>
                            <td>Zanahoria</td>
                            <td>
                                <el-input v-model="ejercicio2['zanahoria']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-4.png" width="42" class="mx-auto" />
                            </td>
                            <td>Sandía</td>
                            <td>
                                <el-input v-model="ejercicio2['sandia']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-5.png" width="42" class="mx-auto" />
                            </td>
                            <td>Manzana</td>
                            <td>
                                <el-input v-model="ejercicio2['manzana']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-6.png" width="42" class="mx-auto" />
                            </td>
                            <td>Cebolla</td>
                            <td>
                                <el-input v-model="ejercicio2['cebolla']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-7.png" width="42" class="mx-auto" />
                            </td>
                            <td>Pimiento</td>
                            <td>
                                <el-input v-model="ejercicio2['pimiento']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-8.png" width="42" class="mx-auto" />
                            </td>
                            <td>Aguacate</td>
                            <td>
                                <el-input v-model="ejercicio2['aguacate']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-9.png" width="42" class="mx-auto" />
                            </td>
                            <td>Melón</td>
                            <td>
                                <el-input v-model="ejercicio2['melon']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/fruits-10.png" width="42" class="mx-auto" />
                            </td>
                            <td>Pera</td>
                            <td>
                                <el-input v-model="ejercicio2['pera']" placeholder="Palabra en holandés" size="small"
                                    class="w-full" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-[8px] flex justify-end mt-1">Imágenes de <a class="ml-1 underline"
                        href="https://www.flaticon.com/packs/healthy-food-and-vegan-2" target="_new">flaticon</a></div>

                <el-collapse v-model="verSolucion" accordion class="mt-6">
                    <el-collapse-item title="Solución" name="sol2">

                        <table>
                            <thead>
                                <tr>
                                    <th>Palabra en español</th>
                                    <th>Palabra en holandés</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Frambuesa</td>
                                    <td>
                                        Frambozen
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tomate</td>
                                    <td>
                                        Tomaat
                                    </td>
                                </tr>
                                <tr>
                                    <td>Zanahoria</td>
                                    <td>
                                        Wortel
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sandía</td>
                                    <td>
                                        Watermeloen
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manzana</td>
                                    <td>
                                        Appel
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cebolla</td>
                                    <td>
                                        Ui
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pimiento</td>
                                    <td>
                                        Paprika
                                    </td>
                                </tr>
                                <tr>
                                    <td>Aguacate</td>
                                    <td>
                                        Avocado
                                    </td>
                                </tr>
                                <tr>
                                    <td>Melón</td>
                                    <td>
                                        Meloen
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pera</td>
                                    <td>
                                        Peer
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </el-collapse-item>
                </el-collapse>
            </el-card>
        </ClientOnly>
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

.fake-button {
    top: -1px;
    position: relative;
    font-size: 16px;

    &--dark {
        color: theme('colors.dark');
        padding: 0;
    }
}
</style>