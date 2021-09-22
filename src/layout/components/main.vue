<template>
  <div class="container">
    <!-- Sidebar -->
    <Silder :isopen="open" @closeSide="close"></Silder>

    <!-- Main -->
    <main class="container__main">
      <div class="app-tools">
         <div class="app-title">
          <span>My TodoList</span>
        </div>
        <div class="app-side">
          <i class="iconfont icon-silde" @click="open = true"></i>
        </div>
      </div>
     
      <RouterView />
    </main>
    <!-- TaskInfo -->
    <task-info />
</div>
</template>

<script setup lang="ts">
  import Silder from './silder/index.vue'
  import TaskInfo from './taskInfo/index.vue'
  import {ref} from 'vue'
  const open = ref(false)
  function close() {
    open.value = false
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
      background-color: #1a1b1c;
      .app-tools{
        @media (min-width: 768px) {
          display: none;
        }
        .app-title{
          color: #fff;
          padding: .5rem 0 .5rem 1.2rem;
          font-size: 10px;
        }
        .app-side{
          padding: 0 1rem;
          i.icon-silde{
            font-size: 35px;
            color: #fff;
            &:hover{
              background-color: #282828;
            }
          }
        }
      }
      
    }
  }
</style>