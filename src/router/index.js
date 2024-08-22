import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: '/productDetail/:id',
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "single-product" */ '../views/ProductDetailView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
