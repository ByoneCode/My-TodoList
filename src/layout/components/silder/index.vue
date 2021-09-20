<template>
    <aside class="container__sidebar" :class="{open_side:isopen}" @click="emit('closeSide')">
      <div class="sidebar">
        <p class="side_title">
          My TodoList
        </p>
        <div class="side_user">
            <div class="avatar">
              <span>杰</span>
            </div>
            <div class="info">
              <p>ByoneJie</p>
              <p>2488068072@qq.com</p>
            </div>
          <div class="search">
            <i class="iconfont icon-serch"></i>
          </div>
        </div>
        <side-nav
        :list="stat.navList"
        ></side-nav>
        <div class="side_hr"></div>
        <side-list></side-list>
        <div class="side_add">
          <i class="iconfont icon-add"></i>
          <span>新建列表</span>
        </div>
      </div>
    </aside>
</template>

<script setup lang="ts">
import SideNav from './SideNav.vue'
import SideList from './SideList.vue'

import { reactive } from 'vue'
const props = defineProps({
  isopen: {
    type: Boolean,
    default: false
  }
})

const stat = reactive({
  navList: [
  {
    title: '我的一天',
    icon: 'taiyang',
    path: '/',
    hidden: false
  },
  {
    title: '重要',
    icon: 'star',
    path: '/collect/index',
    hidden: false
  },
  {
    title: '计划内',
    icon: 'jihua',
    path: '/',
    hidden: false
  },
  {
    title: '已分配给我',
    icon: 'people',
    path: '/',
    hidden: false
  },
  {
    title: '任务',
    icon: 'home',
    path: '/',
    hidden: false
  }]
})

const emit = defineEmits(['closeSide'])
</script>

<style lang="less" scoped>
  @import "./index";
</style>