<template>
    <div class="relative">
        <section class="hero flex flex-col relative">
            <div class="on-top lg:max-w-[640px] hero-content  mb-8 lg:mb-0" style="margin-top:20vh">
                <h1 class="hero-logo">
                    somos <br />
                    <span class="high">TRIANA</span>
                </h1>
                <p class="text-dark max-w-[400px] hero-sub">
                    ¡Hola!
                    <span class="font-serif font-bold font-dark">somos TRIANA</span>, un centro valenciano de enseñanza de
                    español para extranjeros. Pero, sobre todo, somos un
                    equipo de cuatro mujeres apasionadas de la cultura y la lengua española que disfrutamos compartiendo,
                    enseñando y aprendiendo con nuestros estudiantes de todo el mundo.
                </p>
                <a href="#actividades" class="text-primary link">
                    <span class="font-serif">Ver actividades</span>
                    <el-icon class="text-lg ml-2">
                        <ElIconEditPen />
                    </el-icon>
                </a>
            </div>
            <div class="hero-img block-img--general">
            </div>
        </section>
        <section id="equipo">
            <h2 class="inverted">
                somos <br />
                <span class="high">EQUIPO</span>
            </h2>

            <p>
                <span class="high">TRIANA</span> somos Ruth y un trío de Anas.
            </p>
            <p>
                Esta actividad grupal que nos ha unido forma parte de la asignatura &lt;&lt;La Competencia Léxica&gt;&gt; en
                el
                Aprendizaje
                de ELE. En ella los distintos bagajes profesionales de cada una de nosotras han nutrido la actividad y
                enriquecido todo el progreso creativo y productivo
            </p>
            <p>
                Coincidiendo con la naturaleza online del máster, la organización del trabajo se ha llevado a cabo mediante
                aplicaciones de mensajería digital, reuniones por videollamada y documentos de texto compartidos. Todo el
                contenido del trabajo ha sido concebido, modificado y consensuado durante las sesiones por videoconferencia
                y por las opciones de comentarios y sugerencias que proporcionan los documentos compartidos. En las mismas
                se han decidido el tipo de actividades y posteriormente éstas han sido desarrolladas de forma individual por
                cada una de nosotras como se indica abajo.
            </p>

            <p>
                <nuxt-link to="/unidad-1#mercado" class="underline">«¡Nos vamos al mercado!»</nuxt-link>, desarrollada por
                Anna Gallart.
                <br />
                <nuxt-link to="/unidad-1#receta" class="underline">«Ñam-Ñam»</nuxt-link>, desarrollada por Ana
                Hontangas.<br />
                <nuxt-link to="/unidad-2#duele" class="underline">«Me duele todo...»</nuxt-link>, desarrollada por
                Ruth Salaverría.<br />
                <nuxt-link to="/unidad-2#doctor" class="underline">«¿Qué me pasa, doctor?»</nuxt-link>, desarrollada por
                Ana
                Aedo. <br /><br /><br />
                Página web, realizada por Anna
                Gallart.
            </p>

            <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-6">
                <el-card class="profile-card" shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span class="font-serif font-bold text-primary text-lg">Ana Aedo</span>
                        </div>
                    </template>
                    Falta texto.

                </el-card>
                <el-card class="profile-card" shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span class="font-serif font-bold text-primary text-lg">Anna Gallart</span>
                        </div>
                    </template>
                    He realizado la actividad ¡vamos al mercado!. Esta actividad se basa en un diálogo cotidiano de cómo
                    sería una conversación en un mercado y siempre teniendo en cuenta el perfil de estudiante al que nos
                    dirigimos.
                    El objetivo de esta actividad no es solo poner en práctica el léxico aprendido siguiendo las
                    consideraciones del artículo de José Ramón Gómez Molina, sino también llevarlos a un mercado real donde
                    deben practicar este tipo de conversación aprovechando que los estudiantes están en inmersión.

                </el-card>
                <el-card class="profile-card" shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span class="font-serif font-bold text-primary text-lg">Ana Hontangas</span>
                        </div>
                    </template>
                    Actividad Ñam-Ñam
                </el-card>
                <el-card class="profile-card" shadow="hover">
                    <template #header>
                        <div class="card-header">
                            <span class="font-serif font-bold text-primary text-lg">Ruth Salaverría</span>
                        </div>
                    </template>
                    Falta texto

                </el-card>
            </div> -->
        </section>

        <section id="alumnos">
            <div class="flex flex-col-reverse relative">
                <div class="on-top mt-4 lg:mt-0 lg:ml-[48%]">
                    <h2>
                        somos <br />
                        <span class="high">ALUMNOS</span>
                    </h2>
                    <div class="bg-bg lg:rounded-tl-[76px] lg:pl-7 lg:pt-3 lg:mt-[-12px]">
                        <p class="">
                            En
                            <span class="font-serif font-bold font-dark">somos TRIANA</span>, nuestros alumnos son una parte
                            esencial del proceso.
                        </p>
                        <ul>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm uppercase">Tamaño del
                                    grupo:</span> Diez
                                personas.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm uppercase">Contexto
                                    educativo:</span>
                                Clases de inmersión para jóvenes adultos de distintas edades en una academia de idiomas.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm uppercase">Número de
                                    horas:</span> 45 minutos de clase, tres veces por semana.
                            </li>
                            <li>
                                <div class="dash"></div><span
                                    class="text-primary font-serif text-sm uppercase">Nivel:</span> Clases
                                para un nivel A2. Algunos alumnos tienen un dominio consolidado del nivel A1 y otros
                                presentan algunas lagunas no muy significativas. Utilizan frases y palabras del ámbito
                                coloquial adquiridas durante visitas turísticas previas.
                            </li>
                            <li>
                                <div class="dash"></div><span
                                    class="text-primary font-serif text-sm uppercase">Nacionalidad:</span>
                                Holandesa.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm uppercase">Otros
                                    idiomas:</span>
                                Lengua materna holandés y nivel avanzado de inglés.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm uppercase">Objetivo:
                                </span>Desenvolverse en
                                actividades
                                comunes del día a día, conocer la costa mediterránea y su cultura. Aprender español.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm uppercase">Materiales:
                                </span>Materiales de
                                elaboración
                                propia adecuados a la actividad del contexto situacional.
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="block-img block-img--1 block-img--left block-img--top">
                </div>
            </div>
        </section>

        <section id="contenido">
            <div class="flex flex-col-reverse relative">
                <div class="on-top mt-4 lg:mt-0">
                    <h2 class="inverted">
                        somos <br />
                        <span class="high">CONTENIDO</span>
                    </h2>
                    <div class="bg-bg lg:rounded-tr-[76px] lg:pr-7 lg:pt-3 lg:mt-[-12px] max-w-[420px]">
                        <p class="">
                            En
                            <span class="font-serif font-bold font-dark">somos TRIANA</span>, encontrarás el siguiente tipo
                            de contenido
                        </p>
                        <ul>

                            <li>
                                <div class="dash"></div><span class="text-primary font-serif">PALABRAS
                                    :</span> La adquisición de léxico se considera una base del aprendizaje de idiomas. En
                                esta web se comparten una serie de actividades para el aprendizaje de vocabulario,
                                concretamente de palabras, según la tipología de J. R. Gómez Molina <a
                                    href="https://cvc.cervantes.es/ensenanza/biblioteca_ele/carabela/pdf/56/56_027.pdf"
                                    target="_new" class="underline">[Las unidades léxicas en
                                    español (2004)]</a>.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif">COMPETENCIA LÉXICA:
                                </span> La finalidad es mejorar la competencia léxica de los estudiantes, contribuyendo al
                                crecimiento de sus redes asociativas de palabras. Los retos que se plantean buscan también
                                aprovechar su conocimiento de otras lenguas para reconocer y asociar el vocabulario,
                                adquirirlo y utilizarlo en su vida cotidiana.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif">CONTEXTOS REALES:
                                </span> Se generarán situaciones y contextos muy cercanos a la realidad y que se encuentran
                                en su día a día: en el mercado, en el ambulatorio, en el restaurante, de fiesta, ¡una
                                multa!...
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif">CAMPOS LÉXICOS:
                                </span> El objetivo es trabajar diferentes campos léxicos, que se irán ampliando a lo largo
                                de los meses, y desarrollar sus destrezas de expresión y comprensión oral y escrita.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif">CONTEXTO DISCURSIVO:
                                </span> El léxico se trabajará en un contexto discursivo, para que el estudiante conozca el
                                uso de esas palabras, y no únicamente su significado aislado.

                            </li>
                        </ul>
                    </div>

                </div>

                <div class="block-img block-img--group block-img--right block-img--top">
                </div>
            </div>
        </section>

        <section id="objetivos">
            <div class="flex flex-col-reverse relative">
                <div class="on-top mt-4 lg:mt-0">
                    <h2 class="">
                        somos <br />
                        <span class="high">OBJETIVOS</span>
                    </h2>
                    <div class="bg-bg ">
                        <p class="">
                            Los objetivos generales que se pretenden conseguir en las distintas actividades basadas en la
                            unidad léxica de las palabras son los siguientes.
                        </p>

                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 lg:mt-6">
                            <el-card class="profile-card" shadow="hover">
                                <template #header>
                                    <div class="card-header">
                                        <span class="font-serif font-bold text-primary text-lg"> <el-icon
                                                class="mr-2 top-[2px]">
                                                <ElIconApple />
                                            </el-icon>Alimentación y salud</span>
                                    </div>
                                </template>
                                Aprender el campo léxico de los temas alimentación y salud.


                            </el-card>
                            <el-card class="profile-card" shadow="hover">
                                <template #header>
                                    <div class="card-header">
                                        <span class="font-serif font-bold text-primary text-lg"><el-icon
                                                class="mr-2 top-[2px]">
                                                <ElIconShoppingCartFull />
                                            </el-icon> Inmersión</span>
                                    </div>
                                </template>
                                Favorecer y estimular la interacción oral dentro de un contexto de inmersión.


                            </el-card>
                            <el-card class="profile-card" shadow="hover">
                                <template #header>
                                    <div class="card-header">
                                        <span class="font-serif font-bold text-primary text-lg"> <el-icon
                                                class="mr-2 top-[2px]">
                                                <ElIconSunrise />
                                            </el-icon>Día a día</span>
                                    </div>
                                </template>
                                Dar a conocer y facilitar las herramientas para desenvolverse en situaciones cotidianas.
                            </el-card>
                        </div>



                        <el-card class="profile-card mt-4" shadow="hover">
                            <template #header>
                                <div class="card-header">
                                    <span class="font-serif font-bold text-primary text-lg"> <el-icon
                                            class="mr-2 top-[2px]">
                                            <ElIconGuide />
                                        </el-icon>Destrezas
                                    </span>
                                </div>
                            </template>
                            Este trabajo trata de otorgar más peso a la destreza oral, teniendo en cuenta que los alumnos se
                            encuentran en un contexto de inmersión donde su principal motivación es aprender la lengua y
                            poder comunicarse en situaciones cotidianas y diarias en el país de la lengua meta. Asimismo, en
                            cada una de las actividades propuestas destacan unas destrezas concretas que están detalladas
                            (indicadas) en la propia actividad.

                        </el-card>

                        <div class="text-sm mt-6">Nota: En cada actividad se especificarán los objetivos concretos.
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section id="actividades">
            <div class="flex flex-col-reverse relative">
                <div class="on-top mt-4 lg:mt-0">
                    <h2 class="inverted max-w-full">
                        somos <br />
                        <span class="high ">ACTIVIDADES</span>
                    </h2>
                    <div class="bg-bg ">

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-6">
                            <nuxt-link to="/unidad-1">
                                <el-card class="profile-card h-full" shadow="hover">
                                    <template #header>
                                        <div class="card-header">
                                            <span class="font-serif font-bold text-primary text-lg"> <el-icon
                                                    class="mr-2 top-[2px]">
                                                    <ElIconNotebook />
                                                </el-icon>Unidad 1: Comida</span>
                                            <el-button link class="cursor hover:underline text-sm" :icon="ElIconTopRight">
                                                Empezar
                                            </el-button>
                                        </div>
                                    </template>
                                    En esta unidad repetiremos el léxico relacionado con la comida y el mercado.
                                    <ul class="mt-4">
                                        <li>
                                            <div class="dash"></div><span class="text-primary font-serif text-sm">Actividad
                                                Cocinamos una
                                                receta (Ñam Ñam): </span>
                                            En esta actividad vamos a cocinar una receta típica española. Para ello,
                                            vamos
                                            a
                                            seguir una receta paso a paso y vamos a aprender el vocabulario relacionado con
                                            ella.
                                        </li>
                                        <li>
                                            <div class="dash"></div><span class="text-primary font-serif text-sm">Actividad
                                                Vamos al
                                                mercado
                                                (¡Qué rico!): </span>
                                            En esta actividad vamos a ir al mercado y vamos a comprar los ingredientes para
                                            cocinar
                                            la receta. Para ello, vamos a aprender el vocabulario relacionado con las frutas
                                            y verduras.
                                        </li>
                                    </ul>
                                </el-card>
                            </nuxt-link>
                            <nuxt-link to="/unidad-2">
                                <el-card class="profile-card h-full" shadow="hover">
                                    <template #header>
                                        <div class="card-header">
                                            <span class="font-serif font-bold text-primary text-lg"><el-icon
                                                    class="mr-2 top-[2px]">
                                                    <ElIconNotebook />
                                                </el-icon>Unidad 2: Salud</span>
                                            <el-button link class="cursor hover:underline text-sm" :icon="ElIconTopRight">
                                                Empezar
                                            </el-button>
                                        </div>
                                    </template>
                                    En esta unidad repetiremos el vocabulario relacionado con la salud y el médico.
                                    <ul class="mt-4">
                                        <li>
                                            <div class="dash"></div><span class="text-primary font-serif text-sm">Actividad
                                                Me duele todo... :
                                            </span>
                                            En esta actividad vamos a ir al médico y vamos a aprender vocabulario
                                            relacionado
                                            con la
                                            salud y las interacciones.
                                        </li>
                                        <li>
                                            <div class="dash"></div><span class="text-primary font-serif text-sm">Actividad
                                                ¿Qué me pasa, doctor?: </span>
                                            En esta actividad vamos a aprender vocabulario relacionado con la salud y las
                                            interacciones.
                                        </li>
                                    </ul>
                                </el-card>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.block-img {
    &--1 {
        background-image: url('../assets/img/photo3.jpg');
    }

    &--group {
        background-image: url('../assets/img/photo-group.jpg');
    }

    &--general {
        background-image: url('../assets/img/photo6.jpg');
    }
}




.profile-card {
    :deep(.el-card__header) {
        border: 0 !important;
        padding-bottom: 0;
    }
}



.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>