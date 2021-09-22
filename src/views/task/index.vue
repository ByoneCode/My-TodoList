<template>
  <div class="task">
    <div class="taskToolsbar">
      <div class="taskToolsbar-title">
        <div class="tools-icon">
          <i class="iconfont icon-home"></i>
        </div>
        <div class="tools-title">
          <span>任务</span>
        </div>
      </div>
    </div>
    <div class="taskList">
      <div class="task-container" :class="{'coll-done':stat.isdone}">
        <div class="undone">
          <task-item
          :list="allStore.taskList"
          :done="0"
          ></task-item>
        </div>
        <div class="task-collapsed" v-if="okTaskCount !== 0">
          <div class="task-card" @click="stat.isdone = !stat.isdone">
            <i class="iconfont icon-up"></i>
            <div class="coll-title">已完成</div>
            <div class="coll-count">{{okTaskCount}}</div>
          </div>
        </div>
        <div class="task-done">
          <task-item
          :list="allStore.taskList"
          :done="1"
          ></task-item>
        </div>
       
      </div>
      <div class="main-background">
        <div class="backgroundLines"></div>
      </div>
    </div>
    <add-task></add-task>
  </div>
  
</template>

<script setup lang="ts">
import AddTask from '/@/components/addTask/index.vue'
import TaskItem from '/@/components/taskItem/index.vue'
import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { getTaskList } from '/@/api/tasklist'
const stat = reactive({
  isdone: true
})
const store = useStore()
const allStore = store.state

onMounted(async () => {
  const { data } = await getTaskList()
  store.commit('getTaskList',data)
})


const okTaskCount = computed(() => {
  return allStore.taskList.filter((item: any) => item.isok === 1).length
})


</script>

<style lang="less" scoped>
  .icons{
    font-size: 20px;
    color: #929292;
    font-weight: bold;
  }
  .item{
    margin: 5px auto;
    padding: 0 1rem;
    overflow: hidden;
    display: flex;
    z-index: 1;
    width: 90%;
    height: 55px;
    align-items: center;
    border-radius: 5px;
  }
  .task{
    flex: 1 1 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: background-color 0.3s;
    position: relative;
  }
  .taskToolsbar{
    padding: 0 0 1rem 1rem;
    @media (min-width: 768px) {
      padding-top: 2rem;
    }
    .taskToolsbar-title {
      display: flex;
      align-items: center;
      .tools-icon{
        i.icon-home{
          font-size: 30px;
          color: #788cde;
        }
      }
      .tools-title>span{
        font-size: 30px;
        font-weight: bold;
        margin-left: .8rem;
        color: #788cde;
      }
    }
  }
  .taskList{
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
    padding-bottom: 100px;
    .task-container{
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width:2px;
      }
      &::-webkit-scrollbar-track{
        background: #1a1b1c;
        border-radius:2px;
      }
      &::-webkit-scrollbar-thumb{
        background: #858585;
        border-radius:10px;
      }
      .task-done{
        display: none;
      }
      &.coll-done{
        i.icon-up{
          transform: rotate(90deg);
        }
        .task-done{
          display: block;
        }
      }
      .task-collapsed{
        .item();
        padding-left: 0;
        padding-right: 2rem;
         @media (max-width: 768px) {
           width: 80%;
         }
        .task-card{
          background-color: #252627;
          display: flex;
          padding: .5rem 0;
          width: 100px;
          border-radius: 5px;
          font-size: 15px;
          place-items: center;
          color: #d9d9d9;
          cursor: default;
          user-select: none;
          &:hover{ background-color:#2e2f30;}
          i.icon-up{
            margin: 0 .3rem;
            transition: all .3s linear;
          }
          .coll-count{
            margin-left: .5rem;
          }
        }
      }
    }
    .main-background{
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1 1 0px;
      .backgroundLines {
        margin: 0 24px;
        flex: 1;
        background: linear-gradient(180deg, #1a1b1c, #1a1b1c 52px, #171819 52px, #171819 52px);
        background-size: 100% 53px;
        box-shadow: inset 0 1px 0 0 #171819;
      }
    }
  }
</style>