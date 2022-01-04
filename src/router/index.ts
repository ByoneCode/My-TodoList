import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home/index'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    redirect: '/home/index',
    children:[
    { 
      path: 'index',
      component: () => import('/@/views/task/index.vue'),
      meta: { title: 'Home', top: 108 }
    }
    ]
  },
  {
    path: '/star',
    name: 'Star',
    component: Layout,
    redirect: '/star/index',
    children:[
    { 
      path: 'index',
      component: () => import('/@/views/star/index.vue') ,
      meta: { title: 'Star', top: 12 }
    }
    ]
  },
  {
    path: '/note',
    name: 'Note',
    component: Layout,
    redirect: '/note/index',
    children:[
    { 
      path: 'index',
      component: () => import('/@/views/note/index.vue') ,
      meta: { title: 'Note', top: 60 }
    }
    ]
  },
  {
    path: '/task',
    name: 'Task',
    component: Layout,
    children: [
      {
        path: '/task/:id',
        name: 'taskGroup',
        component: () => import('/@/views/diyTask/index.vue'),
        meta: { title: 'Task' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
