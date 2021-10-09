<template>
  <teleport to="#app">
    <div class="mv-list" v-show="isShow" :style="pos">
      <div class="mv-title">
        移动到
      </div>
      <template v-for="item in stat.list">
        <div class="mv-item">
          {{item.title}}
        </div>
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
.mv-list{
  position: fixed;
  width: 150px;
  background-color: azure;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>