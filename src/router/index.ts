import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children:[
      { path: '/home',component: () => import('/@/views/task/index.vue') },
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
