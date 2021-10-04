<template>
  <div class="collapsed-container" :class="{ 'done-visible': isdone }">
    <div class="collapsed" v-if="okCount !== 0">
      <div class="collapsed-btn" @click="toggleDone">
        <i class="iconfont icon-up"></i>
        <div class="btn-title">{{ name }}</div>
        <div class="btn-count">{{ okCount }}</div>
      </div>
    </div>
    <div class="collapsed-content">
      <div class="done-item-list">
        <slot>slot list</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: "已完成",
  },
  isok: {
    type: Number,
    default: 1,
  },
  // 默认关闭列表
  done: {
    type: Boolean,
    default: false,
  }
});

const isdone = ref(props.done);
const toggleDone = () => {
  isdone.value = !isdone.value;
};
const okCount = computed(() => {
  if(props.isok === 1){
    return props.list.filter((item: any) => item.isok === 1).length
  }
  return props.list.length
});
</script>

<style lang="less" scoped>
@import "./style";
</style>