import type { RouteRecordRaw } from 'vue-router'
import MainLayout from 'src/layouts/MainLayout.vue'
import IndexPage from 'pages/IndexPage.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: MainLayout,
        children: [{ path: '', component: IndexPage }],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        redirect: '/',
    },
]

export default routes
