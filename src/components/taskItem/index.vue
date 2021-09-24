<template>
  <template v-for="item in taskListItem()">
    <div class="task-list-item" @click="store.commit('toggleTaskInfo', item)">
      <div class="item-isdone">
        <i title="完成" class="iconfont icon-undone" v-if="done == 0"></i>
        <i title="未完成" class="iconfont icon-done" v-else></i>
      </div>
      <div class="item-title">
        <span v-if="done == 0">{{ item.name }}</span>
        <span v-else style="color: #919191; text-decoration: line-through">{{
          item.name
        }}</span>
      </div>
      <div class="item-star">
        <i class="iconfont icon-star"></i>
      </div>
      <div class="item-del">
        <i class="iconfont icon-delete"></i>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  list: {
    type: Object,
    default: () => {},
  },
  done: {
    type: Number,
    default: 0,
  },
});
// 过滤未完成和已完成
function taskListItem() {
  if (props.done === 0) {
    return props.list.filter((item: any) => item.isok == 0);
  } else {
    return props.list.filter((item: any) => item.isok == 1);
  }
}
</script>

<style lang="less" scoped>
@import "./style";
</style>