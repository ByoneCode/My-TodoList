<template>
  <div class="container">
    <!-- Sidebar -->
    <Silder />

    <!-- Main -->
    <main class="container__main">
      <RouterView />
    </main>
</div>
</template>

<script setup lang="ts">
  import Silder from './silder/index.vue'
</script>

<style scoped lang="less">
  .container {
    display: flex;
    .container__main {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: auto;
      background-color: #1a1b1c;
    }
  }
</style>