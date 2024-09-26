import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import buildView from '../views/buildView.vue'
import cardView from '../views/cardView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/buildView',
      name: 'build',
      component: buildView
    },
    {
      path: '/cartView',
      name: 'carrinho',
      component: cardView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    },
  ]
})

export default router
