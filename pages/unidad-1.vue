<script setup>
const value = ref()
const value2 = ref()
const icons = [ElIconBowl, ElIconBowl, ElIconBowl]
const icons2 = [ElIconShoppingCartFull, ElIconShoppingCartFull, ElIconShoppingCartFull] 
</script>

<template>
    <div>
        <section class="hero flex flex-col relative">
            <div class="on-top lg:max-w-[640px] hero-content">
                <h1 class="hero-logo">
                    Unidad 1 <br />
                    <span class="high">Comida</span>
                </h1>
                <p class="text-dark lg:max-w-[400px] bg-bg hero-sub">
                    En esta unidad repasamos el léxico relacionado con la comida y el mercado. Vemos un vídeo de una receta
                    y aprendemos el vocabulario relacionado con ella. Después, vamos al mercado y compramos los
                    ingredientes para cocinar la receta.
                </p>
            </div>
            <div class="hero-img block-img--market">
            </div>
        </section>

        <section class="mt-4" id="receta">
            <h4 class="bg-bg rounded-br-xl pr-3 pb-3">
                actividad <br />
                <span class="high leading-normal">¡ÑAM ÑAM!</span>
            </h4>
            <img src="../assets/img/photo-cooking.jpg" class="inline-img" alt="cooking" />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>

            <InfoActividadNamNam />

            <h3 class="font-serif font-bold text-primary text-xl">Actividad</h3>

            <ActividadNamNam />

        </section>

        <section class="mt-10" id="mercado">
            <h4 class="bg-bg rounded-br-xl pr-3 pb-3 max-w-[520px]">
                actividad <br />
                <span class="high">¡NOS VAMOS AL MERCADO!</span>
            </h4>

            <img src="../assets/img/photo2.jpg" class="inline-img" alt="cooking" />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>
            <InfoActividadMercado />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Actividad</h3>


            <ActividadMercado />

        </section>

        <section>
            <el-card class="profile-card !opacity-100" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <span class="font-serif font-bold text-primary text-xl"><el-icon class="mr-2 top-[2px]">
                                <ElIconShop />
                            </el-icon>Visita al mercado</span>
                    </div>
                </template>
                Para finalizar la unidad, vamos a ir al mercado y vamos a comprar los ingredientes para cocinar la receta.
                <br />
                ¡Recuerda poner en práctica todo lo que has aprendido en esta unidad y usar el vocabulario que hemos visto!
            </el-card>
        </section>

        <section>
            <h4 class="bg-bg rounded-br-xl pr-3 pb-3">
                somos <br />
                <span class="high leading-normal">EVALUACIÓN</span>
            </h4>
            <p>
                La evaluación de las actividades se basa en tres partes:
            </p>
            <p> <span class="font-serif font-bold">CORRECCIÓN AUTOMÁTICA.</span> En los ejercicios interactivos aparece un
                contador
                con la progresión del ejercicio.
                Con esto, el alumno puede comprobar al instante si su respuesta es correcta o no.
            </p>
            <p> <span class="font-serif font-bold">OBSERVACIONES DE LA PROFESORA.</span> En las actividades de interacción
                oral el alumno
                recibe en el momento pequeñas correcciones por
                parte de la profesora. Al finalizar las actividades la profesora les da una valoración/reflexión más
                pormenorizada. </p>
            <p><span class="font-serif font-bold">AUTOEVALUACIÓN.</span> Tras la corrección automática y las observaciones
                de la profesora, el alumno
                se autoevalúa con la siguiente ficha. En ella puede valorar individualmente su trabajo en función de los
                objetivos iniciales: </p>
            <el-card shadow="never" class="mt-4">
                <div class="flex items-center justify-between">
                    ¿Puedes entender una receta y saber los alimentos?
                    <el-rate v-model="value" :icons="icons" :void-icon="ElIconBowl" class="ml-4 rate" size="large"
                        :colors="['#FF9900', '#409eff', '#67c23a']" />
                </div>

                <div class="flex items-center justify-between">
                    ¿Puedes ir al mercado y hacer la compra?
                    <el-rate v-model="value2" :icons="icons2" :void-icon="ElIconShoppingCart" class="ml-4 rate" size="large"
                        :colors="['#FF9900', '#409eff', '#67c23a']" />
                </div>



            </el-card>

        </section>
    </div>
</template>

<style lang="scss" scoped>
.block-img {
    &--market {
        background-image: url('../assets/img/photo-market.jpg');
    }

    &--cooking {
        background-image: url('../assets/img/photo-market.jpg');
    }
}

.profile-card {
    :deep(.el-card__header) {
        border: 0 !important;
        padding-bottom: 0;
    }
}

.rate {
    :deep(.el-icon) {
        height: 2rem;
        widows: 2rem;
        font-size: 2rem;
    }
}
</style>