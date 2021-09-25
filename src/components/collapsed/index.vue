<template>
  <div class="collapsed-container" :class="{ 'done-visible': isdone }">
    <div class="collapsed" v-if="okCount !== 0">
      <div class="collapsed-btn" @click="toggleDone">
        <i class="iconfont icon-up"></i>
        <div class="btn-title">{{name}}</div>
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
import { computed, ref } from "vue"
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: "已完成"
  }
})

const isdone = ref(false)
const toggleDone = () => {
  isdone.value = !isdone.value
}
const okCount = computed(() => {
  return props.list.filter((item: any) => item.isok === 1).length;
});
</script>

<style lang="less" scoped>
@import "../common/style";
// collapsed list
.collapsed-container {
   // done items list is invisible normally 
  .done-item-list {
      display: none;
  }
  // done items list is visible when opened
  &.done-visible {
    i.icon-up {
      transform: rotate(90deg);
    }

    .done-item-list {
      display: block;
    }
  }
  .collapsed {
    .item();
    padding-left: 0;
    padding-right: 2rem;

    @media (max-width: 768px) {
      width: 80%;
    }

    .collapsed-btn {
      display: flex;
      place-items: center;
      padding: 0.5rem 0;
      padding-right: .5rem;
      border-radius: 5px;
      font-size: 15px;
      color: #d9d9d9;
      background-color: #252627;
      user-select: none;
      cursor: default;
      &:hover {
        background-color: #2e2f30;
      }

      i.icon-up {
        margin: 0 0.3rem;
        transition: all 0.3s linear;
      }

      .btn-count {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>