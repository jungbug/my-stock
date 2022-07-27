import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string;
    }
}

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main',
        children: [],
        meta: {title: 'main'},
        component: () => import('@/components/app')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router