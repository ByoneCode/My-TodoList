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
        :list="stat.list"
        name="待办事项"
        >
          <task-item :list="stat.list" :done="1"></task-item>
        </collapsed>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Collapsed from "/@/components/collapsed/index.vue";
import TaskItem from "/@/components/taskItem/index.vue";
import { reactive } from 'vue'

const stat = reactive({
  list:[
    {
      'name': '测试',
      'isok': 1
    }
  ]
})
</script>

<style lang="less" scoped>
@import "./style";
</style>