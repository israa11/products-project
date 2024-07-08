import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import companyProduct from '@/components/companyProduct.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/company-product/:company',
    name: 'companyProduct',
    component: companyProduct
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
