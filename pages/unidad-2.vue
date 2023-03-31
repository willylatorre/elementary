<template>
    <div>
        <section class="hero flex flex-col relative">
            <div class="on-top md:max-w-[640px] hero-content">
                <h1 class="hero-logo">
                    Unidad 2 <br />
                    <span class="high">Salud</span>
                </h1>
                <p class="text-dark max-w-[400px] bg-bg hero-sub">
                    En esta unidad repasamos el léxico relacionado con la salud y el cuerpo.
                </p>
            </div>
            <div class="hero-img block-img--health">
            </div>
        </section>

        <section class="mt-4" id="receta">
            <h4 class="bg-bg rounded-br-xl pr-3 pb-3">
                actividad <br />
                <span class="high leading-normal">ME DUELE TODO…</span>
            </h4>
            <img src="../assets/img/photo-headache.jpg" class="inline-img" alt="cooking" />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>

            <InfoActividadDuele />

            <h3 class="font-serif font-bold text-primary text-xl">Actividad</h3>


        </section>

        <section class="mt-10" id="mercado">
            <h4 class="bg-bg rounded-br-xl pr-3 pb-3 max-w-[520px]">
                actividad <br />
                <span class="high">¿QUÉ ME PASA, DOCTOR?</span>
            </h4>

            <img src="../assets/img/photo-doctor2.jpg" class="inline-img" alt="cooking" />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>
            <InfoActividadDoctor />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Actividad</h3>
            <ActividadDoctor />

        </section>


    </div>
</template>

<style lang="scss" scoped>
.block-img {
    &--health {
        background-image: url('../assets/img/photo-doctor.jpg');
    }
}

.profile-card {
    :deep(.el-card__header) {
        border: 0 !important;
        padding-bottom: 0;
    }
}
</style>