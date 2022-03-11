<script setup lang="ts">
import Sidebar from "/@/components/sidebar/index.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore()
const route = useRoute()
</script>

<template>
  <div class="container">
    <!-- Navigation -->
    <Sidebar />
    <!-- Main -->
    <main class="container__main">
      <div class="app-tools">
        <div class="app-side">
          <i class="iconfont icon-nav" @click="store.commit('toggleSide')"></i>
        </div>
      </div>
      <RouterView :key="route.path"/>
    </main>
  </div>
</template>

<style scoped lang="less">
@import "./style";
</style>