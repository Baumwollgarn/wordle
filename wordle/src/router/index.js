import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/WelcomeView.vue'),
            props: {hint: Boolean}
        },
        {
            path: '/level/1',
            name: 'level1',
            component: () => import('../views/Level1View.vue'),
            props: {hint: Boolean}
        },
        {
            path: '/level/2',
            name: 'level2',
            component: () => import('../views/Level2View.vue')
        },
        {
            path: '/level/3',
            name: 'level3',
            component: () => import('../views/Level3View.vue')
        },
        {
            path: '/level/:level',
            name: 'levelNotFound',
            component: () => import('../views/ErrorView.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: () => import('../views/ErrorView.vue')
        }
    ]
})

export default router
