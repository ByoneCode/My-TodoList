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
          <span>星标</span>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="taskList">
      <div class="task-container">
        <collapsed
        :list="stat.task_star"
        :isok="0"
        name="待办事项"
        done
        >
          <task-item 
          :list="stat.task_star" 
          :done="0"
          :is-move="false"
          @del-task-success="delTask"
          @star-success="starSuccess"
          @done-success="doneSuccess"
          ></task-item>
        </collapsed>
        <collapsed
        :list="[]"
        :isok="0"
        name="便签"
        done
        >
        <div class="note-list">
            <div class="note-container" id="note-container">
                <!-- <div class="note-list-item note-add">
          <i class="iconfont icon-add"></i>
        </div> -->
                <note-item></note-item>
            </div>
        </div>
        </collapsed>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Collapsed from '/@/components/collapsed/index.vue';
import TaskItem from '/@/components/taskItem/index.vue';
import NoteItem from '/@/components/noteItem/index.vue'
import { useStore } from 'vuex'
import { computed, onMounted, reactive } from "vue";
import { getTaskStar } from '/@/api/taskList';

const store = useStore()

const allstat = store.state

const stat = reactive({
  task_star: []
})

// 获取星标任务
onMounted(async () => {
  const res = await getTaskStar()
  stat.task_star = res.data.items
})
// 删除项目
const delTask = (index: number) => {
  stat.task_star.splice(index,1)
}
// 收藏状态
const starSuccess = (id: number) => {
  const index = stat.task_star.findIndex((el: any) => el.id === id)
  stat.task_star.splice(index,1)
}
// 切换状态（完成——未完成）
const doneSuccess = (id: number,ok: number) => {
  const index = stat.task_star.findIndex((el: any) => el.id === id)
  stat.task_star.splice(index,1)
}
</script>

<style lang="less" scoped>
@import "./style";
</style>