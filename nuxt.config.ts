// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',
        '@element-plus/nuxt'
    ],

    css: [
        // '@/assets/css/cirrus.scss',
        '@/assets/scss/global.scss',
    ],

    elementPlus: {
        importStyle: 'scss'
    },

    tailwindcss: {
        viewer: false
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/element.scss" as element;`,
                },
            },
        },
    }
})
