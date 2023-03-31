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
</style>