<template>
    <div class="min-h-[100vh] p-4 bg-bg">
        <div class="fixed top-0 left-0 bg-bg  w-full z-[100]">
            <nav class="p-3 flex flex-wrap justify-between items-center max-w-[840px] mx-auto min-h-[60px]">
                <h3 class="text-[2rem]"><span class="high text-primary">TRIANA</span></h3>
                <div class="flex items-center overflow-auto text-sm md:text-base" v-if="$route.path === '/'">
                    <a href="/#equipo">Equipo</a>
                    <span class="mx-2">/</span>
                    <a href="/#alumnos">Alumnos</a>
                    <span class="mx-2">/</span>
                    <a href="/#contenido">Contenido</a>
                    <span class="mx-2">/</span>
                    <a href="/#actividades">Actividades</a>
                </div>
                <nuxt-link to="/#actividades" class="text-dark text-xs" v-else>
                    <el-icon class="mr-2">
                        <ElIconArrowLeftBold />
                    </el-icon>
                    <span class="font-serif">Todas las unidades</span>
                </nuxt-link>
            </nav>
        </div>
        <div class="max-w-[840px] mx-auto">
            <main>
                <NuxtPage />
            </main>
        </div>
        <footer class="flex flex-col items-center justify-center pt-6 pb-8">
            <img src="./assets/img/logo.svg" width="180" alt="elementary logo" />
            <p>un proyecto de</p>
            <div>Ana Aedo</div>
            <div>Anna Gallart</div>
            <div>Ana Hontangas</div>
            <div>Ruth Salaverría</div>
        </footer>
    </div>
</template>

  