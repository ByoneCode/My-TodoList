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
          <span>任务{{route.params.id || '' }}</span>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="task-list">
      <div class="list-container">
        <!-- undone item list -->
        <div class="undone-item-list">
          <task-item :list="allStore.taskList" :done="0"></task-item>
        </div>
        <!-- collapsed list -->
        <collapsed
        :list="allStore.taskList"
        >
          <task-item :list="allStore.taskList" :done="1"></task-item>
        </collapsed>
        <!-- done item list -->
       
      </div>
    </div>
    <!-- add -->
    <add-task></add-task>
  </div>
</template>

<script setup lang="ts">
import AddTask from "/@/components/addTask/index.vue";
import TaskItem from "/@/components/taskItem/index.vue";
import Collapsed from "/@/components/collapsed/index.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router"
import { getTaskList } from "/@/api/tasklist";


const store = useStore();
const allStore = store.state;

const route = useRoute();
console.log('当前列表页面id是',route.params.id);


onMounted(async () => {
  if(allStore.taskList.length === 0){
    const { data } = await getTaskList();
    store.commit("getTaskList", data);
  }
});

</script>

<style lang="less" scoped>
@import "./style";
</style>