import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATHS } from '@/constants/router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: ROUTER_PATHS.HOME,
            name: ROUTER_PATHS.HOME,
            component: HomeView
        },
        {
            path: ROUTER_PATHS.COCKTAIL,
            name: ROUTER_PATHS.COCKTAIL,
            component: () => import('@/views/CocktailView.vue')
        },
        {
            path: ROUTER_PATHS.COCKTAILS_CARDS,
            name: ROUTER_PATHS.COCKTAILS_CARDS,
            component: () => import('@/views/CocktailsCard.vue')
        },
        {
            path: ROUTER_PATHS.COCKTAIL_RANDOM,
            name: ROUTER_PATHS.COCKTAIL_RANDOM,
            component: () => import('@/views/CocktailRandomView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('@/components/NotFound.vue')
        }
    ]
})

export default router
