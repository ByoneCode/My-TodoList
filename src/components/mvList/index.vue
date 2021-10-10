<template>
  <teleport to="#app">
    <div class="mv-list" v-show="isShow" :style="pos">
      <div class="mv-title">移动到</div>
      <template v-for="item in stat.list">
        <div class="mv-item">{{ item.title }}</div>
      </template>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
    required: true
  },
  pos: {
    type: Object,
    default: {
      left: '0px',
      top: '0px'
    }
  }
})
const stat = reactive({
  list: [
    {
      title: '测试列表1'
    },
    {
      title: '测试列表2'
    }
  ]
})
</script>

<style lang="less" scoped>
.mv-list {
  position: fixed;
  width: 150px;
  background-color: @bg-color-items;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  user-select: none;

  .mv-title {
    padding: 0.5rem 0.5rem;
    font-weight: bold;
    color: @text-color-black;
  }

  .mv-item {
    padding: 0.5rem 0.5rem;
    color: @text-color-grey;
    border-radius: 2px;
    .ease();

    &:hover {
      background-color: @bg-color-items-hl;
      .ease();
    }

    &:active {
      background-color: @bg-color-items-ac;
      .ease();
    }
  }
}
</style>