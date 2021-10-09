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
          <task-item :list="allStore.taskList" :done="0" @mv-task="mvTask"></task-item>
        </div>
        <!-- collapsed list -->
        <collapsed
        :list="allStore.taskList"
        >
          <task-item :list="allStore.taskList" :done="1" @mv-task="mvTask"></task-item>
        </collapsed>
        <!-- done item list -->
       
      </div>
    </div>
    <!-- add -->
    <add-task></add-task>
    <mv-list :is-show="stat.isShow" :pos="stat.pos"></mv-list>
  </div>
</template>

<script setup lang="ts">
import AddTask from "/@/components/addTask/index.vue";
import TaskItem from "/@/components/taskItem/index.vue";
import Collapsed from "/@/components/collapsed/index.vue";
import MvList from "/@/components/mvList/index.vue"
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router"
import { getTaskList } from "/@/api/tasklist";


const store = useStore();
const allStore = store.state;

const route = useRoute();
console.log('当前列表页面id是',route.params.id);

const stat = reactive({
  isShow: false,
  pos: {
    left: '0px',
    top: '0px'
  }
})

onMounted(async () => {
  if(allStore.taskList.length === 0){
    const { data } = await getTaskList();
    store.commit("getTaskList", data);
  }
});

// 移动项目
// 监听body点击隐藏
document.body.addEventListener('click',(e: any) => {
  if(e.target.className.split(' ')[1] !== 'icon-transfer'){
    stat.isShow = false
  }
},false)
window.addEventListener('resize',() => {
  // 监测窗口改变时触发隐藏
  stat.isShow = false
})
const mvTask = (val: any,event: any) => {
  const position = event.target.getBoundingClientRect()
  stat.pos.top = position.top + position.height + 12 + 'px'
  stat.pos.left = position.left - 105 + 'px'
  stat.isShow = true
  console.log(val);
  
}

</script>

<style lang="less" scoped>
@import "./style";
</style>