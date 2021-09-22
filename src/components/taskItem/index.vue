<template>
  <template v-for="item in taskListItem()">
    <div class="taskList-item" @click="store.commit('toggleTaskInfo',item)">
      <div class="item-select">
        <i title="完成" class="iconfont icon-noselect" v-if="done == 0"></i>
        <i title="未完成" class="iconfont icon-select" v-else></i>
      </div>
      <div class="item-title">
        <span v-if="done == 0">{{ item.name }}</span>
        <span v-else style="color: #919191;text-decoration: line-through;">{{ item.name }}</span>
      </div>
      <div class="item-star">
        <i class="iconfont icon-star"></i>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'

  const store = useStore()

  const props = defineProps({
    list: {
      type: Object,
      default: () => { }
    },
    done: {
      type: Number,
      default: 0
    }
  })
  // 过滤未完成和已完成
  function taskListItem() {
    if (props.done === 0) {
      return props.list.filter((item: any) => item.isok == 0)
    }else{
      return props.list.filter((item: any) => item.isok == 1)
    }
  }
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
.taskList-item {
  .item();
  background-color: #242426;
  @media (max-width: 768px) {
    width: 80%;
  }
  &:hover {
    background-color: #292929;
  }
  .item-select {
    i.icon-noselect,i.icon-select {
      .icons();
    }

  }
  .item-title {
    margin-left: 15px;
    color: #d9d9d9;
  }
  .item-star {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    i.icon-star {
      .icons();
    }
  }
}
</style>