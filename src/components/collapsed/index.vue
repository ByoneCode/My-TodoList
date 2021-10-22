<template>
  <div class="collapsed-container" :class="{ 'done-visible': isdone }">
    <div class="collapsed" v-if="okCount !== 0">
      <div class="collapsed-btn" @click="toggleDone">
        <i class="iconfont icon-up"></i>
        <div class="btn-title">{{ name }}</div>
        <div class="btn-count">{{ okCount }}</div>
      </div>
    </div>
    <div class="collapsed-content" ref="content">
      <div class="done-item-list" ref="lists">
        <slot>slot list</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
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
// const content = ref(null)
// const lists = ref(null)
// const elHeight = ref(0)
// const listHeight = ref(0)


const toggleDone = () => {
  isdone.value = !isdone.value;
  // 获取coll-content的高度
  // const el: any = content.value
  // let height = el.offsetHeight
  // if(props.done === false){
  //   if(height === elHeight.value){
  //     el.style.height = 'auto'
  //     height = el.offsetHeight
  //     el.style.height = elHeight.value + 'px'
  //     let f = document.body.offsetHeight  // 必加
  //     el.style.height = height + 'px'
  //   }else{
  //     el.style.height = elHeight.value + 'px' 
  //   }
  // }else{
  //    if(height === elHeight.value){
  //     el.style.height = 'auto'
  //     height = el.offsetHeight
  //     el.style.height = elHeight.value + 'px'
  //     let f = document.body.offsetHeight  // 必加
  //     el.style.height = height + 'px'
  //   }else{
  //     el.style.height = height + 'px'
  //     let f = document.body.offsetHeight  // 必加
  //     el.style.height = elHeight.value + 'px'
  //   }
  // }
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