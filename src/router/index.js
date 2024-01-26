import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATHS } from '@/constants/router'
import HomeView from '@/views/HomeView.vue'
import { useUsersStore } from '@/stores/user'

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
      meta: {
        requireAuth: true
      },
      component: () => import('@/views/CocktailView.vue')
    },
    {
      path: ROUTER_PATHS.COCKTAILS_CARDS,
      name: ROUTER_PATHS.COCKTAILS_CARDS,
      meta: {
        requireAuth: true
      },
      component: () => import('@/views/CocktailsCard.vue')
    },
    {
      path: ROUTER_PATHS.COCKTAIL_RANDOM,
      name: ROUTER_PATHS.COCKTAIL_RANDOM,
      meta: {
        requireAuth: true
      },
      component: () => import('@/views/CocktailRandomView.vue')
    },
    {
      path: ROUTER_PATHS.AUTH_PAGE,
      name: ROUTER_PATHS.AUTH_PAGE,
      meta: {
        requireAuth: false
      },
      component: () => import('@/components/authPage/authPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/components/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const store = useUsersStore()
  if (to.meta?.requireAuth) {
    let isAuthenticated = store.$state.user

    if (!isAuthenticated) isAuthenticated = await store.loginWithCredential()

    if (!isAuthenticated)
      return {
        name: ROUTER_PATHS.AUTH_PAGE
      }
  }
})

export default router
