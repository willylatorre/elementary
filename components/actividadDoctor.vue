<script setup>

const verSolucion = ref()



const ejercicio = reactive({})
const ejercicio2 = reactive({})


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
                    </el-icon> Lee el diálogo y responde a las preguntas.
                </p>



                <el-tag effect="plain" class="mr-2 ">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Paciente
                </el-tag>Buenos días, Doctora.
                <br />
                <el-tag effect="plain" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconSuitcaseLine />
                    </el-icon>Doctora
                </el-tag> Buenos días, dígame, ¿qué le sucede? <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Paciente
                </el-tag> Verá, desde ayer por la tarde estornudo y toso a cada minuto. Además, me duele mucho la cabeza y
                la tripa. De hecho, ayer vomité dos veces. Creo que está relacionado con algo que he comido. <br />
                <el-tag effect="plain" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconSuitcaseLine />
                    </el-icon>Doctora
                </el-tag> ¿Qué comiste ayer? <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Paciente
                </el-tag>A la hora de la comida un gazpacho, y a la hora de la merienda un café con leche y una tarta de
                pistacho.
                <br />
                <el-tag effect="plain" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconSuitcaseLine />
                    </el-icon>Doctora
                </el-tag> Entonces está claro: usted es alérgico al tomate y a los frutos secos como el pistacho. Además,
                probablemente sea intolerante a la lactosa, así que lo mejor es intentar tomar el café solo. <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Paciente
                </el-tag> ¿El dolor de cabeza cree que se debe también a la alergia? Tengo 38° de fiebre y mucho malestar
                físico. Además, no tengo ni gusto ni olfato. <br />
                <el-tag effect="plain" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconSuitcaseLine />
                    </el-icon>Doctora
                </el-tag> Puede que sea COVID. Tiene que hacerse una PCR, mientras tómese una pastilla de paracetamol cada 8
                horas y descanse en casa. No olvide de ponerse siempre la mascarilla. Siga estas recomendaciones y seguro
                que se encontrará mucho mejor.<br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Paciente
                </el-tag> De acuerdo, muchas gracias.
                <br />
                <el-tag effect="plain" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconSuitcaseLine />
                    </el-icon>Doctora
                </el-tag> Nos vemos en la próxima consulta dentro de un mes, ¿de acuerdo? <br />
                <el-tag effect="plain" class="mr-2">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconUser />
                    </el-icon>Paciente
                </el-tag> Perfecto, ¡hasta pronto!
                <br />
                <el-tag effect="plain" type="info">
                    <el-icon class="top-[2px] mr-1">
                        <ElIconSuitcaseLine />
                    </el-icon>Doctora
                </el-tag> ¡Hasta la próxima!


                <el-form class="mt-8" label-position="top" :model="ejercicio" style="max-width: 460px">
                    <el-form-item label="¿Qué verbos usa el paciente para describir sus síntomas?">
                        <el-input :rows="3" type="textarea" v-model="ejercicio['1']" />
                    </el-form-item>
                    <el-form-item label="¿Cuáles son los cinco sentidos?">
                        <el-input :rows="3" type="textarea" v-model="ejercicio['2']" />
                    </el-form-item>
                    <el-form-item label="¿Cuál es el diagnóstico que le da la doctora?">
                        <el-input :rows="3" type="textarea" v-model="ejercicio['3']" />
                    </el-form-item>
                    <el-form-item label=" Y tú, ¿tienes alguna alergia o intolerancia?">
                        <el-input :rows="3" type="textarea" v-model="ejercicio['4']" />
                    </el-form-item>
                </el-form>


                <el-collapse v-model="verSolucion" accordion class="mt-6">
                    <el-collapse-item title="Solución" name="sol">

                        <div class="text-dark text-bold">¿Qué verbos usa el paciente para describir sus síntomas?</div>
                        <div>Estornudo, toso, me duele, vomité, comí, tengo, tengo, tengo</div>
                        <div class="text-dark text-bold mt-3">¿Cuál es el diagnóstico que le da la doctora?</div>
                        <div>Alérgico al tomate y a los frutos secos, intolerante a la lactosa, probablemente sea COVID
                        </div>
                        <div class="text-dark text-bold mt-3">¿Cuáles son los cinco sentidos?</div>
                        <div>Olfato, gusto, vista, tacto, oído</div>
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


                <p> Observa el diagnóstico de la doctora. ¿Qué palabras conoces? Explícalas a tus compañeros. </p>
                <img src="../assets/img/diagnostico.png" />

                <el-collapse v-model="verSolucion" accordion class="mt-6">
                    <el-collapse-item title="Solución" name="sol2">


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