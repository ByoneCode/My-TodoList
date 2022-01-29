<template>
  <div class="task">
    <!-- heading -->
    <div class="heading">
      <div class="heading-main">
        <!-- icon -->
        <div class="heading-icon">
          <i v-if="allStore.groupInfo.icon === 'icon-nav'" class="iconfont icon-nav"></i>
          <i v-else>{{allStore.groupInfo.icon}}</i>
        </div>
        <!-- title -->
        <div class="heading-title">
          <span>{{allStore.groupInfo.title}}</span>
        </div>
        <div class="tool-btn">
          <i class="iconfont icon-delete" @click="delGroup"></i>
          <!-- <button>删除列表</button> -->
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
    :gid="route.params.id || 0"
    @add-success="addSuccess"
    ></add-task>
    <mv-list
    :list="stat.groupList"
    :is-show="stat.isShow" 
    :pos="stat.pos"
    :id="stat.group_id"
    :gid="route.params.id || 0"
    @on-success="mvSuccess"
    @close-mv-list="stat.isShow = false">
    </mv-list>
  </div>
</template>

<script setup lang="ts">
import AddTask from "/@/components/addTask/index.vue";
import TaskItem from "/@/components/taskItem/index.vue";
import Collapsed from "/@/components/collapsed/index.vue";
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, onBeforeRouteUpdate, useRouter } from "vue-router"
import { getTaskList } from "/@/api/taskList";
import { delTaskGroup, getGroupInfo } from "/@/api/taskGroup";
import MvList from "/@/components/mvList/index.vue"
import { getTaskGroup } from "/@/api/taskGroup";


const store = useStore();
const allStore = store.state;

const route = useRoute();
const router = useRouter();

const stat: any = reactive({
  taskList: [],
  isShow: false,
  pos: {
    left: '0px',
    top: '0px'
  },
  group_id: -1,
  groupList: [],
})

onMounted(async () => {
  if(allStore.groupInfo.length === undefined){
    const res: any = await getGroupInfo(route.params.id)
    store.commit('getGroupInfo',res.data.item)
  }
  stat.taskList = await (await getTaskList(route.params.id)).data.items;
})

// 路由更新后触发
onBeforeRouteUpdate(async (to, from) => {
  // 获取任务列表
  stat.taskList = await (await getTaskList(to.params.id)).data.items;
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
  const { data } = await getTaskGroup(route.params.id || 0)
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
// 删除组
const delGroup = async () => {
  const res: any = await delTaskGroup(route.params.id)
  if(res.code === 200){
    store.commit('delGroup',route.params.id)
    router.replace('/home/index')
  }
}
// 切换状态（完成——未完成）
const doneSuccess = (id: number,ok: number) => {
  const audio = new Audio('/src/assets/success.mp3')
  const index = stat.taskList.findIndex((el: any) => el.id === id)
  stat.taskList[index].isok = ok
  if(ok === 1){
    audio.play()
  }
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