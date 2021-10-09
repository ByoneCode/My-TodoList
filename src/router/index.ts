import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';
import { useStore } from "vuex";

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
        component: () => import('/@/views/diyTask/index.vue'),
        meta: { title: 'Task' }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  // if (!store.state.openTaskInfo) {
  //   store.commit('toggleTaskInfo')
  // }
  next()
})

