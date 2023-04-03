<script setup>

const verSolucion = ref()

const items2 = ref([])
const item2 = ref('')

const addItem2 = (_item) => {
    items2.value.push(_item)
    item2.value = ''
}

const ejercicio = reactive({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
})
const answers = reactive({
    '1': 'Moneda',
    '2': 'Radio',
    '3': 'Lápiz',
    '4': 'Rueda',
})

const setChoice = (id, choice) => {
    ejercicio[id] = choice
}

const correctAnswers = computed(() => {
    return Object.keys(ejercicio).filter((key) => ejercicio[key] === answers[key]).length
})
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

                            <el-tooltip class="box-item" effect="dark" content="Expresión escrita" placement="top">
                                <el-icon class="top-[2px]">
                                    <ElIconEditPen />
                                </el-icon>
                            </el-tooltip>
                        </el-tag>
                    </div>
                </div>

                <p> <el-icon class="mr-2 top-[2px]">
                        <ElIconEditPen />
                    </el-icon> El chico de los pantalones rojos es Jan. Hoy se ha levantado contento. Ayúdale a repasar las
                    partes principales de su cuerpo. Escribe en cada recuadro la palabra con su correspondiente artículo: la
                    cabeza, el pie… Podéis hacer el ejercicio en parejas.
                </p>


                <div class="grid grid-cols-2">
                    <img src="/img/cuerpo1.jpg" class="max-w-[90%]" />
                    <img src="/img/cuerpo2.jpg" class="max-w-[90%]" />
                </div>



                <el-form class="mt-8 grid grid-cols-3 gap-4" :model="ejercicio" label-position="left">
                    <el-form-item :label="i + ''" v-for="i in 21" :key="i" class="form-item">
                        <el-input v-model="ejercicio[i + '']" />
                    </el-form-item>
                </el-form>


                <el-collapse v-model="verSolucion" accordion class="mt-6">
                    <el-collapse-item title="Solución" name="sol">
                        <ul class="columns-2">
                            <li>1. La mano</li>
                            <li>2. La muñeca</li>
                            <li>3. El codo</li>
                            <li>4. El hombro</li>
                            <li>5. La cabeza</li>
                            <li>6. El brazo</li>
                            <li>7. El pecho</li>
                            <li>8. La tripa</li>
                            <li>9. La pierna</li>
                            <li>10. La espalda</li>
                            <li>11. El muslo</li>
                            <li>12. La rodilla</li>
                            <li>13. El pie</li>
                            <li>14. El tobillo</li>
                            <li>15. La frente</li>
                            <li>16. El ojo</li>
                            <li>17. La oreja</li>
                            <li>18. La boca</li>
                            <li>19. La nariz</li>
                            <li>20. La barbilla</li>
                            <li>21. El cuello</li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>

                <el-divider class="mt-10 mb-4" />
                <div class="flex justify-between items-start mt-6">
                    <h2 class="text-2xl font-bold mt-0 mb-4 pl-0">Parte 2</h2>
                    <div class="flex items-center"><el-tag class="text-lg">Destrezas:
                            <el-tooltip class="box-item" effect="dark" content="Comprensión y expresión oral"
                                placement="top">
                                <el-icon class="mr-2 top-[2px]">
                                    <ElIconChatLineRound />
                                </el-icon>
                            </el-tooltip>

                            <el-tooltip class="box-item" effect="dark" content="Comprensión escrita" placement="top">
                                <el-icon class="top-[2px]">
                                    <ElIconEditPen />
                                </el-icon>
                            </el-tooltip>
                        </el-tag>
                    </div>
                </div>


                <p> Hoy Jan no se encuentra bien. Le duele todo... En parejas, vamos a ayudarle a comunicar qué le pasa.</p>
                <p>— SÍNTOMAS Y DOLORES. Dentro de la primera serie de palabras, busca su correspondiente imagen
                    relacionada con síntomas y dolores frecuentes.</p>
                <p> — DIAGNÓSTICOS. Haz tu propio diagnóstico y relaciona la enfermedad con su imagen correspondiente.
                    Cada fotografía puede relacionarse con dos enfermedades.</p>
                <p>— DIÁLOGO. Cuando hayas terminado, inicia una conversación con tu compañero para expresar dolor. (¿Qué
                    te pasa? Me duele…). </p>


                <DoctorSimptoms />

                <p>Comparte otros dolores o molestias que hayas tenido alguna vez, aparte de los que
                    hemos aprendido ahora, y apuntalos en los recuadros en blanco. Si no conoces la palabra en castellano,
                    puedes utilizar el móvil para buscarla.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <el-input placeholder="Un síntoma/diagnóstico que conozcas" v-model="item2"
                        @keydown.enter="addItem2(item2)">
                        <template #append>
                            <el-button v-model="item2" :icon="ElIconPlus" @click="addItem2(item2)"> Añadir </el-button>
                        </template>
                    </el-input>
                    <div class="flex items-center flex-wrap gap-2">
                        <span v-if="items2.length === 0">No has añadido ninguna palabra.</span>
                        <el-tag v-for="item in items2" :key="item" type="danger" effect="plain" size="large">{{
                            item }}</el-tag>
                    </div>
                </div>




                <div class="flex justify-between items-start mt-10">
                    <h2 class="text-2xl font-bold mt-0 mb-4 pl-0">Parte 3</h2>
                    <div class="flex items-center"><el-tag class="text-lg">Destrezas:
                            <el-tooltip class="box-item" effect="dark" content="Comprensión escrita" placement="top">
                                <el-icon class="top-[2px]">
                                    <ElIconEditPen />
                                </el-icon>
                            </el-tooltip>
                        </el-tag>
                    </div>
                </div>

                <p>
                    Jan ha buscado en el botiquín de casa algún remedio para mejorar su malestar. Pero también ha encontrado
                    cosas que no deberían estar allí guardadas. Descubre al intruso que se ha colado en la caja de las
                    medicinas. Puedes usar el <span class="italic">Diccionario esencial de la Lengua Española </span>(RAE)
                    para encontrar el significado
                    de las palabras que no conozcas.
                </p>

                <div class="flex items-center justify-end text-sm my-4">
                    <el-progress class="w-[200px]" :text-inside="false" :stroke-width="6"
                        :percentage="correctAnswers / (Object.keys(answers).length) * 100" status="success" />
                    {{ correctAnswers }} / {{ (Object.keys(answers).length) }} respuestas correctas
                </div>

                <div class="grid grid-cols-2 gap-8">

                    <div class="flex flex-col">
                        <div class="flex justify-end h-[52px]">
                            <img src="/img/icon-cross.png" class="text-right mb-4 max-h-[52px] max-w-[52px] float-r" />
                        </div>
                        <el-button @click="setChoice('1', 'termometro')" type="danger" plain class="mb-4">
                            termómetro
                        </el-button>
                        <el-button @click="setChoice('1', 'tirita')" type="danger" plain class="mb-4">
                            tirita
                        </el-button>
                        <el-button @click="setChoice('1', 'pastilla')" type="danger" plain class="mb-4">
                            pastilla
                        </el-button>
                        <el-button @click="setChoice('1', 'Moneda')"
                            :type="ejercicio['1'] === answers['1'] ? 'success' : 'danger'" plain class="mb-4">
                            moneda
                        </el-button>
                        <el-button @click="setChoice('1', 'jarabe')" type="danger" plain>
                            jarabe
                        </el-button>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-end h-[52px]">
                            <img src="/img/icon-pill.png" class="text-right mb-4 max-h-[52px] max-w-[52px] float-r" />
                        </div>
                        <el-button @click="setChoice('2', 'venda')" type="danger" plain class="mb-4">
                            venda
                        </el-button>
                        <el-button @click="setChoice('2', 'Radio')"
                            :type="ejercicio['2'] === answers['2'] ? 'success' : 'danger'" plain class="mb-4">
                            radio
                        </el-button>
                        <el-button @click="setChoice('2', 'covid')" type="danger" plain class="mb-4">
                            test COVID
                        </el-button>
                        <el-button @click="setChoice('2', 'crema')" type="danger" plain class="mb-4">
                            crema
                        </el-button>
                        <el-button @click="setChoice('2', 'mascarilla')" type="danger" plain>
                            mascarilla
                        </el-button>

                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-end h-[52px]">
                            <img src="/img/icon-bandaid.png" class="text-right mb-4 max-h-[52px] max-w-[52px] float-r" />
                        </div>
                        <el-button @click="setChoice('3', 'tijeras')" type="danger" plain class="mb-4">
                            tijeras
                        </el-button>
                        <el-button @click="setChoice('3', 'yodo')" type="danger" plain class="mb-4">
                            yodo
                        </el-button>
                        <el-button @click="setChoice('3', 'Lápiz')"
                            :type="ejercicio['3'] === answers['3'] ? 'success' : 'danger'" plain class="mb-4">
                            lápiz
                        </el-button>
                        <el-button @click="setChoice('3', 'gotas')" type="danger" plain class="mb-4">
                            gotas
                        </el-button>
                        <el-button @click="setChoice('3', 'jeringuilla')" type="danger" plain>
                            jeringuilla
                        </el-button>

                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-end h-[52px]">
                            <img src="/img/icon-bottle.png" class="text-right mb-4 max-h-[52px] max-w-[52px] float-r" />
                        </div>
                        <el-button @click="setChoice('4', 'alcohol')" type="danger" plain class="mb-4">
                            alcohol
                        </el-button>
                        <el-button @click="setChoice('4', 'auga')" type="danger" plain class="mb-4">
                            agua oxigenada
                        </el-button>
                        <el-button @click="setChoice('4', 'gasas')" type="danger" plain class="mb-4">
                            gasas
                        </el-button>
                        <el-button @click="setChoice('4', 'esparadrapo')" type="danger" plain class="mb-4">
                            esparadrapo
                        </el-button>
                        <el-button @click="setChoice('4', 'Rueda')"
                            :type="ejercicio['4'] === answers['4'] ? 'success' : 'danger'" plain>
                            rueda
                        </el-button>

                    </div>
                </div>



                <el-collapse v-model="verSolucion" accordion class="mt-6">
                    <el-collapse-item title="Solución" name="sol2">

                        Los intrusos son los siguientes: <br />
                        <span v-for="(answer, index) in answers" :key="index" class="mb-2 block">
                            {{ index }}. {{ answer }}
                        </span>
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