<template>
  <teleport to="body">
    <div class="mv-list" v-show="isShow" :style="pos">
      <div class="mv-title">移动到</div>
      <div v-if="gid" class="mv-item" @click="mvItem(0)">任务</div>
      <template v-for="item in list">
        <div class="mv-item" @click="mvItem(item.id)">{{ item.title }}</div>
      </template>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { updTaskList } from '/@/api/taskList';
const props = defineProps({
  list: {
    type: Object
  },
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
  },
  id: {
    type: Number,
    require: true
  },
  gid: {
    type: [String,Number,Array],
    default: 0,
    require: true
  }
})

const emit = defineEmits(['closeMvList','onSuccess'])


// 监听body点击隐藏
document.body.addEventListener('click',(e: any) => {
  if(e.target.className.split(' ')[1] !== 'icon-transfer'){
    emit('closeMvList')
  }
},false)

window.addEventListener('resize',() => {
  // 监测窗口改变时触发隐藏
  emit('closeMvList')
})

// 移动任务
const mvItem = async (gid: number) => {
  const res: any = await updTaskList({id:props.id,gid:gid})
  if(res.code === 200){
    emit('onSuccess',props.id)
  }
}
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