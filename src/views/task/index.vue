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
      <div class="list-container">
        <!-- undone item list -->
        <div class="undone-item-list">
          <task-item 
          :list="taskListItem(0)" 
          :done="0" 
          @mv-task="mvTask"
          @del-task-success="delTask"
          @done-success="doneSuccess"
          @star-success="starSuccess"
          ></task-item>
        </div>
        <!-- collapsed list -->
        <collapsed
        :list="stat.taskList"
        >
          <task-item 
          :list="taskListItem(1)" 
          :done="1" 
          @mv-task="mvTask"
          @del-task-success="delTask"
          @done-success="doneSuccess"
          @star-success="starSuccess"
          ></task-item>
        </collapsed>
        <!-- done item list -->
       
      </div>
    </div>
    <!-- add -->
    <add-task
    :gid="0"
    @add-success="addSuccess"
    ></add-task>
    <mv-list
    :list="stat.groupList"
    :is-show="stat.isShow" 
    :pos="stat.pos"
    :id="stat.group_id"
    :gid="0"
    @close-mv-list="stat.isShow = false"
    @on-success="mvSuccess"
    >
    </mv-list>
  </div>
</template>

<script setup lang="ts">
import AddTask from "/@/components/addTask/index.vue";
import TaskItem from "/@/components/taskItem/index.vue";
import Collapsed from "/@/components/collapsed/index.vue";
import MvList from "/@/components/mvList/index.vue"
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router"
import { getTaskList } from "/@/api/taskList";
import { getTaskGroup } from "/@/api/taskGroup";


const store = useStore();
const allStore = store.state;

const route = useRoute();


const stat = reactive({
  taskList: [{isok: 0,isstar:0}],
  isShow: false,
  pos: {
    left: '0px',
    top: '0px'
  },
  group_id: -1,
  groupList: [],
})




onMounted( async () => {
  // 获取任务列表
  const { data } = await getTaskList(0);
  stat.taskList = data.items
})
// 过滤任务列表
const taskListItem = computed(() => {
  return (done: number) => {
    return stat.taskList.filter((item: any) => item.isok === (done === 0 ? 0 : 1))
  }
})
// 移动项目
const mvTask = async (id: any,event: any) => {
  const position = event.target.getBoundingClientRect()
  stat.pos.top = position.top + position.height + 12 + 'px'
  stat.pos.left = position.left - 105 + 'px'
  stat.isShow = true
  stat.group_id = id
  const { data } = await getTaskGroup(0)
  stat.groupList = data.items
}
// 移动成功
const mvSuccess = (id: any) => {
  const index = stat.taskList.findIndex((el: any) => el.id === id)
  stat.taskList.splice(index,1)
}
// 删除项目
const delTask = (index: number) => {
  stat.taskList.splice(index,1)
}
// 添加项目
const addSuccess = (item: object) => {
  stat.taskList.push(item as never)
}
// 切换状态（完成——未完成）
const doneSuccess = (id: number,ok: number) => {
  const index = stat.taskList.findIndex((el: any) => el.id === id)
  stat.taskList[index].isok = ok
}
// 收藏状态
const starSuccess = (id: number,status: number) => {
  const index = stat.taskList.findIndex((el: any) => el.id === id)
  stat.taskList[index].isstar = status
}
</script>

<style lang="less" scoped>
@import "./style";
</style>