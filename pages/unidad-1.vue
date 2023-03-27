<template>
    <div>
        <nav class="min-h-[60px] py-3">
            <div class="flex items-center justify-between">
                <nuxt-link to="/">
                    <img src="../assets/img/logo.svg" width="180" alt="elementary logo" />
                </nuxt-link>
                <!-- <nuxt-link to="/" class="text-dark link text-xs">
                    <el-icon class="mr-2">
                        <ElIconArrowLeftBold />
                    </el-icon>
                    <span class="font-serif">Todas las actividades</span>
                </nuxt-link> -->

                <el-breadcrumb :separator-icon="ElIconArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">Inicio</el-breadcrumb-item>
                    <el-breadcrumb-item>Actividad 1</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </nav>

        <section class="hero flex flex-col relative">
            <div class="on-top max-w-[640px] hero-content">
                <h1 class="hero-logo">
                    Actividad 1 <br />
                    <span class="high">Comida</span>
                </h1>
                <p class="text-dark max-w-[400px] hero-sub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl sit amet aliquam luctus, nunc nisl aliquet
                    tortor, vel aliquam nisl nisl sit amet lorem. Sed euismod,
                    nisl sit amet aliquam luctus, nunc nisl aliquet tortor, vel
                    aliquam nisl nisl sit amet lorem.
                </p>
            </div>
            <div class="hero-img block-img--market">
            </div>
        </section>
        <!-- <h1 class="inverted">
            Actividad 1 <br />
            <span>La comida</span>
        </h1> -->
    </div>
</template>

<style lang="scss" scoped>
.block-img {
    &--market {
        background-image: url('../assets/img/photo-market.jpg');
    }


}
</style>