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
import { computed, ref, watch } from "vue";
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

const okCount = computed(() => {
  if(props.isok === 1){
    return props.list.filter((item: any) => item.isok === 1).length
  }
  return props.list.length
});

const okVal = computed(() => {
  return props.list.filter((item: any) => item.isok === 1)
});




const isdone = ref(props.done);
const content = ref(null)
const elHeight = ref(0)

// 监听内容的变化(解决打开面板添加数据时面板的高度不变导致的隐藏新添加的数据)
watch(okVal,(newval,oldval) => {
  const el: any = content.value
  let height = el.offsetHeight
  if(newval.length !== oldval.length){
    if(newval.length > oldval.length){
      if(isdone.value) {
        el.style.height = (height + 60) + 'px'
      }
    }else{
      el.style.height = (height - 60) + 'px'
    }
  }
  
})

const toggleDone = () => {
  isdone.value = !isdone.value;
  // 获取coll-content的高度
  const el: any = content.value
  let height = el.offsetHeight
  if(props.done === false){
    if(height === elHeight.value){
      el.style.height = 'auto'
      height = el.offsetHeight
      el.style.height = elHeight.value + 'px'
      let f = document.body.offsetHeight  // 必加
      el.style.height = height + 'px'
    }else{
      el.style.height = elHeight.value + 'px' 
    }
  }else{
     if(height === elHeight.value){
      el.style.height = 'auto'
      height = el.offsetHeight
      el.style.height = elHeight.value + 'px'
      let f = document.body.offsetHeight  // 必加
      el.style.height = height + 'px'
    }else{
      el.style.height = height + 'px'
      let f = document.body.offsetHeight  // 必加
      el.style.height = elHeight.value + 'px'
    }
  }
};

</script>

<style lang="less" scoped>
@import "./style";
</style>