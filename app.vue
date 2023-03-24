<script setup>

const activeIndex = ref(1);
const handleSelect = (index) => {
    console.log('select')
}
const activeNames = ref('1')

const activities = [
    {
        content: 'Inicio de la clase',
        timestamp: '2023-04-15',
    },
    {
        content: 'Ejercicio 1',
        timestamp: '2023-04-13',
    },
    {
        content: 'Ejercicio 2',
        timestamp: '2023-04-11',
    },
]
</script>

<template>
    <div class=" min-h-[100vh] p-4">
        <div class="max-w-[840px] mx-auto">
            <nav class="min-h-[80px] py-3">
                <div class="flex items-center mb-8">
                    <img src="./assets/img/logo.svg" width="180" alt="elementary logo" />
                </div>

                <el-menu :default-active="activeIndex" class="el-menu-demo mt-4" mode="horizontal" @select="handleSelect"
                    background-color="transparent">
                    <el-menu-item index="1">
                        <template #title>
                            <el-icon>
                                <ElIconHouse />
                            </el-icon>
                            Inicio
                        </template>
                    </el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <ElIconNotebook />
                            </el-icon>
                            Lecciones
                        </template>
                        <el-menu-item index="2-1">Lección 1</el-menu-item>
                        <el-menu-item index="2-2">Lección 2</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="3">Acerca de</el-menu-item>
                </el-menu>
            </nav>
            <main class="my-6">

                <h1 class="text-xl font-bold">ELEmentary</h1>
                <p class="my-2">ELEmentary es un blablabla</p>
                <el-alert title="Nota" type="success" close-text="Entendido">
                    Contenido de la nota
                </el-alert>



                <section class="my-5">
                    <h2 class="w-full border-b text-lg pb-2 mb-6">Duración</h2>

                    <el-timeline>
                        <el-timeline-item v-for="(activity, index) in activities" :key="index"
                            :timestamp="activity.timestamp">
                            {{ activity.content }}
                        </el-timeline-item>
                    </el-timeline>


                    <div class="demo-progress">
                        <el-progress :percentage="50" />
                        <el-progress :percentage="100" status="success" />
                        <el-progress :percentage="100" status="warning" />
                        <el-progress :percentage="50" status="exception" />
                    </div>

                </section>

                <section class="my-5">
                    <h2 class="w-full border-b text-lg pb-2 mb-6">Tarjetas</h2>
                    <el-card class="box-card">
                        <template #header>
                            <div class="card-header">
                                <span>Card name</span>
                                <el-button class="button" text>Operation button</el-button>
                            </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                    </el-card>
                </section>


                <section class="my-5">
                    <h2 class="w-full border-b text-lg pb-2 mb-6">Cosas collapsables</h2>
                    <div class="demo-collapse">
                        <el-collapse v-model="activeNames">
                            <el-collapse-item title="Consistency" name="1">
                                <div>
                                    Consistent with real life: in line with the process and logic of real
                                    life, and comply with languages and habits that the users are used to;
                                </div>
                                <div>
                                    Consistent within interface: all elements should be consistent, such
                                    as: design style, icons and texts, position of elements, etc.
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Feedback" name="2">
                                <div>
                                    Operation feedback: enable the users to clearly perceive their
                                    operations by style updates and interactive effects;
                                </div>
                                <div>
                                    Visual feedback: reflect current state by updating or rearranging
                                    elements of the page.
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Efficiency" name="3">
                                <div>
                                    Simplify the process: keep operating process simple and intuitive;
                                </div>
                                <div>
                                    Definite and clear: enunciate your intentions clearly so that the
                                    users can quickly understand and make decisions;
                                </div>
                                <div>
                                    Easy to identify: the interface should be straightforward, which helps
                                    the users to identify and frees them from memorizing and recalling.
                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="Controllability" name="4">
                                <div>
                                    Decision making: giving advices about operations is acceptable, but do
                                    not make decisions for the users;
                                </div>
                                <div>
                                    Controlled consequences: users should be granted the freedom to
                                    operate, including canceling, aborting or terminating current
                                    operation.
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </section>

            </main>
        </div>
    </div>
</template>


  
<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    max-width: 480px;
    width: 100%;
}
</style>
  