<template>
  <div class="task">
    <!-- heading -->
    <div class="heading">
      <div class="heading-main">
        <!-- icon -->
        <div class="heading-icon">
          <i class="iconfont icon-home"></i>
        </div>
        <!-- title -->
        <div class="heading-title">
          <span>任务</span>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="task-list">
      <div class="list-container" :class="{ 'done-visible': stat.isdone }">
        <!-- undone item list -->
        <div class="undone-item-list">
          <task-item :list="allStore.taskList" :done="0"></task-item>
        </div>
        <!-- collapsed list -->
        <div class="collapsed" v-if="okTaskCount !== 0">
          <div class="collapsed-btn" @click="stat.isdone = !stat.isdone">
            <i class="iconfont icon-up"></i>
            <div class="btn-title">已完成</div>
            <div class="btn-count">{{ okTaskCount }}</div>
          </div>
        </div>
        <!-- done item list -->
        <div class="done-item-list">
          <task-item :list="allStore.taskList" :done="1"></task-item>
        </div>
      </div>
      <!-- background -->
      <div class="main-background">
        <div class="background-lines"></div>
      </div>
    </div>
    <!-- add -->
    <add-task></add-task>
  </div>
</template>

<script setup lang="ts">
import AddTask from "/@/components/addTask/index.vue";
import TaskItem from "/@/components/taskItem/index.vue";
import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { getTaskList } from "/@/api/tasklist";
const stat = reactive({
  isdone: true,
});
const store = useStore();
const allStore = store.state;

onMounted(async () => {
  const { data } = await getTaskList();
  store.commit("getTaskList", data);
});

const okTaskCount = computed(() => {
  return allStore.taskList.filter((item: any) => item.isok === 1).length;
});
</script>

<style lang="less" scoped>
@import "../common/style.less";
@import "./style";
</style>