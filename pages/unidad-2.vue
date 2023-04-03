<script setup>
const value = ref()
const value2 = ref()
const icons = [ElIconCirclePlus, ElIconCirclePlus, ElIconCirclePlus]
const icons2 = [ElIconSchool, ElIconSchool, ElIconSchool] 
</script>

<template>
    <div>
        <section class="hero flex flex-col relative">
            <div class="on-top md:max-w-[640px] hero-content">
                <h1 class="hero-logo">
                    Unidad 2 <br />
                    <span class="high">Salud</span>
                </h1>
                <p class="text-dark max-w-[400px] bg-bg hero-sub">
                    En esta unidad repasaremos el léxico relacionado con la salud y el cuerpo. Aprenderemos el léxico
                    adecuado para expresar qué nos duele, a comunicarnos con un profesional de la salud y a entender un
                    diagnóstico médico.
                </p>
            </div>
            <div class="hero-img block-img--health">
            </div>
        </section>

        <section class="mt-4" id="duele">
            <h4 class="bg-bg rounded-br-xl pr-3 pb-3">
                actividad <br />
                <span class="high leading-normal">ME DUELE TODO…</span>
            </h4>
            <img src="/img/photo-headache.jpg" class="inline-img" alt="cooking" />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>

            <InfoActividadDuele />

            <h3 class="font-serif font-bold text-primary text-xl">Actividad</h3>

            <ActividadDuele />

        </section>

        <section class="mt-10" id="doctor">
            <h4 class="bg-bg rounded-br-xl pr-3 pb-3 max-w-[520px]">
                actividad <br />
                <span class="high">¿QUÉ ME PASA, DOCTOR?</span>
            </h4>

            <img src="/img/photo-doctor2.jpg" class="inline-img" alt="cooking" />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>
            <InfoActividadDoctor />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Actividad</h3>
            <ActividadDoctor />

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
                    ¿Puedes comunicar a otros qué te duele y cómo te encuentras?
                    <el-rate v-model="value" :icons="icons" :void-icon="ElIconCirclePlus" class="ml-4 rate" size="large"
                        :colors="['#FF9900', '#409eff', '#67c23a']" />
                </div>

                <div class="flex items-center justify-between">
                    ¿Puedes entender un diagnóstico sencillo del médico?
                    <el-rate v-model="value2" :icons="icons2" :void-icon="ElIconSchool" class="ml-4 rate" size="large"
                        :colors="['#FF9900', '#409eff', '#67c23a']" />
                </div>



            </el-card>

        </section>

    </div>
</template>

<style lang="scss" scoped>
.block-img {
    &--health {
        background-image: url('/img/photo-doctor.jpg');
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