import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
import Layout from '/@/layout/index.vue';
import { useStore } from "vuex";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children:[
    { 
      path: 'home',
      component: () => import('/@/views/task/index.vue'),
      meta: { title: 'Home', icon: 'home' }
    }
    ]
  },
  {
    path: '/collect',
    name: 'Collect',
    component: Layout,
    children:[
    { 
      path: 'index',
      component: () => import('/@/views/collect/index.vue') ,
      meta: { title: 'Collect', icon: 'star' }
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

