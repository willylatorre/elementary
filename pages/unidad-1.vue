

<template>
    <div>
        <section class="hero flex flex-col relative">
            <div class="on-top md:max-w-[640px] hero-content">
                <h1 class="hero-logo">
                    Unidad 1 <br />
                    <span class="high">Comida</span>
                </h1>
                <p class="text-dark max-w-[400px] bg-bg hero-sub">
                    En esta unidad repasamos el léxico relacionado con la comida y el mercado. Vemos un vídeo de una receta
                    y aprendemos el vocabulario relacionado con ella. Después, vamos al mercado y compramos los
                    ingredientes para cocinar la receta.
                </p>
            </div>
            <div class="hero-img block-img--market">
            </div>
        </section>

        <section class="mt-4" id="receta">
            <h4 class="">
                actividad <br />
                <span class="high leading-normal">¡ÑAM ÑAM!</span>
            </h4>

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>

            <InfoActividadNamNam />

            <h3 class="font-serif font-bold text-primary text-xl">Actividad</h3>

            <ActividadNamNam />

        </section>

        <el-divider class="my-6">
        </el-divider>

        <section class="mt-10" id="mercado">
            <h4 class="">
                actividad <br />
                <span class="high">¡NOS VAMOS AL MERCADO!</span>
            </h4>

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>
            <InfoActividadMercado />

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Actividad</h3>
        

            <ActividadMercado />

        </section>
    </div>
</template>

<style lang="scss" scoped>
.block-img {
    &--market {
        background-image: url('../assets/img/photo-market.jpg');
    }
}

.profile-card {
    :deep(.el-card__header) {
        border: 0 !important;
        padding-bottom: 0;
    }
}
</style>