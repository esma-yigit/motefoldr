import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Default from '@/pages/Default.vue'
import Fullscreen from '@/pages/Fullscreen.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'default',
    component: Default,
    children: [],
  },
  {
    path: '/',
    name: 'fullscreen',
    component: Fullscreen,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
