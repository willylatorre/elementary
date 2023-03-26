<template>
    <div>
        <section class="hero flex flex-col relative">
            <div class="on-top max-w-[640px] hero-content">
                <h1 class="hero-logo">
                    somos <br />
                    <span class="high">TRIANA</span>
                </h1>
                <p class="text-dark max-w-[400px] hero-sub">
                    ¡Hola!
                    <span class="font-serif font-bold font-dark">somos TRIANA</span>, un centro valenciano de enseñanza de
                    español para extranjeros. Pero, sobre todo, somos un
                    equipo de cuatro mujeres apasionadas con la cultura y la lengua española que disfrutamos compartiendo,
                    enseñando y aprendiendo con nuestros estudiantes de todo el mundo.
                </p>
            </div>
            <div class="hero-img">
            </div>
        </section>
        <section>
            <h2 class="inverted">
                somos <br />
                <span class="high">EQUIPO</span>
            </h2>

            <p>
                <span class="high">TRIANA</span> somos Ruth y un trío de Anas.
            </p>
            <p>

                Esta actividad grupal que nos ha unido forma parte de la asignatura La Competencia Léxica en el Aprendizaje
                de ELE. En ella los distintos bagajes profesionales de cada una de nosotras han nutrido la actividad y
                enriquecido todo el progreso creativo y productivo.
                Coincidiendo con la naturaleza online del Máster, la organización del trabajo se ha llevado a cabo mediante
                aplicaciones de mensajería digital, reuniones por videollamada y documentos de texto compartidos. Todo el
                contenido del trabajo ha sido concebido, modificado y consensuado durante las sesiones por videoconferencia.
                En las mismas se han decidido el tipo de actividades y posteriormente éstas han sido desarrolladas de forma
                individual por cada una de nosotras como se indica abajo.

                La creación de esta página web ha sido realizada
                por Anna Gallart.
            </p>

            <div class="grid grid-cols-2 gap-4 mt-6">
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
            </div>


        </section>

        <section>



            <div class="flex flex-col relative">
                <div class="on-top ml-[48%]">
                    <h2>
                        somos <br />
                        <span class="high">ALUMNOS</span>
                    </h2>
                    <div class="bg-bg rounded-tl-lg pl-4">
                        <p class="text-dark max-w-[400px] hero-sub">
                            En
                            <span class="font-serif font-bold font-dark">somos TRIANA</span>, nuestros alumnos son una parte
                            esencial del proceso.
                        </p>
                        <ul>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm">Tamaño del
                                    grupo:</span> Diez
                                personas.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm">Contexto
                                    educativo:</span>
                                Clases de inmersión para jóvenes adultos de distintas edades en una
                                academia
                                de
                                idiomas.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm">Número de
                                    horas:</span> 45
                                minutos de clase, dos veces por semana.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm">Nivel:</span> Clases
                                para un
                                nivel A2. Algunos alumnos tienen un dominio consolidado del nivel A1
                                y
                                otros
                                presentan algunas lagunas no muy significativas. Utilizan frases y palabras del ámbito
                                coloquial
                                adquiridas durante visitas turísticas previas.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm">Nacionalidad:</span>
                                Holandesa.
                            </li>
                            <li>
                                <div class="dash"></div><span class="text-primary font-serif text-sm">Otros idiomas:</span>
                                Lengua
                                materna holandés y nivel avanzado de inglés.
                            </li>
                            <li>
                                <div class="dash"></div><span
                                    class="text-primary font-serif text-sm">Objetivo:</span>Desenvolverse
                                en actividades comunes del día a día, conocer la Costa Mediterránea
                                y su
                                cultura. Aprender español.
                            </li>
                            <li>
                                <div class="dash"></div><span
                                    class="text-primary font-serif text-sm">Materiales:</span>Materiales
                                de elaboración propia adecuados a la actividad del contexto
                                situacional.
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="block-img-1">
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    min-height: 85vh;

    &-content {
        margin-top: 96px;
        // background-color: rgb(255 244 224 / 73%);
        padding: 24px;
        // border-radius: 12px;

        @media(max-width: 600px) {
            margin-top: 48px;
        }
    }

    &-sub {
        background: rgb(255, 244, 224);
        // background: linear-gradient(90deg, rgba(255, 244, 224, 1) 0%, rgba(255, 244, 224, 1) 81%, rgba(255, 191, 155, 1) 100%);
        border-radius: 0 6px 96px 0;
        padding: 12px 36px 12px 0;
        max-width: 420px;

        @media(max-width: 600px) {
            padding: 12px 0;
        }
    }

    &-logo {
        @media(max-width: 600px) {
            width: 90%;
        }
    }

    &-img {
        width: 55%;
        height: 400px;
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: url('../assets/img/photo1.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 12px 24px 0 36px;
        opacity: 0.9;
        z-index: 1;

        @media(max-width: 600px) {
            position: relative;
            width: 100%;
        }
    }
}

.block-img-1 {
    width: 55%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('../assets/img/photo2.jpeg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 24px 12px 36px;
    opacity: 0.9;
    z-index: 1;

    @media(max-width: 600px) {
        position: relative;
        width: 100%;
    }
}

.on-top {
    z-index: 2;
}

.profile-card {
    :deep(.el-card__header) {
        border: 0 !important;
        padding-bottom: 0;
    }
}

ul li {
    margin-bottom: 12px;
}
</style>