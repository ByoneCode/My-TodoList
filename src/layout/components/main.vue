<template>
  <div class="container">
    <!-- Navigation -->
    <Nav :isopen="open" @closeSide="close"></Nav>

    <!-- Main -->
    <main class="container__main">
      <div class="app-tools">
        <div class="app-side">
          <i class="iconfont icon-nav" @click="open = true"></i>
        </div>
      </div>

      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Nav from "./nav/index.vue";
import { ref } from "vue";
const open = ref(false);
function close() {
  open.value = false;
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  height: 100vh;
  .container__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: auto;
    background-color: @bg-color;
    .app-tools {
      @media (min-width: 768px) {
        display: none;
      }
      .app-side {
        padding: 0 0.8rem;
        margin: .3rem 0;
        i.icon-nav {
          border-radius: 5px;
          padding: 0.2rem;
          font-size: 35px;
          color: @text-color-grey;
          .ease();
          &:hover {
            background-color: @btn-color-hl;
            .ease();
          }
        }
      }
    }
  }
}
</style>