<template>
  <div class="star">
    <!-- heading -->
    <div class="heading">
      <div class="heading-main">
        <!-- icon -->
        <div class="heading-icon">
          <i class="iconfont icon-star"></i>
        </div>
        <!-- title -->
        <div class="heading-title">
          <span contenteditable="true">星标</span>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="taskList">
      <div class="task-container">
        <collapsed
        :list="starTask"
        :isok="0"
        name="待办事项"
        done
        >
          <task-item :list="starTask" :done="0"></task-item>
        </collapsed>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Collapsed from "/@/components/collapsed/index.vue";
import TaskItem from "/@/components/taskItem/index.vue";
import { useStore } from 'vuex'
import { computed } from "vue";

const store = useStore()

const allstat = store.state

const starTask = computed(() => {
  return allstat.taskList.filter((el: any) => (el.is_star === 1 && el.isok === 0))
})



</script>

<style lang="less" scoped>
@import "./style";
</style>