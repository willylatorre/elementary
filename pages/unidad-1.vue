

<template>
    <div>
        <section class="hero flex flex-col relative">
            <div class="on-top md:max-w-[640px] hero-content">
                <h1 class="hero-logo">
                    Unidad 1 <br />
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

        <section class="mt-4">
            <h4 class="">
                actividad <br />
                <span class="high">¡NOS VAMOS AL MERCADO!</span>
            </h4>

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Información</h3>
            <ul class="mt-4">
                <li>
                    <div class="dash"></div><span class="text-primary font-serif text-sm">
                        Tiempo de la actividad:</span> <el-icon class="mr-1 top-[2px]">
                        <ElIconClock />
                    </el-icon>20 minutos.
                </li>
                <li>
                    <div class="dash"></div><span class="text-primary font-serif text-sm">
                        Tipo de actividad: </span>Repaso del vocabulario sobre frutas y verduras aprendido en sesiones
                    anteriores.
                </li>
                <li>
                    <div class="dash"></div><span class="text-primary font-serif text-sm">
                        Destrezas:</span> comprensión y expresión auditiva, comprensión y expresión lectora, comprensión
                    y expresión escrita, comprensión y expresión oral.
                </li>

                <li>
                    <div class="dash"></div><span class="text-primary font-serif text-sm">
                        Objetivo de la actividad: </span> Los elementos que se están aprendiendo en esta conversación
                    son: <br /><br />
                    <strong>Vocabulario relacionado con frutas y verduras:</strong> manzanas, zanahorias, lechugas,
                    tomates. <br />
                    <strong>Preguntas y expresiones comunes en una verdulería: </strong>"¿En qué puedo ayudarte?", “¿Qué
                    me
                    recomiendas?”,
                    "¿necesitas algo más?", "¿Cuánto cuestan?" <br />
                    <strong>Precios y cantidades: </strong> el precio por kilo de las zanahorias, el precio por unidad
                    de las lechugas, el
                    número
                    de manzanas y lechugas que el cliente desea comprar.<br />
                    <strong>Gramática básica:</strong> identificar, reconocer y utilizar verbos en presente de
                    indicativo, usar adjetivos
                    para
                    describir características de los productos, usar artículos determinados e indeterminados aprendidos
                    en
                    clases anteriores.
                </li>
                <li class="mt-4">
                    <div class="dash"></div><span class="text-primary font-serif text-sm">Estrategias a aplicar en la
                        actividad:</span> Podemos relacionar esta conversación con las unidades léxicas en español que
                    propone
                    José Ramón Gómez Molina en su obra "Las Unidades Léxicas en Español".
                    Al tratarse de un nivel inicial (A1-A2) nuestra actividad será de carácter lúdico, seleccionando las
                    palabras más apropiadas en cada lugar del diálogo que se comparte con los estudiantes.
                    En este diálogo, podemos identificar varios tipos de unidades léxicas, tales como:<br /><br />
                    <strong>Lexemas:</strong> son los elementos básicos que tienen un significado por sí mismos. En esta
                    conversación,
                    algunos ejemplos de lexemas son: "manzanas", "zanahorias", "lechugas", "sopa", "cliente", "dependiente",
                    entre otros.<br />
                    <strong>Palabras compuestas:</strong> son palabras formadas por dos o más lexemas. En esta conversación,
                    algunos ejemplos
                    de palabras compuestas son: "verdulería", "lechuga romana", "lechuga iceberg".<br />
                    <strong>Palabras derivadas:</strong> son palabras que se forman a partir de un lexema, añadiendo uno o
                    varios morfemas.
                    En esta conversación, algunos ejemplos de palabras derivadas son: "dulces" (adjetivo que se forma a
                    partir del sustantivo "dulzura"), "crujientes" (adjetivo que se forma a partir del verbo "crujir"),
                    "recomendar" (verbo que se forma a partir del sustantivo "recomendación").<br /><br />
                    En resumen, este diálogo nos permite identificar y aplicar las unidades léxicas en español propuestas
                    por José Ramón Gómez Molina en su obra "Las Unidades Léxicas en Español". Esto es útil para mejorar la
                    comprensión y el uso del español, tanto en conversaciones cotidianas como en contextos más formales.
                </li>
                <el-card class="profile-card profile-card--stateless mt-4" shadow="never">
                    Es importante prestar atención a la pronunciación y entonación del español hablado, así como a
                    la
                    correcta
                    formación de las frases y preguntas en español. También es importante prestar atención al
                    vocabulario
                    específico de la conversación y tratar de incorporarlo al propio repertorio de palabras.
                </el-card>
            </ul>

            <h3 class="font-serif font-bold text-primary text-xl mt-8">Actividad</h3>
            <p>Escucha atentamente el diálogo y completa los huecos con las palabras más apropiadas que encontrarás en el
                recuadro y/o desplegable de la actividad. Al finalizar, puedes representar este diálogo con tu compañero/a.
            </p>

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